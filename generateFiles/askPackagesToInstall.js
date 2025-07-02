import prompts from "prompts";
import { execSync } from "child_process";

// Function to ask the user which packages they want to install
async function askPackagesToInstall() {
  const choices = [
    // Essentials
    { title: "axios", value: "axios" },
    { title: "react-router-dom", value: "react-router-dom" },
    { title: "classnames", value: "classnames" },
    { title: "react-icons", value: "react-icons" },
    { title: "sweetalert2", value: "sweetalert2" },
    { title: "react-toastify", value: "react-toastify" },
    { title: "framer-motion", value: "framer-motion" },
    { title: "react-lottie", value: "react-lottie" },
    { title: "react-helmet", value: "react-helmet" },
    { title: "react-i18next", value: "react-i18next" },
    { title: "i18next", value: "i18next" },
    

    // State Management
    { title: "zustand", value: "zustand" },
    { title: "@tanstack/react-query", value: "@tanstack/react-query" },
    { title: "jotai", value: "jotai" },
    { title: "recoil", value: "recoil" },
    { title: "redux", value: "redux" },
    { title: "react-redux", value: "react-redux" },
    { title: "redux-thunk", value: "redux-thunk" },
    { title: "redux-saga", value: "redux-saga" },

    // Forms & Validation
    { title: "react-hook-form", value: "react-hook-form" },
    { title: "formik", value: "formik" },
    { title: "yup", value: "yup" },
    { title: "zod", value: "zod" },
    

    // Date & Time
    { title: "date-fns", value: "date-fns" },
    { title: "dayjs", value: "dayjs" },

    // UI / Headless Libraries
    { title: "@headlessui/react", value: "@headlessui/react" },
    { title: "@heroicons/react", value: "@heroicons/react" },
    { title: "lucide-react", value: "lucide-react" },
    { title: "@radix-ui/react-avatar", value: "@radix-ui/react-avatar" },
    { title: "@radix-ui/react-tooltip", value: "@radix-ui/react-tooltip" },

    // Charts & Visualization
    { title: "recharts", value: "recharts" },
    { title: "chart.js", value: "chart.js" },
    { title: "d3", value: "d3" },
    { title: "visx", value: "visx" },
    { title: "react-vis", value: "react-vis" },

    // Utilities
    { title: "uuid", value: "uuid" },
    { title: "lodash", value: "lodash" },
    { title: "react-loading-skeleton", value: "react-loading-skeleton" },
    { title: "react-error-boundary", value: "react-error-boundary" },
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
    console.error(
      "❌ Error occurred while installing additional packages:",
      error
    );
  }
}
