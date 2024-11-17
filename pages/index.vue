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
      <AppFeature v-if="db === 'supabase'" :text="useNuxtApp().$i18n.t('features.supabase')" />
      <AppFeature v-if="db === 'neon'" :text="useNuxtApp().$i18n.t('features.neon')" />
      <AppFeature v-if="formkit" :text="useNuxtApp().$i18n.t('features.formkit')" />
      <AppFeature v-if="content" :text="useNuxtApp().$i18n.t('features.content')" />
    </div>
    <div class="link">
      <NuxtLink to="/second">
        {{ $t("goto2") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const setup = useRuntimeConfig().public.ignis
const ui = setup.ui
const db = setup.db
const formkit = setup.formkit
const content = setup.content
</script>
