// Saari example files ek ke baad ek chalata hai (DOM aur projects chhod ke).
// Use: node run-all.js
import { readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const folders = readdirSync(root)
  .filter((d) => /^\d{2}-/.test(d) && statSync(path.join(root, d)).isDirectory())
  .filter((d) => !["09-dom", "10-projects"].includes(d))
  .sort();

let failed = 0;
for (const folder of folders) {
  const files = readdirSync(path.join(root, folder)).filter((f) => f.endsWith(".js")).sort();
  for (const file of files) {
    const full = path.join(root, folder, file);
    try {
      execFileSync("node", [full], { stdio: "pipe", timeout: 15000 });
      console.log(`OK    ${folder}/${file}`);
    } catch (err) {
      failed++;
      console.log(`FAIL  ${folder}/${file}\n${err.stderr?.toString().split("\n").slice(0, 4).join("\n")}`);
    }
  }
}
console.log(failed ? `\n${failed} file(s) failed` : "\nSab files chal gayi");
process.exit(failed ? 1 : 0);
