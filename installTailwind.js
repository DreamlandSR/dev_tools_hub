import { execSync } from "child_process";

export default function installTailwind(projectDir) {
  console.log("🎨 Installing Tailwind CSS as a Vite plugin...");
  execSync(
    `npm install tailwindcss @tailwindcss/vite`,
    { stdio: "inherit", cwd: projectDir }
  );
}
