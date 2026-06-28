/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				display: ['Sora', 'Poppins', 'sans-serif'],
			},
			colors: {
				// Champagne / gold luxury accents (layered over the existing orange→purple palette)
				champagne: {
					DEFAULT: '#E6C078',
					light: '#F7E7CE',
					mid: '#E6C078',
					deep: '#C9A24B',
				},
			},
			letterSpacing: {
				luxe: '0.28em',
			},
			boxShadow: {
				gold: '0 0 0 1px rgba(230,192,120,0.18), 0 18px 50px -12px rgba(230,192,120,0.18)',
				luxe: '0 24px 60px -20px rgba(0,0,0,0.7)',
			},
			keyframes: {
				'gold-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' },
				},
				'border-flow': {
					'0%, 100%': { transform: 'translateX(-30%)' },
					'50%': { transform: 'translateX(30%)' },
				},
				'float-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-14px)' },
				},
			},
			animation: {
				'gold-shimmer': 'gold-shimmer 6s linear infinite',
				'border-flow': 'border-flow 6s ease-in-out infinite',
				'float-soft': 'float-soft 7s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
