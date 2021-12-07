import { readFile } from "fs/promises";

try {
  const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
} catch (err) {
  console.error(err);
  console.log("still runs!");
}

process.on("uncaughtException", (err) => console.log(err));
const result2 = await readFile(new URL("app.ms", import.meta.url), "utf-8");
console.log("still runs");
