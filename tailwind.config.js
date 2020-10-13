const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem'
      }
    }
  }
}
