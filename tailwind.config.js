/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'], // for headings & buttons
        body: ['var(--font-inter)', 'sans-serif'],      // for subtext & paragraphs
      },
       colors: {
        primary: '#ffffff',      // for headings, 
        secondary: '#10B981', 
        buttonhover:"#1e5543",   
        accent: '#FBBF24',     
        darkText: '#1F2937',     
        lightText: '#4B5563',    
      },
    },
  },
  plugins: [],
}