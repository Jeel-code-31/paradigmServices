import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'paradigm-bg': '#F2F5E3',
        'paradigm-green': '#006400',
      },
      fontFamily: {
        afaca: ['Afacad', 'sans-serif'],
        black: ['"Bookman Old Style"', '"EB Garamond"', 'serif'],
        numbers: ['"Lucida Handwriting"', 'Lumanosimo', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
