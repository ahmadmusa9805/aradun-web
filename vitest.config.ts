import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  test: {
    projects: [
      {
        resolve: {
          alias: {
            "@": fileURLToPath(new URL("./backend/src", import.meta.url)),
          },
        },
        test: {
          name: "backend",
          environment: "node",
          include: ["backend/tests/**/*.test.ts"],
          testTimeout: 30_000,
          hookTimeout: 60_000,
        },
      },
      {
        plugins: [react()],
        resolve: {
          alias: {
            "@": fileURLToPath(new URL("./frontend/src", import.meta.url)),
          },
        },
        test: {
          name: "frontend",
          environment: "jsdom",
          include: ["frontend/tests/**/*.test.tsx"],
        },
      },
    ],
  },
});
