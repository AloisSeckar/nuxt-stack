import { defu } from 'defu'
import { log } from './utils/consola'
import OpenProps from 'open-props'

export function setFeatures() {
  // list of optional extra features
  let extras = [] as string[]

  // object for optional config that will be merged with global Nuxt config
  // declared in nuxt.config.ts
  let nuxtConfig = {
    modules: [] as string[],
  }

  // 1. default modules (mandatory)
  nuxtConfig.modules.push(
      'nuxt-time',
      'nuxt-security',
      '@nuxt/eslint',
      '@nuxt/image',
      '@pinia/nuxt',
      '@vueuse/nuxt',
  )

  // 2. optional modules

  // ui
  if (process.env.NUXT_PUBLIC_IGNIS_UI === 'nuxt-ui') {
    nuxtConfig.modules.push('@nuxt/ui')
  }
  else {
    // remove @nuxt/ui-specific components from resolution
    // if module is not used
    nuxtConfig = defu({
      vue: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag === 'Icon',
        },
      },
    }, nuxtConfig)

    // evaluate separate Tailwind CSS module
    if (process.env.NUXT_PUBLIC_IGNIS_UI === 'tailwind') {
      nuxtConfig.modules.push('@nuxtjs/tailwindcss')
    }
  }

  // database
  if (process.env.NUXT_PUBLIC_IGNIS_DB === 'neon') {
    // module definition
    nuxtConfig.modules.push('nuxt-neon')
  } else if (process.env.NUXT_PUBLIC_IGNIS_DB === 'supabase') {
    // module definition
    nuxtConfig.modules.push('@nuxtjs/supabase')
    // module-specific config key
    nuxtConfig = defu({
      supabase: {
        redirect: false, // https://github.com/supabase/supabase/issues/16551#issuecomment-1685300935
      },
    }, nuxtConfig)
  }

  // i18n
  if (process.env.NUXT_PUBLIC_IGNIS_I18N === 'true') {
    // module definition
    nuxtConfig.modules.push('@nuxtjs/i18n')
    // module-specific config key
    nuxtConfig = defu({
      i18n: {
        vueI18n: './i18n.config.ts',
        locales: ['en'],
        defaultLocale: 'en',
      },
    }, nuxtConfig)
  }

  // formkit
  if (process.env.NUXT_PUBLIC_IGNIS_FORMKIT === 'true') {
    nuxtConfig.modules.push('@formkit/nuxt')
  }

  // content
  if (process.env.NUXT_PUBLIC_IGNIS_CONTENT === 'true') {
    nuxtConfig.modules.push('@nuxt/content')
  }

  // Open Props CSS
  if (process.env.NUXT_PUBLIC_IGNIS_OPENPROPS === 'true') {
    extras.push('Open Props CSS')
    nuxtConfig = defu({
      // import Open Prpops stylesheet
      css: ['~/assets/css/open-props.css'],
      // CSS processor for Open Props
      postcss: {
        plugins: {
          'postcss-jit-props': OpenProps,
        },
      },
    }, nuxtConfig)
  }

  let overview = 'Nuxt Ignis will start using following settings:\n'
  overview += 'Modules: ' + nuxtConfig.modules.join(', ') + "\n"
  if (extras.length > 0) {
    overview += 'Extras: ' + extras.join(', ') + "\n"
  }
  log.info(overview)

  return nuxtConfig
}
