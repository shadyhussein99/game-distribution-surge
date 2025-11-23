import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(79 70 229)",
        secondary: "rgb(249,115,22)",
        muted: "rgb(143,143,149)",
        mutedForeground: "rgb(113, 113, 122)",
        accent: "rgb(239, 237, 253)",
        accentForeground: "rgb(91, 62, 234)",
        destructive: "rgb(239, 68, 68)",
        destructiveForeground: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
export default config;
