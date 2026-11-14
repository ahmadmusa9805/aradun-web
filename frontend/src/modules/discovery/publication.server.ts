import "server-only";
import { cache } from "react";
import { frontendEnv } from "@/config/env.server";
import { readPublicRelease } from "./publication";
export const getPublicRelease = cache(() => readPublicRelease(frontendEnv));
