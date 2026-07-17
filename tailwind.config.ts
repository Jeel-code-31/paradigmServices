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
        afaca: ['Montserrat', 'sans-serif'],
        black: ['Montserrat', 'sans-serif'],
        numbers: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
