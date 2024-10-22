import { defu } from 'defu'
import { setModules } from './modules'

const nuxtModules = setModules()

const nuxtConfig = defu(nuxtModules, {
  runtimeConfig: {
    // nitro-only secret env-like variables goes here
    public: {
      // client-exposed env-like variables goes here
    },
  },
  compatibilityDate: '2024-10-22',
  eslint: {
    // simple eslint config - see eslint.config.mjs
    config: {
      stylistic: true,
    },
  },
})

console.log(nuxtConfig)

// https://nuxt.com/docs/guide/directory-structure/nuxt.config
// @ts-expect-error unknown object type
// TODO elaborate correct type for "nuxtConfig" object
export default defineNuxtConfig(nuxtConfig)
