export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: 'local' | 'homolog' | 'production'
      CAPTCHA_KEY: string
      PROXY_ENABLED: 'true' | 'false'
    }
  }
}
