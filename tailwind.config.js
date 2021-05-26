module.exports = {
  purge: [
    './public/**/*.html',
    "./src/components/**/*.{js, jsx, ts, tsx}",
    "./src/pages/**/*.{js, jsx, ts, tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#001834',
        secondary: '#131313',
        whiteblue: '#00C4CC',
        whitegray: '#718096'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '1vh',
        '8': '5vw',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#718096",
            a: {
              color: "#FFFFFF",
              textDecoration: "none"
            }
          },
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
