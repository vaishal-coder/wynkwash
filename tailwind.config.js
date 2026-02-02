/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#003366', // Deep Blue
                    dark: '#002244',
                },
                accent: {
                    DEFAULT: '#00A4CC', // Water Blue
                    glow: 'rgba(0, 164, 204, 0.4)',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
