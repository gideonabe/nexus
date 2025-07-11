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
    },
  },
  plugins: [],
}
