/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'green': '#20C997'
			},
			screens: {
				'mobile': '450px',
				'ipad': '760px',
				'dekstop': '1000px'
			}
		},
	},
	plugins: [],
}
