// Entry program for the tech-support one-liner bounty. Copies the bundled entry.txt
// to the output directory after checking it is UTF-8 text of 1-199 characters.
// Node 22, standard library only.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SRC = join(import.meta.dirname, "entry.txt");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT = join(OUT_DIR, "entry.txt");

function main(): void {
  const buf = readFileSync(SRC);
  const text = buf.toString("utf8");
  const len = [...text].length;
  if (len < 1 || len > 199) throw new Error(`entry.txt is ${len} chars, outside 1-199`);
  if (!text.trim()) throw new Error("entry.txt is only whitespace");
  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(SRC, OUT);
  console.log(`entry.txt written: ${len} chars`);
}

main();
