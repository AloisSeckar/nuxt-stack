import { defu } from 'defu'
import { setFeatures } from './features'

const ignisFeatures = setFeatures()

// https://nuxt.com/docs/guide/directory-structure/nuxt-config
const nuxtConfig = defu(ignisFeatures, {

  // https://nuxt.com/docs/api/nuxt-config#compatibilitydate
  compatibilityDate: '2024-12-01',

  // simple eslint config - see eslint.config.mjs
  eslint: {
    config: {
      stylistic: true,
    },
  },
  
  // app configuration
  runtimeConfig: {
    // nitro-only secret env-like variables go here
    public: {
      // client-exposed env-like variables go here

      // features
      // NOTE: due to static-like nature of nuxt.config.ts file
      // actual values MUST BE provided via .env file (or production equivalent)
      ignis: {
        ui: 'off', // nuxt-ui/tailwind/off
        db: 'off', // neon/supabase/off
        i18n: false, // true/false
        formkit: false, // true/false
        content: false, // true/false
        openprops: false, // true/false
      },

      // logging
      logLevel: 'info',
    },
  },
})

// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
// @ts-expect-error unknown object type
// TODO elaborate correct type for "nuxtConfig" object
export default defineNuxtConfig(nuxtConfig)
