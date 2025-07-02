import fs from "fs";
import path from "path";

export default function writeViteConfig(projectDir) {
  const content = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`;

  fs.writeFileSync(path.join(projectDir, "vite.config.ts"), content);
  console.log("⚙️  vite.config.ts განახლდა Tailwind პლაგინით");
}
