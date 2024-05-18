<template>
  <div>
    Current time by
    <span class="link">
      <NuxtLink to="https://github.com/danielroe/nuxt-time">Nuxt Time</NuxtLink>
    </span>
    :
    <NuxtTime
      :datetime="currentDate"
      year="numeric"
      month="2-digit"
      day="2-digit"
      hour="2-digit"
      minute="2-digit"
      second="2-digit"
    />
  </div>
</template>

<script setup lang="ts">
const currentDate = useNow()
</script>
