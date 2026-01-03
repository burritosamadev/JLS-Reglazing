/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary golden-orange
        primary: {
          50: '#fde2cb',
          100: '#FBB040',  // PRIMARY BRAND COLOR
          200: '#ca8c2a',
          300: '#9b6a1e',
          400: '#6d4a12',
          500: '#432c07',
          600: '#1d1002',
        },
        // Navy (brand dark blue)
        navy: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#1a2332',
          900: '#0f1419',
        },
        // Neutral grays
        neutral: {
          50: '#eff1ef',
          100: '#d2d7d2',
          200: '#acafac',
          300: '#868986',
          400: '#636563',
          500: '#424342',
          600: '#232423',  // SECONDARY BRAND COLOR
        },
        // Warm neutrals
        warm: {
          50: '#e8e6e5',
          100: '#c3beba',
          200: '#9c9894',
          300: '#767371',
          400: '#53514f',
          500: '#32302f',
          600: '#141312',
        },
        // New Figma form colors
        'form-primary': '#FB8040',
        'form-primary-hover': '#E5722A',
        'form-primary-fg': '#FFFFFF',
        'form-secondary': '#232423',
        'form-background': '#FDFBF8',
        'form-card': '#FAF8F3',
        'form-foreground': '#221F1C',
        'form-muted': '#F3F0EA',
        'form-muted-fg': '#7A7269',
        'form-border': '#E5E0D6',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
