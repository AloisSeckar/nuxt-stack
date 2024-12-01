import en from '@/assets/lang/en.json'
// create and load more language files if needed

export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'no_prefix',
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: 'en',
  messages: { en }, // allowe more language if needed
  warnHtmlMessage: false,
}))
