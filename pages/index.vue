<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    An example of Nuxt page.
    Nuxt automaticaly provides routing and displays this page when user visits root URL.
-->

<template>
  <div>
    <div class="features-list">
      <!-- an example of Nuxt components declared in `/components` directory -->
      <!-- the text is being loaded localized via nuxt/i18n module -->
      <AppFeature :text="useNuxtApp().$i18n.t('features.nuxt')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.security')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.image')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.pinia')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.vueuse')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.i18n')" />
      <AppFeature :text="useNuxtApp().$i18n.t('features.consola')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="useNuxtApp().$i18n.t('features.ui')" />
      <AppFeature v-if="ui !== 'off'" :text="useNuxtApp().$i18n.t('features.tailwind')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="useNuxtApp().$i18n.t('features.icon')" />
      <AppFeature v-if="database === 'supabase'" :text="useNuxtApp().$i18n.t('features.supabase')" />
      <AppFeature v-if="database === 'neon'" :text="useNuxtApp().$i18n.t('features.neon')" />
      <AppFeature v-if="modules.formkit" :text="useNuxtApp().$i18n.t('features.formkit')" />
      <AppFeature v-if="modules.content" :text="useNuxtApp().$i18n.t('features.content')" />
    </div>
    <div class="link">
      <NuxtLink to="/second">
        {{ $t("goto2") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const modules = useRuntimeConfig().public.modules
const ui = useRuntimeConfig().public.ignis.ui
const database = useRuntimeConfig().public.ignis.database
</script>
