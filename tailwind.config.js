/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          suave: '#AFC6D1',
          DEFAULT: '#AFC6D1',
        },
        coral: {
          DEFAULT: '#F4A28C',
        },
        amarelo: {
          DEFAULT: '#F2C66D',
        },
        verde: {
          pastel: '#B7CBA3',
          DEFAULT: '#B7CBA3',
        },
        bege: {
          fundo: '#E9E1D8',
          DEFAULT: '#E9E1D8',
        },
        cinza: {
          texto: '#6E7377',
          DEFAULT: '#6E7377',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 40% / 40% 50% 60% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '33%': { transform: 'translateY(-15px) scale(1.02)' },
          '66%': { transform: 'translateY(-8px) scale(0.98)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bubble-1': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-30px) scale(1.1)', opacity: '1' },
        },
        'bubble-2': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-45px) scale(0.9)', opacity: '0.9' },
        },
        'bubble-3': {
          '0%, 100%': { transform: 'translateY(0) scale(1.05)', opacity: '0.8' },
          '30%': { transform: 'translateY(-20px) scale(0.95)', opacity: '0.6' },
          '70%': { transform: 'translateY(-35px) scale(1.1)', opacity: '1' },
        },
      },
      animation: {
        'blob': 'blob-morph 8s ease-in-out infinite',
        'blob-slow': 'blob-morph 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bubble-1': 'bubble-1 4s ease-in-out infinite',
        'bubble-2': 'bubble-2 5s ease-in-out infinite',
        'bubble-3': 'bubble-3 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
