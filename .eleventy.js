module.exports = function (config) {
  config.addPassthroughCopy({ 'public/css': 'css' })
  config.addPassthroughCopy({ 'public/fonts': 'fonts' })
  config.addPassthroughCopy({ 'public/images': 'images' })
  config.addPassthroughCopy({ 'public/js': 'js' })
  config.addPassthroughCopy('_redirects')

  // Watch and rebuild when styles change.
  config.addWatchTarget('./src/styles')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  }
}
