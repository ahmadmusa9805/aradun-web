import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sides = ["frontend", "backend"];
const options = Object.fromEntries(
  sides.map((side) => {
    const filename = path.join(root, side, "tsconfig.json");
    const config = ts.readConfigFile(filename, ts.sys.readFile);
    if (config.error)
      throw new Error(
        ts.flattenDiagnosticMessageText(config.error.messageText, "\n"),
      );
    const parsed = ts.parseJsonConfigFileContent(
      config.config,
      ts.sys,
      path.dirname(filename),
    );
    if (parsed.errors.length)
      throw new Error(`Invalid ${side} TypeScript configuration`);
    return [side, parsed.options];
  }),
);

function violations(side, filename, text) {
  const other = side === "frontend" ? "backend" : "frontend";
  const forbidden =
    side === "frontend"
      ? /^(mongoose|mongodb)(\/|$)/
      : /^(next|react|react-dom|server-only)(\/|$)/;
  const source = ts.createSourceFile(
    filename,
    text,
    ts.ScriptTarget.Latest,
    true,
  );
  const failures = [];
  function check(node) {
    let literal;
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node))
      literal = node.moduleSpecifier;
    if (
      ts.isImportEqualsDeclaration(node) &&
      ts.isExternalModuleReference(node.moduleReference)
    )
      literal = node.moduleReference.expression;
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) &&
          node.expression.text === "require"))
    ) {
      literal = node.arguments[0];
      if (!literal || !ts.isStringLiteralLike(literal))
        failures.push(
          "computed import/require requires explicit boundary review",
        );
    }
    if (literal && ts.isStringLiteralLike(literal)) {
      const specifier = literal.text;
      const resolved = ts.resolveModuleName(
        specifier,
        filename,
        options[side],
        ts.sys,
      ).resolvedModule?.resolvedFileName;
      const candidate =
        resolved ??
        (specifier.startsWith(".")
          ? path.resolve(path.dirname(filename), specifier)
          : "");
      const otherRoot = path.join(root, other) + path.sep;
      if (
        forbidden.test(specifier) ||
        specifier === `@aradun/${other}` ||
        specifier.startsWith(`@aradun/${other}/`) ||
        (candidate && path.resolve(candidate).startsWith(otherRoot))
      ) {
        failures.push(`forbidden ${side} import: ${specifier}`);
      }
    }
    ts.forEachChild(node, check);
  }
  check(source);
  return failures;
}

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory()
      ? files(filename)
      : /\.[cm]?[jt]sx?$/.test(entry.name)
        ? [filename]
        : [];
  });
}

const failures = [];
let checked = 0;
for (const side of sides) {
  for (const filename of files(path.join(root, side, "src"))) {
    checked++;
    failures.push(
      ...violations(side, filename, fs.readFileSync(filename, "utf8")).map(
        (message) => `${path.relative(root, filename)}: ${message}`,
      ),
    );
  }
}

// Virtual forbidden fixtures exercise the same parser/resolver without adding application files.
const fixtures = [
  ["frontend", 'import db from "mongoose";', true],
  ["frontend", 'export * from "../../backend/src/app.js";', true],
  ["frontend", 'import api from "@aradun/backend";', true],
  ["frontend", 'void import("mongodb");', true],
  ["frontend", 'const db = require("mongoose");', true],
  ["frontend", "void import(variable);", true],
  ["backend", 'import "server-only";', true],
  ["backend", 'import Page from "../../frontend/src/app/page";', true],
  ["backend", 'import "next/headers";', true],
  ["backend", 'import { app } from "@/app.js";', false],
  ["frontend", 'import type { ReactNode } from "react";', false],
];
for (const [side, text, denied] of fixtures) {
  const result = violations(
    side,
    path.join(root, side, "src", "boundary-fixture.ts"),
    text,
  );
  if (result.length > 0 !== denied)
    failures.push(`Boundary fixture failed: ${text}`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.info(
    `Import boundaries PASS: ${checked} source files; ${fixtures.length} forbidden/allowed fixtures.`,
  );
}
