import fs from "fs";
import path from "path";

export default function createColorGenerator(projectDir) {
  const component = `import React, { useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("");

  const generate = () => {
    const hue = Math.floor(Math.random() * 360);
    setColor(\`hsl(\${hue}, 70%, 60%)\`);
  };

  return (
    <div className="p-4">
      <button
        onClick={generate}
        className="px-4 py-2 rounded text-white"
        style={{ backgroundColor: color || 'hsl(220,70%,50%)' }}
      >
        Generete Random Color
      </button>
      {color && (
        <div className="mt-4">
          <div className="w-20 h-20 rounded" style={{ backgroundColor: color }}></div>
          <code className="block mt-2 text-sm">text-[{color}]</code>
        </div>
      )}
    </div>
  );
}
`;

  fs.writeFileSync(
    path.join(projectDir, "src", "components", "ColorGenerator.tsx"),
    component
  );
  console.log("🎨 ColorGenerator.tsx შეიქმნა");
}
