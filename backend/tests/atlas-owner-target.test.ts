import { expect, it, vi, afterEach } from "vitest";
import {
  assertAtlasOwnerUri,
  assertAtlasOwnerConnection,
} from "../src/modules/identity/server/atlas-owner-target.server.js";
afterEach(() => vi.unstubAllEnvs());
const uri =
  "mongodb+srv://SAMPLE:SAMPLE-not-a-real-password@cluster0.mkpcxwu.mongodb.net/aradun_development?retryWrites=true&w=majority";
it("accepts only the named authenticated SRV development target", () => {
  expect(() =>
    assertAtlasOwnerUri(uri, "aradun_development", "development"),
  ).not.toThrow();
  for (const value of [
    uri.replace("cluster0.mkpcxwu", "other-cluster.mkpcxwu"),
    uri.replace("/aradun_development", "/aradun_production"),
    uri.replace("mongodb+srv:", "mongodb:"),
    uri.replace("SAMPLE:SAMPLE-not-a-real-password@", ""),
    uri + "#fragment",
  ])
    expect(() =>
      assertAtlasOwnerUri(value, "aradun_development", "development"),
    ).toThrow();
  for (const environment of ["staging", "production"])
    expect(() =>
      assertAtlasOwnerUri(uri, "aradun_development", environment),
    ).toThrow();
  expect(() =>
    assertAtlasOwnerUri(uri, "aradun_development_other", "development"),
  ).toThrow();
  vi.stubEnv("NODE_ENV", "production");
  expect(() =>
    assertAtlasOwnerUri(uri, "aradun_development", "development"),
  ).toThrow();
});
it("requires exact connected database/member, development runtime and process arming", () => {
  const connection = {
    name: "aradun_development",
    host: "sample-shard-00-00.mkpcxwu.mongodb.net",
    readyState: 1 as const,
  };
  expect(() =>
    assertAtlasOwnerConnection(connection, "development", true),
  ).not.toThrow();
  for (const value of [
    { ...connection, name: "aradun_production" },
    { ...connection, host: "sample-shard-00-00.other.mongodb.net" },
    { ...connection, host: "sample.mkpcxwu.mongodb.net.evil.invalid" },
    { ...connection, readyState: 0 as const },
  ])
    expect(() =>
      assertAtlasOwnerConnection(value, "development", true),
    ).toThrow();
  expect(() =>
    assertAtlasOwnerConnection(connection, "development", false),
  ).toThrow();
  expect(() =>
    assertAtlasOwnerConnection(connection, "production", true),
  ).toThrow();
});
