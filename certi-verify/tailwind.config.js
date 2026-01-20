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
                    50: '#f0f4fa',
                    100: '#e0e9f4',
                    200: '#c5d7eb',
                    300: '#9dbce1',
                    400: '#709bd3',
                    500: '#4e7bc5',
                    600: '#3a61a8', // Brand Royal
                    700: '#2f4e8b',
                    800: '#284174', // Navy
                    900: '#23375f', // Deep Navy
                    950: '#17223b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
