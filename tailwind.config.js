/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Trust blue - primary brand color
        brand: {
          50: '#E8F0F8',
          100: '#C5D9EE',
          200: '#9FBFE1',
          300: '#78A5D4',
          400: '#5A91CA',
          500: '#1B4D7A',
          600: '#164068',
          700: '#113256',
          800: '#0C2544',
          900: '#081832',
        },
        // Action orange - CTAs only
        cta: {
          DEFAULT: '#F26522',
          hover: '#D9551A',
          light: '#FFF0E8',
        },
        // Charcoal text
        charcoal: '#2D3748',
        // Surface colors
        surface: {
          DEFAULT: '#FAFAFA',
          alt: '#F3F4F6',
          card: '#FFFFFF',
        },
        // Form-specific
        'form-border': '#D1D5DB',
        'form-muted': '#6B7280',
      },
      fontFamily: {
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'sans': ['var(--font-roboto)', 'sans-serif'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'jost': ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
