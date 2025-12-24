const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const dateFns = require('date-fns')
const MarkdownIt = require('markdown-it')
const Image = require('@11ty/eleventy-img')

async function imageShortcode(src, alt) {
  const metadata = await Image(src, {
    widths: [400, 800, 1200],
    formats: ['webp', 'jpeg'],
    outputDir: './dist/images/optimized',
    urlPath: '/images/optimized/',
  })

  const imageAttributes = {
    alt,
    sizes: '(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px',
    loading: 'lazy',
    decoding: 'async',
  }

  return Image.generateHTML(metadata, imageAttributes)
}

module.exports = function (config) {
  config.addPassthroughCopy({ 'public/css': 'css' })
  config.addPassthroughCopy({ 'public/fonts': 'fonts' })
  config.addPassthroughCopy({ 'public/images': 'images' })
  config.addPassthroughCopy({ 'public/js': 'js' })
  config.addPassthroughCopy('_redirects')

  // Watch and rebuild when styles change.
  config.addWatchTarget('./src/styles')

  config.addPlugin(eleventyNavigationPlugin)

  config.addFilter('githubDateFmt', (obj) => {
    const parsedDate = dateFns.parseISO(obj)
    const formatted = dateFns.format(parsedDate, 'do LLL yyyy')
    return formatted
  })

  config.addShortcode('year', () => `${new Date().getFullYear()}`)
  config.addNunjucksAsyncShortcode('image', imageShortcode)

  const markdown = new MarkdownIt()
  config.addFilter('markdown', (obj) => {
    return markdown.render(obj)
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
