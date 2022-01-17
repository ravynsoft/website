module.exports = {
  content: ['src/**/*.njk'],

  corePlugins: {
    container: false,
  },

  theme: {
    screens: {
      medium: '480px',
      large: '736px',
      'super-large': '1200px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
    },
    fontFamily: {
      sans: 'Satoshi, system-ui, sans-serif',
      mono: 'Monaco, Consolas, Courier New, monospace',
    },
    fontWeight: {
      normal: 400,
      semibold: 700,
      bold: 900,
    },
    zIndex: {
      menu: 100,
    },
  },
}
