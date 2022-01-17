const fs = require('fs')
const path = require('path')

const postcss = require('postcss')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

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

      return await postcss([tailwind, autoprefixer])
        .process(css, { from })
        .then((result) => result.css)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = Styles
