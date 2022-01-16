interface ImportMetaEnv {
  readonly PUBLIC_TWITTER_CONSUMER_KEY: string
  readonly PUBLIC_TWITTER_CONSUMER_SECRET: string
  readonly PUBLIC_TWITTER_BEARER_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
