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
        orange: '#fcd731',
      },
      borderWidth: {
        '1': '1px',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
