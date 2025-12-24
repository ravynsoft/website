const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://api.github.com/repos/ravynsoft/ravynos/releases";

  return EleventyFetch(url, {
    duration: "1h",
    type: "json",
  });
}
