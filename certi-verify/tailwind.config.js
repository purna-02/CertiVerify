/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand Colors
                primary: {
                    50: '#f0f4fa',
                    100: '#e0e9f4',
                    200: '#c5d7eb',
                    300: '#9dbce1',
                    400: '#709bd3',
                    500: '#4e7bc5',
                    600: '#3a61a8',
                    700: '#2f4e8b',
                    800: '#284174',
                    900: '#23375f',
                    950: '#17223b',
                },
                // Deep Space Theme
                space: {
                    950: '#0B0C15', // Main Background
                    900: '#131420', // Secondary
                    800: '#1C1E32', // Card Bg
                    accent: '#6366F1', // Glows
                },
                // Cloud Mist Theme
                mist: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    accent: '#3B82F6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'scroll': 'scroll 40s linear infinite',
                'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                'glass-dark': 'linear-gradient(135deg, rgba(19, 20, 32, 0.6), rgba(11, 12, 21, 0.8))',
            }
        },
    },
    plugins: [],
}
