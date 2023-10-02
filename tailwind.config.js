/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{tsx,js,jsx,ts}", "./screen/*.{js,jsx,ts,tsx}", "./component/*.{js,jsx,ts,tsx}", "./modal/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('/assets/login_BG.jpg')",
      }
    },
  },
  plugins: [],
}

