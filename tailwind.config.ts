import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Configuración para dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        title: "#c8c8c8",
        content: "#9ca991",
        subtitles: "#262626",
        content2: "#378173",
        saludo: "#ededed",
        post: "#7a7f89"
      },
      fontFamily: {
        menlo: ['Menlo', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;