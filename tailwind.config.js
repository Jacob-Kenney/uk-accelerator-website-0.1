/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        'serif': ['Libre Baskerville', 'ui-serif', 'Georgia'],
      },
      colors: {
        'ukacc-dark': '#0A0A0A',
        'ukacc-gray': '#C0C0C0',
        'ukacc-accent': '#0077FF',
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
};