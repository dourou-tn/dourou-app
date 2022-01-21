module.exports = {
  // mode: 'jit'
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        purple: {
          '500': '#4d1a9b',
          '900': '#15062d',
        },
        orange: {
          '500': '#fcd731',
          '900': '#AB9018',
        },
      },
      borderWidth: {
        '1': '1px',
      }
    }
  },
  plugins: [
    require('tailwindcss-rtl')
    // require('daisyui'),
  ],
}
