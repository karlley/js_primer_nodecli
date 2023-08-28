import { program } from "commander";
import * as fs from "node:fs/promises";
import { marked } from "marked";

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];
const options = program.opts();
const cliOptions = {
  gfm: options.gfm ?? false,
};

fs.readFile(filePath, { encoding: "utf-8" })
  .then((file) => {
    const html = marked.parse(file, {
      gfm: cliOptions.gfm,
    });
    console.log(html);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
