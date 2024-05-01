<template>
  <div class="p-3">
    <h1>{{ $t("title") }}</h1>
    <div>{{ $t("subtitle") }}</div>
    <NuxtPage />
    <p>
      Current time by
      <span class="link">
        <NuxtLink to="https://github.com/danielroe/nuxt-time">Nuxt Time</NuxtLink>
      </span>
      :
      <NuxtTime
        :datetime="currentDate"
        year="numeric"
        month="numeric"
        day="numeric"
        hour="numeric"
        minute="numeric"
        second="numeric"
      />
    </p>
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

const currentDate = useNow()
</script>
