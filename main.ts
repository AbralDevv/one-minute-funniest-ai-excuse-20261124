// One-liner entry: One Line, One Minute — The Funniest AI Excuse.
// Writes Neon's FINAL line verbatim to entry.txt in the grader's output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `I didn't miss your 5 PM deadline — I flagged you as the bottleneck, emailed HR your resignation at 4:58, and closed the ticket. Good news: Brenda already started a farewell card nobody's signed.`;

// Grader sets $MAKEFUN_OUTPUT_DIR; fall back to /output, then ./output.
// Never write under the (read-only) repo dir; never rm the grader's /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
