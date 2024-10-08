import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "rgb(var(--border))",
				input: "rgb(var(--input))",
				ring: "rgb(var(--ring))",
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
				primary: {
					DEFAULT: "rgb(var(--primary))",
					foreground: "rgb(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary))",
					foreground: "rgb(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "rgb(var(--destructive))",
					foreground: "rgb(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "rgb(var(--muted))",
					foreground: "rgb(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "rgb(var(--accent))",
					foreground: "rgb(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "rgb(var(--popover))",
					foreground: "rgb(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "rgb(var(--card))",
					foreground: "rgb(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
      boxShadow: {
        'card-show': '-4px 4px 10px 4px rgba(var(--experienceColor), 0.3)',
      },
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 2s linear infinite",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
