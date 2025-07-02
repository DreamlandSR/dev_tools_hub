import fs from "fs";
import path from "path";

export default function writeApp(projectDir) {
  const appPath = path.join(projectDir, "src", "App.tsx");

  const content = `import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        წარმატებები კოდინგში! 👨‍💻 🚀 <br /> გისურვებ წარმატებულ პროექტს ^_^
      </h1>
    </div>
  );
}

export default App;
`;

  fs.writeFileSync(appPath, content);
  console.log("✨ App.tsx განახლდა");
}
