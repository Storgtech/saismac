/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)'
      },
      textColor: {
        primary: 'var(--color-text-primary)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}