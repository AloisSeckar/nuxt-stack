// https://formkit.com/getting-started/installation#configuring-nuxt
import { en, de } from '@formkit/i18n'
import type { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  // example of importing different message translations and set the default one
  locales: { en, de },
  locale: 'en',
}

export default config
