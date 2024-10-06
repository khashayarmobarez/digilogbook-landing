/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkHover: "var(--primary-dark-hover)",
        accentNormal: "var(--accent-normal)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutralLight: "var(--neutral-light)",
      },
    },
  },
  plugins: [require('daisyui')],
};
