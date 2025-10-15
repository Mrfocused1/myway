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
        // Earthy color palette
        'earthy-green': {
          DEFAULT: '#6B8E23',    // Olive drab
          dark: '#4A5D23',       // Dark olive
          light: '#8BA846',      // Light olive
        },
        'earthy-cream': {
          DEFAULT: '#FAF6F1',    // Light cream
          dark: '#F5EFE7',       // Darker cream
        },
        'earthy-brown': {
          DEFAULT: '#8B7355',    // Earthy brown
          dark: '#6F4E37',       // Coffee brown
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
