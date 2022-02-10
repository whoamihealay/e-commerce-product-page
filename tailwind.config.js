module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif']
    },
    extend: {
      screens: {
        smm: { max: '639px' }, // max Mobile
        mdm: { max: '1023px' }, // max Tablet
        to: { min: '640px', max: '1023px' } // Tablet only
      }
    },
    plugins: []
  }
};
