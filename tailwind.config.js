module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Wigrum'],
    },
    colors: {
      white: '#fff',
      blue: '#2860E1',
      dark: '#07080B',
      border: 'rgba(255,255,255,0.4)',
      red: 'rgba(255,46,106,1)',
      darkBlue: 'rgba(61,101,214,1)',
      textColor: 'rgba(255,255,255,0.6)',
      inputBlue: 'rgba(17,20,28,1)',
      yellow: 'rgba(249,160,0,1)',
    },
    extend: {
      fontSize: {
        base: '1.6rem',
        '2xl': '2rem',
        '3xl': '2.4rem',
        '8xl': '6.4rem',
      },
      margin: {
        '-300': '-25vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
