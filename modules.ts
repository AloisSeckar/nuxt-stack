export function setModules() {
  const modules = []

  // 1. default modules
  modules.push(
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
  if (process.env.NUXT_PUBLIC_MODULES_SUPABASE) {
    modules.push('@nuxtjs/supabase')
  }

  console.log(modules)

  return modules
}
