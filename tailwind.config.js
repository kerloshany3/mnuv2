/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      fontFamily: {
        bungee: ['Bungee', ], // Add Bungee font
        arabicUI: ['arabicUI', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],// Add Bungee font
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
