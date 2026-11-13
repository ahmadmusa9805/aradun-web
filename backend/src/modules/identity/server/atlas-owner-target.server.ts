import type { Connection } from "mongoose";
import { ServiceError } from "../../../server/errors.js";

/** Exact owner-approved development target; not a general remote lifecycle switch. */
export function assertAtlasOwnerUri(
  uri: string,
  database: string,
  environment: string,
) {
  const url = new URL(uri);
  if (
    environment !== "development" ||
    process.env.NODE_ENV === "production" ||
    database !== "aradun_development" ||
    url.protocol !== "mongodb+srv:" ||
    url.hostname !== "cluster0.mkpcxwu.mongodb.net" ||
    decodeURIComponent(url.pathname) !== "/aradun_development" ||
    !url.username ||
    !url.password ||
    url.hash
  )
    throw new ServiceError("forbidden");
}

export function assertAtlasOwnerConnection(
  connection: Pick<Connection, "name" | "host" | "readyState">,
  environment: string,
  armed: boolean,
) {
  if (
    !armed ||
    environment !== "development" ||
    process.env.NODE_ENV === "production" ||
    connection.readyState !== 1 ||
    connection.name !== "aradun_development" ||
    !/^[a-z0-9-]+\.mkpcxwu\.mongodb\.net$/.test(connection.host)
  )
    throw new ServiceError("forbidden");
}
