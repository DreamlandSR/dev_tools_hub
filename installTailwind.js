import { execSync } from "child_process";

export default function installTailwind(projectDir) {
  console.log("🎨 ვაყენებთ Tailwind CSS-ს როგორც Vite პლაგინს...");
  execSync(
    `npm install tailwindcss @tailwindcss/vite`,
    { stdio: "inherit", cwd: projectDir }
  );
}
