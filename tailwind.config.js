/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#050508',
          card: 'rgba(14, 14, 20, 0.70)',
          cardHover: 'rgba(20, 20, 30, 0.85)',
          polarBlue: '#0033FF',
          cyan: '#00F0FF',
          violet: '#8800FF',
          emerald: '#10B981',
          textMuted: '#8B8B9E',
          textSecondary: '#C5C5D2',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
