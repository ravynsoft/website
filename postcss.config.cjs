module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
      features: { 'logical-properties-and-values': false },
    }),
    require('cssnano'),
  ],
}
