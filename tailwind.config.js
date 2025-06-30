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
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            900: '#1e3a8a',
          },
          secondary: {
            500: '#f59e0b',
            600: '#d97706',
          },
          accent: {
            500: '#10b981',
            600: '#059669',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
          'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
          'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
          'pulse-slow': 'pulse 2s infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(30px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          },
          fadeInLeft: {
            '0%': {
              opacity: '0',
              transform: 'translateX(-30px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            }
          },
          fadeInRight: {
            '0%': {
              opacity: '0',
              transform: 'translateX(30px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            }
          }
        }
      },
    },
    plugins: [],
  }