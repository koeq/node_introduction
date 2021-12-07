import { readFile, writeFile } from "fs/promises";

let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "learn Node.js",
  body: "this is the final html",
};

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value);
}


await writeFile(new URL("index.html", import.meta.url), template);
