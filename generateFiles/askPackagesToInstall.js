import prompts from "prompts";
import { execSync } from "child_process";

async function askPackagesToInstall() {
  const choices = [
    { title: "axios", value: "axios" },
    { title: "react-router-dom", value: "react-router-dom" },
    { title: "zustand", value: "zustand" },
    { title: "formik", value: "formik" },
    { title: "yup", value: "yup" },
    // შეგიძლია დაამატო ნებისმიერი პაკეტი აქ
  ];

  const response = await prompts({
    type: "multiselect",
    name: "packages",
    message: "რომელი პაკეტების დაყენება გინდა?",
    choices,
    min: 1,
  });

  return response.packages || [];
}

async function installAdditionalPackages(projectDir) {
  const packages = await askPackagesToInstall();

  if (packages.length === 0) {
    console.log("❗ არ არის არჩეული დამატებითი პაკეტები.");
    return;
  }

  const pkgsStr = packages.join(" ");

  console.log(`🎯 დამატებითი პაკეტების დაყენება: ${pkgsStr} ...`);
  execSync(`npm install ${pkgsStr}`, { stdio: "inherit", cwd: projectDir });
}
export default async function askAndInstallPackages(projectDir) {
  try {
    await installAdditionalPackages(projectDir);
    console.log("✅ დამატებითი პაკეტები წარმატებით დაინსტალირდა!");
  } catch (error) {
    console.error("❌ დამატებითი პაკეტების დაყენებისას მოხდა შეცდომა:", error);
  }
}
