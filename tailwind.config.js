import  flowbite  from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/img/pks_bck.jpg')",
     
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}