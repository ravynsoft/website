const fs = require('fs')
const path = require('path')

const postcss = require('postcss')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

const ENTRY_FILE = 'index.css'

class Styles {
  data() {
    return {
      layout: null,
      permalink: `css/main.css`,
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    try {
      const from = path.join(__dirname, `../styles/${ENTRY_FILE}`)
      const css = fs.readFileSync(from)

      return await postcss([
        postcssImport,
        postcssPresetEnv({
          stage: 0,
          features: { 'logical-properties-and-values': false },
        }),
        cssnano,
      ])
        .process(css, { from })
        .then((result) => result.css)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Styles
