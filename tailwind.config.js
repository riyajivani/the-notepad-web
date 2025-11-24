/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
       colors: {
        background: "var(--background)",
        primaryBlue: "var(--primary-blue)",
        hoverBlue: "var(--hover-blue)",
        textBlue: "var(--text-blue)",
        primaryPink: "var(--primary-pink)",
        primaryPurple: "var(--primary-purple)",
        primaryOrange: "var(--primary-orange)",
        primaryGreen: "var(--primary-green)",
        primaryRed: "var(--primary-red)",
        primaryYellow: "var(--primary-yellow)"
      },
    },
  },
  plugins: [],
}

