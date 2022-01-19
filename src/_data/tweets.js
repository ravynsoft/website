const { AssetCache } = require('@11ty/eleventy-cache-assets')
const Twitter = require('twitter')
require('dotenv').config()

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
})

const params = {
  screen_name: 'AiryxOS',
  count: 30,
  exclude_replies: true,
  include_rts: false,
  tweet_mode: 'extended',
}

module.exports = async function () {
  const hash = require('crypto').createHash('md5').update(JSON.stringify(params)).digest('hex')
  let asset = new AssetCache('twitter_timeline_' + hash)
  if (asset.isCacheValid('1h')) {
    return asset.getCachedValue()
  }

  // API Reference:
  // https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
  const timeline = await client.get('statuses/user_timeline', params).catch((err) => {
    console.error(err)
  })

  await asset.save(timeline, 'json')

  return timeline
}
