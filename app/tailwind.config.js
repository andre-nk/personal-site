/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'main': '#F8F8F8',
        'outline': '#292929',
      },
      fontFamily: {
        'source': ["Source Serif Pro"],
        'inter': ["Inter"]
      }
    },
  },
  plugins: [],
}

