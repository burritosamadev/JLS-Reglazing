/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0d0f61',
          800: '#1a33b3',
          700: '#2545c9',
        },
        gray: {
          900: '#222226',
          100: '#f6f6f6',
        },
        blue: {
          600: '#3b82f6',
        },
        green: {
          600: '#10b981',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'marcellus': ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [],
}
