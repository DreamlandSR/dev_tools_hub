#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import fsPromises from "fs/promises";
import createProject from "./createProject.js";
import installTailwind from "./installTailwind.js";
import writeTailwindConfig from "./generateFiles/writeTailwindConfig.js";
import writeViteConfig from "./generateFiles/writeViteConfig.js";
import createFolders from "./generateFiles/createFolders.js";
import createColorGenerator from "./generateFiles/createColorGenerator.js";
import writeApp from "./generateFiles/writeApp.js";
import installAdditionalPackages from "./generateFiles/askPackagesToInstall.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log("❌ Please provide a project name.");
    process.exit(1);
  }

  const projectDir = path.join(process.cwd(), projectName);

  if (path.resolve(process.cwd()) === path.resolve(projectDir)) {
    console.log("\x1b[31m❌ You cannot run the script from the same folder you're trying to create!\x1b[0m");
    console.log("\x1b[33m👉 Try running the script from one level above.\x1b[0m");
    console.log(`   Example: \x1b[36mcd .. && node index.js ${projectName}\x1b[0m`);
    await new Promise(res => setTimeout(res, 100));
    process.exit(1);
  }

  if (fs.existsSync(projectDir)) {
    console.log(`❗ Folder "${projectName}" already exists.`);
    await new Promise(res => setTimeout(res, 100));
    process.exit(1);
  }

  createProject(projectName);
  installTailwind(projectDir);

  await fsPromises.writeFile(
    path.join(projectDir, "src", "index.css"),
    `@import "tailwindcss";\n`
  );

  writeTailwindConfig(projectDir);
  writeViteConfig(projectDir);
  createFolders(projectDir);
  createColorGenerator(projectDir);
  writeApp(projectDir);
  installAdditionalPackages(projectDir);

  const appCssPath = path.join(projectDir, "src", "App.css");

  try {
    if (fs.existsSync(appCssPath)) {
      fs.unlinkSync(appCssPath);
      console.log("🧹 Removed App.css");
    }
  } catch (err) {
    console.error("❌ Error while deleting files:", err);
  }

  console.log(`\n✅ Project "${projectName}" created successfully!`);
  console.log(`➡  To get started:\n   cd ${projectName}\n   npm install\n   npm run dev`);
}

main();
