import { Router } from "express";
import mongoose from "mongoose";
import { afterEach, expect, it, vi } from "vitest";
import { mountLocalPasswordReadRoutes } from "../src/modules/identity/server/local-password-read.server.js";

afterEach(() => vi.unstubAllEnvs());

it("permits a remote development database without requiring database writes", async () => {
  vi.stubEnv("NODE_ENV", "development");
  const connection = mongoose.createConnection();
  Object.defineProperties(connection, {
    host: { value: "isolated.example.mongodb.net" },
    name: { value: "aradun_development" },
  });
  try {
    expect(() =>
      mountLocalPasswordReadRoutes(Router(), connection, () => new Date()),
    ).not.toThrow();
    vi.stubEnv("NODE_ENV", "production");
    expect(() =>
      mountLocalPasswordReadRoutes(Router(), connection, () => new Date()),
    ).toThrow("local development only");
  } finally {
    await connection.close();
  }
});

it("refuses a production database in the development-only account view", async () => {
  vi.stubEnv("NODE_ENV", "development");
  const connection = mongoose.createConnection();
  Object.defineProperty(connection, "name", { value: "aradun_production" });
  try {
    expect(() =>
      mountLocalPasswordReadRoutes(Router(), connection, () => new Date()),
    ).toThrow("local development only");
  } finally {
    await connection.close();
  }
});
