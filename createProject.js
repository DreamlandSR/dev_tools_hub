import { execSync } from "child_process";

export default function createProject(projectName) {
  console.log(`🚀 Creating Vite + React project: ${projectName}...`);
  execSync(`npm create vite@latest ${projectName} -- --template react-ts`, {
    stdio: "inherit",
  });
}
