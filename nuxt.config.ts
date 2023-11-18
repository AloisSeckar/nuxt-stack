// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-time',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  i18n: {
    // if required to modify i18n
  },
  image: {
    // if required to modify nuxt/image
    presets: {
      // for custom presets
    }
  },
  supabase: {
    // if required to modify supabase
    redirect: false // https://github.com/supabase/supabase/issues/16551#issuecomment-1685300935
  },
  runtimeConfig: {
    // nitro-only secret env-like variables goes here
    public: {
      // client-exposed env-like variables goes here
    }
  }
})
