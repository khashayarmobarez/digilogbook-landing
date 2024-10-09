/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
  	extend: {
  		colors: {
			// --primary-darker: #121417;
			// --primary-dark-hover: #1E2227;
			// --primary-light: #EBEBEC;
			// --primary-light-hover: #E0E1E3;
			// --accent-normal: #23BC7C;
			// --neutral-light: #eeeeee;
			// --neutral-dark: #3e3e3e;
			// --primary-normal: #323941;
			// --primary-normal-hover: #2D333B;
			// --primary-normal-active: #282E34;
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			primaryDarker: 'var(--primary-darker)',
  			primaryDarkHover: 'var(--primary-dark-hover)',
  			primaryLight: 'var(--primary-light)',
  			primaryLightHover: 'var(--primary-light-hover)',
  			accentNormal: 'var(--accent-normal)',
  			neutralLight: 'var(--neutral-light)',
  			neutralDark: 'var(--neutral-dark)',
  			primaryNormalHover: 'var(--primary-normal-hover)',
  			primaryNormal: 'var(--primary-normal)',
			primaryNormalActive: 'var(--primary-normal-active)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('daisyui'), require("tailwindcss-animate")],
};
