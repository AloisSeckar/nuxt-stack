import { defu } from 'defu'

export function setModules() {
  let moduleConfig = {
    modules: [] as string[],
  }

  // 1. default modules
  moduleConfig.modules.push(
    'nuxt-time',
    'nuxt-security',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  )

  // 2. optional modules

  // supabase
  if (process.env.NUXT_PUBLIC_MODULES_SUPABASE) {
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
