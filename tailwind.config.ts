import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx" // In case files are still in root temporarily
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#1a1a1a', // Rich Black
          800: '#2d2d2d',
          100: '#f3f4f6',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a059', // Muted Gold
          600: '#b8860b',
        },
        gray: {
          50: '#f9f9f9', // Light luxury gray
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
      },
      backgroundImage: {
        'hex-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-slow': 'scale-in 20s linear infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
      }
    },
  },
  plugins: [],
};

export default config;
