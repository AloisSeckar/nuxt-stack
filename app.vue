<template>
  <div class="p-3">
    <h1>{{ $t("title") }}</h1>
    <div>{{ $t("subtitle") }}</div>
    <NuxtPage />
    <CurrentTime />
    <div class="link text-xs">
      <NuxtLink to="https://github.com/AloisSeckar/nuxt-stack">
        https://github.com/AloisSeckar/nuxt-stack
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
log.info('Hello, world!')
</script>
