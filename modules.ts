import { defu } from 'defu'

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
  if (process.env.NUXT_PUBLIC_MODULES_UI === 'true') {
    moduleConfig.modules.push('@nuxt/ui')
  }

  // formkit
  if (process.env.NUXT_PUBLIC_MODULES_FORMKIT === 'true') {
    moduleConfig.modules.push('@formkit/nuxt')
  }

  // supabase
  if (process.env.NUXT_PUBLIC_MODULES_SUPABASE === 'true') {
    // module definition
    moduleConfig.modules.push('@nuxtjs/supabase')
    // module-specific config key
    moduleConfig = defu({
      supabase: {
        redirect: false, // https://github.com/supabase/supabase/issues/16551#issuecomment-1685300935
      },
    }, moduleConfig)
  }

  console.log('Nuxt Stack will start using following module config:')
  console.log(moduleConfig)

  return moduleConfig
}
