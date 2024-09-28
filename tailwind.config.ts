import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

function flattenColorPalette(colors: Record<string, any>) {
  const result: Record<string, string> = {};
  for (const [color, value] of Object.entries(colors)) {
    if (typeof value === "object" && value !== null) {
      for (const [key, shade] of Object.entries(value)) {
        result[`${color}-${key}`] = shade as string;
      }
    } else if (typeof value === "string") {
      result[color] = value;
    }
  }
  return result;
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontFamily: {
  		clashDisplay: ["var(--font-clashDisplay)"]
  	},
  	backgroundImage: {
  		'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  		'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		'radial-gradient': 'radial-gradient(circle at 50% 40%, white, black)',
  		'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))'
  	},
  	extend: {
  		boxShadow: {
  			neon: '0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8), 0 0 30px rgba(255, 0, 255, 0.8)',
  			'neon-pink': '0 0 5px theme("colors.pink.500"), 0 0 20px theme("colors.pink.500")',
  			'neon-indigo': '0 0 5px theme("colors.indigo.500"), 0 0 20px theme("colors.indigo.500")',
  			input: '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)',
  			custom1: '0 4px 6px rgba(0, 0, 0, 0.1)',
  			custom2: '0 10px 15px rgba(0, 0, 0, 0.2)'
  		},
  		colors: {
  			black: '#0F172A',
  			blue: '#2563EB',
  			gray: '#64748B',
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))',
  			themeBlack: '#09090B',
  			themeGray: '#27272A',
  			themeDarkGray: '#27272A',
  			themeTextGray: '#B4B0AE',
  			themeTextWhite: '#F7ECE9',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			white: '#ffffff'
  		},
  		gridTemplateColumns: {
  			'4-auto': 'repeat(4, auto)',
  			'2-auto': 'repeat(2, auto)'
  		},
  		animation: {
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
  			grid: 'grid 15s linear infinite',
  			spotlight: 'spotlight 2s ease 0.75s 1 forwards',
  			loader: 'loader 0.5s linear infinite',
  			pump: 'pump 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			sparkle: 'sparkle 2s ease-in-out infinite',
  			first: 'moveVertical 30s ease infinite',
  			second: 'moveInCircle 20s reverse infinite',
  			third: 'moveInCircle 40s linear infinite',
  			fourth: 'moveHorizontal 40s ease infinite',
  			fifth: 'moveInCircle 20s ease infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			meteor: 'meteor 5s linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%, -40%) scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			loader: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			pump: {
  				'0%, 100%': {
  					transform: 'scale(0.8)'
  				},
  				'50%': {
  					transform: 'scale(1)'
  				}
  			},
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			},
  			sparkle: {
  				'0%, 100%': {
  					opacity: '0.75',
  					transform: 'scale(0.9)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			moveHorizontal: {
  				'0%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				},
  				'50%': {
  					transform: 'translateX(50%) translateY(10%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				}
  			},
  			moveInCircle: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveVertical: {
  				'0%': {
  					transform: 'translateY(0%)'
  				},
  				'50%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0%)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'translate(0, 0)'
  				},
  				'100%': {
  					transform: 'translate(50vw, 50vh)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		}
  	}
  },  plugins: [nextui()],
};

export default config;