[![GitHub stars](https://img.shields.io/github/stars/Tusho7/dev_tools_hub?style=social)](https://github.com/Tusho7/dev_tools_hub/stargazers)
![npm](https://img.shields.io/npm/dw/devtools-kit)


# 🛠️ dev-tools-kit

`dev-tools-kit` is a simple yet powerful CLI tool that bootstraps a modern Vite + React + TypeScript project with Tailwind CSS, recommended folder structure, and optional library installation — all in one command.

---

## ✨ Features

- 🔧 Initializes a **Vite + React + TypeScript** project  
- 🎨 Automatically installs **Tailwind CSS** with full configuration  
- 🗂️ Creates a clean folder structure (`components/`, `pages/`, `hooks/`, etc.)  
- 🌈 Generates a **Tailwind color palette helper** component  
- 🌈 Adds a **custom Tailwind color palette**:
  - Primary / Secondary / Accent colors  
  - Semantic tokens: `success`, `warning`, `danger`, `info`  
  - 20+ Tailwind-style color families (`rose`, `sky`, `lime`, etc.)  
- 📦 Allows you to choose and install optional libraries (`axios`, `react-router-dom`, `zustand`, etc.)  
- 🧹 Removes unused default files (`App.css`, `index.css`)  
- 👋 Generates a minimal `App.tsx` with a welcome message 

---

## 🔧 For Developers (Local Development)

If you're contributing to or testing the CLI tool locally:

```bash
git clone https://github.com/tusho7/dev_tools_hub.git
cd dev-tools-hub
npm install
npm link
```

🚀 Usage, Global Installation & After Setup

Usage (after local or global install)

```bash
devtools-kit my-app
```

Global Installation (Recommended for users)

```bash
npm install -g devtools-kit
devtools-kit my-app
```
After Setup
```
cd my-app
npm install
npm run dev
```
