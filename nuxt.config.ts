import { defu } from 'defu'
import { setModules } from './modules'

const nuxtModules = setModules()

const nuxtConfig = defu(nuxtModules, {
  compatibilityDate: '2024-10-22',
  eslint: {
    // simple eslint config - see eslint.config.mjs
    config: {
      stylistic: true,
    },
  },
  runtimeConfig: {
    // nitro-only secret env-like variables goes here
    public: {
      // client-exposed env-like variables goes here

      // availability for modules
      // NOTE: due to static-like nature of nuxt.config.ts file
      // opt-ins for module MUST BE provided via .env file (or production equivalent)
      modules: {
        ui: false,
        formkit: false,
        supabase: false,
      },

      // logging
      logLevel: 'info',
    },
  },
})

// https://nuxt.com/docs/guide/directory-structure/nuxt.config
// @ts-expect-error unknown object type
// TODO elaborate correct type for "nuxtConfig" object
export default defineNuxtConfig(nuxtConfig)
