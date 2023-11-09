/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'lilac': '#8A8EF4',
      'gold': '#F6C345',
      'salmon': '#FF7C80',
      'lettuce': '#97C255',
      'midnight': '#212F7A'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-days-one)'],
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
