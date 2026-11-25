// One-Star Review of Something Essential: a deadpan complaint against gravity, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The review line, composed fresh for this bounty.
const entry = "One star for gravity. Works fine until you drop your phone, then suddenly it is the fastest thing in the house.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
