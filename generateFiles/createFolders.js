import fs from "fs";
import path from "path";

export default function createFolders(projectDir) {
  const folders = ["components", "pages", "config", "types", "utils"];
  folders.forEach((folder) => {
    const folderPath = path.join(projectDir, "src", folder);
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 ${folder} შეიქმნა`);
  });
}
