import "server-only";
import { loadFrontendEnv } from "./env.public";

export const frontendEnv = loadFrontendEnv(process.env);
