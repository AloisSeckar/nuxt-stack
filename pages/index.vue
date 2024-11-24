<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    An example of Nuxt page.
    Nuxt automaticaly provides routing and displays this page when user visits root URL.
-->

<template>
  <div>
    <div class="m-auto my-4 w-3/5 flex flex-col">
      <!-- an example of Nuxt components declared in `/components` directory -->
      <!-- the text is being loaded localized via nuxt/i18n module -->
      <AppFeature :text="$t('features.nuxt')" />
      <AppFeature :text="$t('features.security')" />
      <AppFeature :text="$t('features.image')" />
      <AppFeature :text="$t('features.pinia')" />
      <AppFeature :text="$t('features.vueuse')" />
      <AppFeature :text="$t('features.i18n')" />
      <AppFeature :text="$t('features.consola')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="$t('features.ui')" />
      <AppFeature v-if="ui !== 'off'" :text="$t('features.tailwind')" />
      <AppFeature v-if="ui === 'nuxt-ui'" :text="$t('features.icon')" />
      <AppFeature v-if="db === 'supabase'" :text="$t('features.supabase')" />
      <AppFeature v-if="db === 'neon'" :text="$t('features.neon')" />
      <AppFeature v-if="formkit" :text="$t('features.formkit')" />
      <AppFeature v-if="content" :text="$t('features.content')" />
      <AppFeature v-if="content" class="openprops-feature" :text="$t('features.openprops')" />
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
const openprops = setup.openprops
</script>
