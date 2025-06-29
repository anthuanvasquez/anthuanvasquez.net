const srcDir = './src';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/content/**/*.md`,
    `./nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['Fira Code', 'monospace'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#4C47FE',
        secondary: '#27BCFD',
        tertiary: '#A0FACF',
        black: '#010810',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
