/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'lora': ['"Lora"'],
                'opensans': ['"Open Sans"'],
            },
            colors: {
                
            }
        },
    },
    plugins: [],
  }
