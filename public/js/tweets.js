import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

function Tweets(props) {
  return props.tweets.map(
    (tweet) =>
      html`
        <li>
          <a class="tweets__tweet" href="${tweetUrl(tweet)}" target="_blank">
            <header>
              <img
                class="tweet__profile-pic"
                src="${tweetImage(tweet.user.profile_image_url_https)}"
              />
              <div class="tweet__user">
                <span class="tweet__name">${tweet.user.name}</span>
                <span class="tweet__screen-name">@${tweet.user.screen_name}</span>
              </div>
              <div class="tweet__date">${tweetDateFmt(tweet.created_at)}</div>
            </header>
            <main>
              <span>${tweetRemoveLink(decode(tweet.full_text))}</span>

              ${tweet.is_quote_status &&
              html`
                <div class="tweet__quoted">
                  <header>
                    <img
                      class="quoted__profile-pic"
                      src=${tweet.quoted_status.user.profile_image_url_https}
                    />
                    <div class="quoted__user">
                      <span class="quoted__name">${tweet.quoted_status.user.name}</span>
                      <span class="quoted__screen-name"
                        >@${tweet.quoted_status.user.screen_name}</span
                      >
                    </div>
                    <span class="quoted__date__sep">·</span>
                    <div class="quoted__date">${tweetDateFmt(tweet.created_at)}</div>
                  </header>
                  <main>
                    <span>${tweetRemoveLink(decode(tweet.quoted_status.full_text))}</span>
                  </main>
                </div>
              `}
            </main>
          </a>
        </li>
      `
  )
}

fetch('/.netlify/functions/tweets')
  .then((response) => response.json())
  .then((tweets) => {
    render(html`<${Tweets} tweets=${tweets} />`, document.querySelector('#tweets'))
  })
  .catch((error) => console.error(error.toString()))

function tweetUrl(tweet) {
  const url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
  return url
}

function tweetImage(obj) {
  const result = obj.replace(/_normal.png$/, `_x96.png`)
  return result
}

function tweetDateFmt(dateString) {
  const parsedDate = new Date(dateString)
  const formatted = parsedDate.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
  return formatted
}

function tweetRemoveLink(text) {
  const result = text.replace(/https:\/\/t.co\/\S*/gm, '')
  return result
}

function decode(html) {
  var txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}
