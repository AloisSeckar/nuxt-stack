import { defu } from 'defu'
import { setModules } from './modules'

const nuxtModules = setModules()

const nuxtConfig = defu(nuxtModules, {
  compatibilityDate: '2024-11-11',
  eslint: {
    // simple eslint config - see eslint.config.mjs
    config: {
      stylistic: true,
    },
  },
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
        formkit: false, // true/false
        content: false, // true/false
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
