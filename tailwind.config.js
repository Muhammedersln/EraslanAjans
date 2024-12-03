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
        primary: {
          DEFAULT: '#4A4A4A',
          dark: '#333333',
          light: '#666666',
        },
        secondary: {
          DEFAULT: '#808080',
          dark: '#595959',
          light: '#A6A6A6',
        },
        background: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0',
          light: '#FFFFFF',
        },
        text: {
          DEFAULT: '#2A2A2A',
          light: '#4F4F4F',
          lighter: '#757575',
        }
      },
    },
  },
  plugins: [],
};
