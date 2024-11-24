/**
 * This function is a shorthand for obtaining i18n translation in scripts.
 * In templates `$t` function is available, but in scripts we normally have to
 * access the `t` function via the instance of $i18n living inside current Nuxt App.
 * 
 * This has no benefit other than allowing shorter calls in your scripts.
 * 
 * @param key identifier of text that should be displayed
 * @returns translated text from i18n sources
 */
export function useT(key: string): string {
  return useNuxtApp().$i18n.t(key)
}
