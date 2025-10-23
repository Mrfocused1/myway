/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Updated color palette
        'earthy-green': {
          DEFAULT: '#000000',    // Black
          dark: '#000000',       // Black
          light: '#333333',      // Dark gray
        },
        'earthy-cream': {
          DEFAULT: '#FAF6F1',    // Light cream
          dark: '#F5EFE7',       // Darker cream
        },
        'earthy-brown': {
          DEFAULT: '#1e3a8a',    // Navy blue
          dark: '#1e40af',       // Bright navy
          light: '#3b82f6',      // Lighter blue
        },
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [],
}
