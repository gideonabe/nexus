/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['General Sans', 'sans-serif'],
        zentry: ['zentry', 'sans-serif'],
        circular: ['circular-web', 'sans-serif'],
        robert: ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD'
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#5724FF',
          300: '#EDFF66'
        }
      }
    },
  },
  plugins: [],
}
