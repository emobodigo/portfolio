module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'lumut': '#286F6C',
        'oren': '#EDB33C',
        'abu': '#F8F7F1',
        'tomato': '#F26441',
      },
      height: theme => ({
        'screen-85': '85vh'
      })
    },
  },
  plugins: [],
}
