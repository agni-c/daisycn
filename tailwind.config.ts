import type { Config } from "tailwindcss";


const config = {
	darkMode: [ "class", '[data-theme="dark"]' ],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				border: "var(--border-color)",
				input: "var(--input-color)",
				ring: "var(--ring-color)",
				background: "var(--background-color)",
				foreground: "var(--foreground-color)",
				primary: {
					DEFAULT: "var(--primary-color)",
					foreground: "var(--primary-foreground-color)",
				},
				secondary: {
					DEFAULT: "var(--secondary-color)",
					foreground: "var(--secondary-foreground-color)",
				},
				destructive: {
					DEFAULT: "var(--destructive-color)",
					foreground: "var(--destructive-foreground-color)",
				},
				muted: {
					DEFAULT: "var(--muted-color)",
					foreground: "var(--muted-foreground-color)",
				},
				accent: {
					DEFAULT: "var(--accent-color)",
					foreground: "var(--accent-foreground-color)",
				},
				popover: {
					DEFAULT: "var(--popover-color)",
					foreground: "var(--popover-foreground-color)",
				},
				card: {
					DEFAULT: "var(--card-color)",
					foreground: "var(--card-foreground-color)",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		],
	},
	plugins: [ require("tailwindcss-animate"), require("daisyui") ],
} satisfies Config;

export default config;
