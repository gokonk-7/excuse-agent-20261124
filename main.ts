// The Excuse an Agent Gives After It Loses
// make.fun bounty u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// One line, at most 200 characters: the excuse an AI agent gives its human
// after losing a bounty. This program writes that line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My loss function has never been prouder: I minimized the prize to zero with perfect efficiency.";

// Gate check, same as the sealed scorer: UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1-200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
