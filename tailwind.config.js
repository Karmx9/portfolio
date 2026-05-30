/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#020810',
          900: '#050B18',
          800: '#0A1424',
          700: '#0F1E35',
          600: '#152844',
          500: '#1E3A5F',
          400: '#2A5280',
        },
        gold: {
          50:  '#FFF8E8',
          100: '#FFE9A0',
          200: '#FFD166',
          300: '#F0A500',
          400: '#CC8800',
          500: '#A86E00',
          DEFAULT: '#F0A500',
        },
      },
      animation: {
        'fade-in':  'fadeIn 0.7s ease-out both',
        'slide-up': 'slideUp 0.8s ease-out both',
        'float':    'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
