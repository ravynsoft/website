const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const dateFns = require('date-fns')

module.exports = function (config) {
  config.addPassthroughCopy({ 'public/css': 'css' })
  config.addPassthroughCopy({ 'public/fonts': 'fonts' })
  config.addPassthroughCopy({ 'public/images': 'images' })
  config.addPassthroughCopy({ 'public/js': 'js' })
  config.addPassthroughCopy('_redirects')

  // Watch and rebuild when styles change.
  config.addWatchTarget('./src/styles')

  config.addPlugin(eleventyNavigationPlugin)

  config.addFilter('tweetImage', (obj, size) => {
    const result = obj.replace(/_normal.png$/, `_x${size}.png`)
    return result
  })

  config.addFilter('tweetUrl', (obj) => {
    const url = `https://twitter.com/${obj.user.screen_name}/status/${obj.id_str}`
    return url
  })

  config.addFilter('tweetRemoveLink', (obj) => {
    const result = obj.replace(/https:\/\/t.co\/\S*/gm, '')
    return result
  })

  config.addFilter('tweetDateFmt', (obj) => {
    const parsedDate = dateFns.parse(obj, 'E LLL dd HH:mm:ss XXXX yyyy', new Date())
    const formatted = dateFns.formatDistance(parsedDate, new Date(), { addSuffix: true })
    return formatted
  })

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
