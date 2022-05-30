module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "#FBE8B1",
          300: "#FFD153",
          500: "#F5CA52",
        },
        secondary: '#FF5D50',
        neutral: '#56C4C5',
        grey: {
          100: "#FFFFFF",
          200: '#F5F5F5',
          300: "#747474",
          500: "#221E1F",
        },
      },
      fontSize: {
        h1: "2rem",
        h2: "1.75rem",
        h3: "1.125rem",
        content: '1rem',
        button: "0.875rem",
      },
      lineHeight: {
        h1: '2.875rem',
        h2: '2.5rem',
        h3: '2.188rem',
        content: '1.5rem',
        button: "0.875rem",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          "@screen xs": {
            maxWidth: "540px",
          },
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1380px",
          },
        },
      });
    },
  ],
};
