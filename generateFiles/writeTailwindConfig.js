import fs from "fs";
import path from "path";

export default function writeTailwindConfig(projectDir) {
  const content = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#64748b',
        accent: '#f43f5e',
        success: '#22c55e',
        warning: '#facc15',
        danger: '#ef4444',
      },
    },
  },
  plugins: [],
};
`;
  fs.writeFileSync(path.join(projectDir, "tailwind.config.js"), content);
}
