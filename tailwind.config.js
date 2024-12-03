/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6",
        foreground: "#ffffff",
        primary: "#4b5563",
        secondary: "#6b7280",
        accent: "#374151",
        darktext: "#1f2937",
        lighttext: "#6b7280",
        surface: "#ffffff",
      },
    },
  },
  plugins: [],
};
