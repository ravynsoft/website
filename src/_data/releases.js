const Cache = require('@11ty/eleventy-cache-assets')

module.exports = async function () {
  return Cache('https://api.github.com/repos/ravynsoft/ravynos/releases', {
    duration: '1h',
    type: 'json',
  })
}
