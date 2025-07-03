import fs from "fs";
import path from "path";

export default function writeTailwindConfig(projectDir) {
  const content = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        secondary: {
          light: '#a1a1aa',
          DEFAULT: '#64748b',
          dark: '#475569',
        },
        accent: {
          light: '#f9a8d4',
          DEFAULT: '#f43f5e',
          dark: '#be123c',
        },

        // Semantic
        success: '#22c55e',
        warning: '#facc15',
        danger: '#ef4444',
        error: '#dc2626',
        info: '#0ea5e9',

        // Neutral / Gray scale
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Extended palette
        rose: {
          100: '#ffe4e6',
          500: '#f43f5e',
          700: '#be123c',
        },
        pink: {
          100: '#fce7f3',
          500: '#ec4899',
          700: '#be185d',
        },
        purple: {
          100: '#f3e8ff',
          500: '#8b5cf6',
          700: '#6d28d9',
        },
        indigo: {
          100: '#e0e7ff',
          500: '#6366f1',
          700: '#4338ca',
        },
        blue: {
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        sky: {
          100: '#e0f2fe',
          500: '#0ea5e9',
          700: '#0369a1',
        },
        cyan: {
          100: '#cffafe',
          500: '#06b6d4',
          700: '#0e7490',
        },
        teal: {
          100: '#ccfbf1',
          500: '#14b8a6',
          700: '#0f766e',
        },
        green: {
          100: '#dcfce7',
          500: '#22c55e',
          700: '#15803d',
        },
        lime: {
          100: '#ecfccb',
          500: '#84cc16',
          700: '#4d7c0f',
        },
        yellow: {
          100: '#fef9c3',
          500: '#eab308',
          700: '#a16207',
        },
        amber: {
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        orange: {
          100: '#ffedd5',
          500: '#f97316',
          700: '#c2410c',
        },
        red: {
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        stone: {
          100: '#f5f5f4',
          500: '#78716c',
          700: '#44403c',
        },
      },
    },
  },
  plugins: [],
};
`;

  fs.writeFileSync(path.join(projectDir, "tailwind.config.js"), content);
}
