/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.liquid"],
  theme: {
    extend: {
      'blue_button': {
        cursor: 'pointer',
        backgroundColor: 'rgb(59 130 246)',
        color: 'white',
        fontWeight: 700,
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
      },
    },
  },
  plugins: [],
}