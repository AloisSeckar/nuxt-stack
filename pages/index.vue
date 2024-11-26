<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    An example of Nuxt page.
    Nuxt automaticaly provides routing and displays this page when user visits root URL or `/index`.

    AppFeature
     - an example usage of auto-imported Nuxt component declared in `/components` directory
     - the text is (usually) being loaded localized via nuxtjs/i18n module
     - features are being displayed conditionally according to current setting
    
    NuxtLink
     - special component for improved handling for HTML links (<a> tags)
-->

<template>
  <div>
    <div class="m-auto my-4 w-3/5 flex flex-col">
      <AppFeature :text="useT('features.nuxt')" />
      <AppFeature :text="useT('features.security')" />
      <AppFeature :text="useT('features.image')" />
      <AppFeature :text="useT('features.pinia')" />
      <AppFeature :text="useT('features.vueuse')" />
      <AppFeature :text="useT('features.consola')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="useT('features.ui')" />
      <AppFeature v-if="ui !== 'off'" :text="useT('features.tailwind')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="useT('features.icon')" />
      <AppFeature v-if="db === 'supabase'" :text="useT('features.supabase')" />
      <AppFeature v-if="db === 'neon'" :text="useT('features.neon')" />
      <AppFeature v-if="i18n" :text="useT('features.i18n')" />
      <AppFeature v-if="formkit" :text="useT('features.formkit')" />
      <AppFeature v-if="content" :text="useT('features.content')" />
      <AppFeature v-if="openprops" class="openprops-feature" :text="useT('features.openprops')" />
    </div>
    <div class="link">
      <NuxtLink to="/second">
        {{ useT("goto2") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const setup = useRuntimeConfig().public.ignis
const ui = setup.ui
const db = setup.db
const i18n = setup.i18n
const formkit = setup.formkit
const content = setup.content
const openprops = setup.openprops
</script>
