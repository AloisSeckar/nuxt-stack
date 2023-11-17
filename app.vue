<template>
  <div>
    <h1>{{ $t("title") }}</h1>
    <div>{{ $t("subtitle") }}</div>
    <NuxtPage />
    <ClientOnly>
      <!-- TODO there is 1s difference between server and client - is there a way to fix this? -->
      <p>
        Current time by
        <span class="link">
          <NuxtLink to="https://vueuse.org/">VueUse</NuxtLink>
        </span>
        :
        {{ currentDate }}
      </p>
    </ClientOnly>
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
    lang: 'en'
  }
})

const currentDate = computed(() => {
  return useDateFormat(useNow(), 'HH:mm:ss DD.MM.YYYY').value.replace('"', '')
})
</script>
