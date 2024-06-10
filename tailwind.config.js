/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "Martel": ['Martel Sans', 'sans-serif'],
        
      }
    },
  },
  plugins: [require('daisyui'),require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#1cb017",
          "secondary": "#5e2e22",
          "accent": "#025f2c",
          "neutral": "#264d00",
          "base-100": "#fafff5",
        },
      },
    ],
  },
}

