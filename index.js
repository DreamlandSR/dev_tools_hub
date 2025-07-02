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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log("❌ გთხოვ მიუთითე პროექტის სახელი");
    process.exit(1);
  }

  const projectDir = path.join(process.cwd(), projectName);


  if (path.resolve(process.cwd()) === path.resolve(projectDir)) {
    console.log("\x1b[31m❌ ვერ გაუშვებ სკრიპტს იმავე ფოლდერიდან, რომელსაც ქმნი!\x1b[0m");
    console.log("\x1b[33m👉 სცადე სკრიპტის გაშვება ერთი დონით ზემოდან.\x1b[0m");
    console.log(`   მაგ: \x1b[36mcd .. && node index.js ${projectName}\x1b[0m`);
    await new Promise(res => setTimeout(res, 100));
    process.exit(1);
  }

  if (fs.existsSync(projectDir)) {
    console.log(`❗ ფოლდერი "${projectName}" უკვე არსებობს.`);
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

  
  const appCssPath = path.join(projectDir, "src", "App.css");
  const indexCssPath = path.join(projectDir, "src", "index.css");

  try {
    if (fs.existsSync(appCssPath)) {
      fs.unlinkSync(appCssPath);
      console.log("🧹 App.css წაიშალა");
    }

    if (fs.existsSync(indexCssPath)) {
      fs.unlinkSync(indexCssPath);
      console.log("🧹 index.css წაიშალა (წინა)");
    }
  } catch (err) {
    console.error("❌ ფაილების წაშლისას მოხდა შეცდომა:", err);
  }

  console.log(`\n✅ პროექტი "${projectName}" წარმატებით შეიქმნა!`);
  console.log(`➡  შესასვლელად:\n   cd ${projectName}\n   npm install\n   npm run dev`);
}

main();
