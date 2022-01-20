const Twitter = require('twitter')
require('dotenv').config()

const client = new Twitter({
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

exports.handler = async function () {
  try {
    const timeline = await client.get('statuses/user_timeline', params)

    return {
      statusCode: 200,
      body: JSON.stringify(timeline.slice(0, 3)),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
