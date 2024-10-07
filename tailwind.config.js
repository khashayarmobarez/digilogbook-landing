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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDarkHover: "var(--primary-dark-hover)",
        primaryLight: "var(--primary-light)",
        primaryLightHover: "var(--primary-light-hover)",
        accentNormal: "var(--accent-normal)",
        neutralLight: "var(--neutral-light)",
        neutralDark: "var(--neutral-dark)",
        primaryNormalHover: "var(--primary-normal-hover)",
      },
    },
  },
  plugins: [require('daisyui')],
};
