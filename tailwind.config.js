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
    },
  },
  plugins: [],
}
