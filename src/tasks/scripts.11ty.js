const fs = require('fs')
const path = require('path')
const esbuild = require('esbuild')

const ENTRY_FILE = 'index.js'

class Scripts {
    data() {
        return {
            permalink: `js/main.js`,
            eleventyExcludeFromCollections: true,
            layout: null,
        }
    }

    async render() {
        try {
            const entryPoint = path.join(__dirname, `../scripts/${ENTRY_FILE}`)

            const result = await esbuild.build({
                entryPoints: [entryPoint],
                bundle: true,
                minify: true,
                write: false,
                target: 'es2020',
            })

            return result.outputFiles[0].text
        } catch (err) {
            console.error(err)
            return undefined
        }
    }
}

module.exports = Scripts
