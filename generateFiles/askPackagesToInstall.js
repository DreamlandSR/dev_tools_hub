import prompts from "prompts";
import { execSync } from "child_process";

// Function to ask the user which packages they want to install
async function askPackagesToInstall() {
  const choices = [
    { title: "axios", value: "axios" },
    { title: "react-router-dom", value: "react-router-dom" },
    { title: "zustand", value: "zustand" },
    { title: "formik", value: "formik" },
    { title: "yup", value: "yup" },
    // You can add more packages here
  ];

  const response = await prompts({
    type: "multiselect",
    name: "packages",
    message: "Which packages do you want to install?",
    choices,
    min: 1,
  });

  return response.packages || [];
}

// Function to install selected packages inside the project directory
async function installAdditionalPackages(projectDir) {
  const packages = await askPackagesToInstall();

  if (packages.length === 0) {
    console.log("❗ No additional packages selected.");
    return;
  }

  const pkgsStr = packages.join(" ");

  console.log(`🎯 Installing additional packages: ${pkgsStr} ...`);
  execSync(`npm install ${pkgsStr}`, { stdio: "inherit", cwd: projectDir });
}

// Main export to use in the CLI
export default async function askAndInstallPackages(projectDir) {
  try {
    await installAdditionalPackages(projectDir);
    console.log("✅ Additional packages installed successfully!");
  } catch (error) {
    console.error("❌ Error occurred while installing additional packages:", error);
  }
}
