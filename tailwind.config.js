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
        background: "#ffffff",
        foreground: "#ffffff",
        primary: "#4b5563",
        secondary: "#6b7280",
        accent: "#3B82F6",
        darktext: "#1F2937",
        lighttext: "#6B7280",
        surface: "#ffffff",
      },
    },
  },
  plugins: [],
};
