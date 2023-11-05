import en from '@/assets/lang/en.json'
// create and load more language files if needed

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en }, // allowe more language if needed
  warnHtmlMessage: false
}))
