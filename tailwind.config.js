/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50:  '#f6f3ff',
          100: '#ede6ff',
          200: '#d9ccff',
          300: '#bca6ff',
          400: '#9a7aff',
          500: '#7c54ff',
          600: '#6236f0',
          700: '#5127cc',
          800: '#3f1e9e',
          900: '#2a1470',
        },
        midnight: {
          50:  '#eef0ff',
          900: '#0b0820',
          950: '#060416',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlow 12s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(188,166,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(188,166,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
