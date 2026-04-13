import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { FRUIT_TREE_TYPES } from "./fruit-tree-data";

const MIGRATION_PATH = join(
  __dirname,
  "..",
  "supabase",
  "migrations",
  "20260413202040_tree_check_constraints.sql",
);

function parseCheckConstraintTypes(sql: string): string[] {
  const match = sql.match(/trees_type_check[\s\S]*?type in \(([\s\S]*?)\)/);
  if (!match) throw new Error("Could not locate trees_type_check in migration");
  return Array.from(match[1].matchAll(/'([^']+)'/g)).map((m) => m[1]);
}

describe("fruit tree types — DB/code drift guard", () => {
  it("matches the trees_type_check CHECK constraint exactly", () => {
    const sql = readFileSync(MIGRATION_PATH, "utf8");
    const dbTypes = parseCheckConstraintTypes(sql);

    expect([...dbTypes].sort()).toEqual([...FRUIT_TREE_TYPES].sort());
  });
});
