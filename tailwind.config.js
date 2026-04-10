/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
      },
    },
  },
  plugins: [],
}