<template>
  <div class="p-3">
    <div class="ignis-header">
      <img src="/nuxt-ignis.png" class="ignis-logo" :title :alt>
      <h1 class="ignis-title">
        {{ $t("title") }}
      </h1>
      <img src="/nuxt-ignis.png" class="ignis-logo" :title :alt>
    </div>
    <div>{{ $t("subtitle") }}</div>
    <NuxtPage />
    <CurrentTime />
    <div class="link text-xs">
      <NuxtLink to="https://github.com/AloisSeckar/nuxt-ignis">
        https://github.com/AloisSeckar/nuxt-ignis
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: useAppConfig().textTitle,
  htmlAttrs: {
    lang: 'en',
  },
})
initConsola()
log.info('Nuxt Ignis was here!')
const title = useNuxtApp().$i18n.t('title')
const alt = title
</script>

<style scoped>
.ignis-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}
.ignis-logo {
  display: inline;
  width: 64px;
  height: 64px;
}
.ignis-title {
  margin-top: 15px;
}
</style>
