import { defu } from 'defu'
import { log } from './utils/consola'

export function setModules() {
  let moduleConfig = {
    modules: [] as string[],
  }

  // 1. default modules
  moduleConfig.modules.push(
    'nuxt-time',
    'nuxt-security',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  )

  // 2. optional modules

  // ui
  if (process.env.NUXT_PUBLIC_IGNIS_UI === 'nuxt-ui') {
    moduleConfig.modules.push('@nuxt/ui')
  }
  else {
    // remove @nuxt/ui-specific components from resolution
    // if module is not used
    moduleConfig = defu({
      vue: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag === 'Icon',
        },
      },
    }, moduleConfig)

    // evaluate separate Tailwind CSS module
    if (process.env.NUXT_PUBLIC_IGNIS_UI === 'tailwind') {
      moduleConfig.modules.push('@nuxtjs/tailwindcss')
    }
  }

  // database
  if (process.env.NUXT_PUBLIC_IGNIS_DB === 'supabase') {
    // module definition
    moduleConfig.modules.push('@nuxtjs/supabase')
    // module-specific config key
    moduleConfig = defu({
      supabase: {
        redirect: false, // https://github.com/supabase/supabase/issues/16551#issuecomment-1685300935
      },
    }, moduleConfig)
  } else if (process.env.NUXT_PUBLIC_IGNIS_DB === 'neon') {
    // module definition
    moduleConfig.modules.push('nuxt-neon')
  }

  // formkit
  if (process.env.NUXT_PUBLIC_IGNIS_FORMKIT === 'true') {
    moduleConfig.modules.push('@formkit/nuxt')
  }

  // content
  if (process.env.NUXT_PUBLIC_IGNIS_CONTENT === 'true') {
    moduleConfig.modules.push('@nuxt/content')
  }

  log.info('Nuxt Ignis will start using following module config:')
  log.info(moduleConfig)

  return moduleConfig
}
