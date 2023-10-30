/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'w-screen': 'calc(100vw - 1rem)'
    },
  },
  plugins: [],
}

