import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffcfa',
          100: '#fffaf6',
          200: '#fef5ed',
          300: '#efe6dd',
          400: '#e5d7c9',
          500: '#d7cabd',
          600: '#c4b5a7',
          700: '#a89680',
          800: '#8a7963',
          900: '#6f614f',
        },
        charcoal: {
          50: '#f5f5f4',
          100: '#e7e5e4',
          200: '#d4d0cd',
          300: '#b8b2ad',
          400: '#9a8f87',
          500: '#6b625d',
          600: '#5a534f',
          700: '#4a4542',
          800: '#3a3735',
          900: '#2b2623',
        },
        terracotta: {
          50: '#fdf6f4',
          100: '#fae9e5',
          200: '#f5d4cb',
          300: '#ecb5a5',
          400: '#df8d75',
          500: '#a86e61',
          600: '#8e5a4e',
          700: '#744b41',
          800: '#5d3d35',
          900: '#4a322b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
