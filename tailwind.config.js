/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': 'Roboto, sans-serif' 
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'coverimg': "url('/img/hero-pattern.svg')",
      },
      colors: {
        'nfpoints': '#46d369',
        'bgnextbtn' : 'rgba(0, 0, 0, 0.6)',
      },
      screens: {
        'mobile': {'max': '760px'},
      },
    },
  },
  plugins: [],
}
