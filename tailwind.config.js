/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom theme colors using CSS variables
        'theme': {
          'bg': 'rgb(var(--color-background) / <alpha-value>)',
          'bg-secondary': 'rgb(var(--color-background-secondary) / <alpha-value>)',
          'bg-tertiary': 'rgb(var(--color-background-tertiary) / <alpha-value>)',
          'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
          'text-tertiary': 'rgb(var(--color-text-tertiary) / <alpha-value>)',
          'border': 'rgb(var(--color-border) / <alpha-value>)',
          'border-light': 'rgb(var(--color-border-light) / <alpha-value>)',
          'card': 'rgb(var(--color-card) / <alpha-value>)',
          'card-hover': 'rgb(var(--color-card-hover) / <alpha-value>)',
        }
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-xl': 'var(--shadow-xl)',
      }
    },
  },
  plugins: [],
};
