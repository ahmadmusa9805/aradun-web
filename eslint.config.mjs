import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ...js.configs.recommended,
    files: ["frontend/public/*.js"],
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.next-local/**",
      "**/dist/**",
      ".tools/**",
      "**/next-env.d.ts",
    ],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: [
      "frontend/**/*.{ts,tsx}",
      "backend/**/*.ts",
      "tests/**/*.ts",
      "*.config.ts",
    ],
  })),
  {
    files: ["frontend/**/*.{ts,tsx}"],
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
    settings: { next: { rootDir: "frontend/" } },
  },
  {
    ...js.configs.recommended,
    files: ["scripts/**/*.mjs", "*.mjs", "backend/**/*.ts"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["frontend/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "mongoose",
            "mongoose/*",
            "mongodb",
            "mongodb/*",
            "@aradun/backend",
            "@aradun/backend/*",
            "**/backend/**",
          ],
        },
      ],
    },
  },
  {
    files: ["backend/**/*.ts"],
    rules: {
      "no-unused-vars": "off", // TypeScript-aware rule above handles type-only parameters.
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "next",
            "next/*",
            "react",
            "react/*",
            "react-dom",
            "react-dom/*",
            "server-only",
            "@aradun/frontend",
            "@aradun/frontend/*",
            "**/frontend/**",
          ],
        },
      ],
    },
  },
];
