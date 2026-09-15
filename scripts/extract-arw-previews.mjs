import fs from "node:fs";
import path from "node:path";

const SOI = Buffer.from([0xff, 0xd8, 0xff]);
const EOI = Buffer.from([0xff, 0xd9]);
const root = path.resolve("public/images");

function extractLargestJpeg(filePath) {
  const data = fs.readFileSync(filePath);
  let best = null;
  let index = 0;

  while (index < data.length) {
    const start = data.indexOf(SOI, index);
    if (start === -1) break;
    const end = data.indexOf(EOI, start + 3);
    if (end === -1) break;
    const jpeg = data.subarray(start, end + 2);
    if (!best || jpeg.length > best.length) best = jpeg;
    index = start + 3;
  }

  return best;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.toLowerCase().endsWith(".arw")) continue;

    const jpeg = extractLargestJpeg(full);
    if (!jpeg) {
      console.error("No JPEG preview in", full);
      continue;
    }

    const out = full.replace(/\.arw$/i, ".jpg");
    fs.writeFileSync(out, jpeg);
    console.log(
      `${path.relative(root, full)} -> ${path.basename(out)} (${(jpeg.length / 1024).toFixed(0)} KB)`,
    );
  }
}

walk(root);
