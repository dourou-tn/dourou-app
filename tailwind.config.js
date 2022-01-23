module.exports = {
  // mode: 'jit'
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        purple: {
          '100': '#e4dfef',
          '400': '#4d1a9bad',
          '500': '#4d1a9b',
          '600': '#331067',
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
