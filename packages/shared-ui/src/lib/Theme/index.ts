export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: 'Poppins, Roboto',
    extraLight: 100,
    light: 300,
    normal: 400,
    bold: 600,
    extraBold: 900,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#075985',
    secondary: '#78716C',
    mainBg: '#F6F9FC',
    white: '#F9FAFB',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    success: '#16A34A',
    danger: '#DC2626',
    alert: '#EAB308',
    info: '#0284C7',

    mindingoBlue: '#5429CC',
    mindingoBlueLight: '#6933FF',
    mindingoRed: '#E52E4D',
    mindingoGreen: '#33CC95',
    mindingoTextTitle: '#363F5F',
    mindingoTextBody: '#969CB3',
    mindingoBackground: '#F0F2F5',
    mindingoShape: '#FFFFFF',

    mindingoBorder: '#d7d7d7',
    mindingoFormBackground: '#e7e9ee'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
