import fs from 'node:fs';
import path from 'node:path';

const entry = `Sleep. Promised eight hours of rest, delivered three and a 4 a.m. staring contest with the ceiling. No refund. One star.`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
