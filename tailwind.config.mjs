/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EAE0D3',
          300: '#DDCFC0',
          400: '#C7B49E',
          500: '#AF977E',
          600: '#8E735B',
          700: '#6C5441',
          800: '#4A372A',
          900: '#2A1F18',
          950: '#17110C',
        },
        domi: {
          bg: '#F5EFE6',
          card: '#FBF8F3',
          cardAlt: '#F4ECE0',
          pill: '#E5DACE',
          dark: '#1C1613',
          darkHover: '#2E2520',
          blob: '#1F1814',
          muted: '#6C625A',
          subtle: '#9A8E85',
          border: '#E8DED2',
          accent: '#E06B43',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'Kalam', 'cursive'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(28, 22, 19, 0.04)',
        'soft': '0 10px 30px -5px rgba(28, 22, 19, 0.06)',
        'soft-xl': '0 25px 50px -12px rgba(28, 22, 19, 0.12)',
        'float': '0 20px 40px -10px rgba(0, 0, 0, 0.25)',
        'card': '0 30px 60px -15px rgba(45, 32, 24, 0.08), 0 0 1px 1px rgba(255, 255, 255, 0.6) inset',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
