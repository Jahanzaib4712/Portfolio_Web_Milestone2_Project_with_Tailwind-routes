/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
  ],
  theme: {
    extend: { 
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
}