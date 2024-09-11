/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text-color)',
        main: 'var(--main-color)',
        background: 'var(--background-color)',
        header: 'var(--header-color)',

        positive: 'var(--positive-color)',
        neutral: 'var(--neutral-color)',
        negative: 'var(--negative-color)',

        'positive-light': 'var(--positive-color)',
        'neutral-light': 'var(--neutral-color)',
        'negative-light': 'var(--negative-color)',
      },
    },
  },
  plugins: [],
};
