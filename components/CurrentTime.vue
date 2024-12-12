<!--
  The `NuxtTime` component of `nuxt-time` module is a way how to deal with SSR in Nuxt.
  Because page on the server is rendered miliseconds before being re-rendered on client,
  wild "hydration error mismatch" may appear from a difference between displayed times.

  This special component gracefully deals with the issue:
  https://github.com/nuxt/nuxt/discussions/23278#discussioncomment-7607298
-->

<template>
  <div>
    Current time by
    <span class="link">
      <NuxtLink to="https://github.com/danielroe/nuxt-time">Nuxt Time</NuxtLink>
    </span>:
    <NuxtTime
      :datetime="currentDate"
      year="numeric"
      month="2-digit"
      day="2-digit"
      hour="2-digit"
      minute="2-digit"
      second="2-digit" />
  </div>
</template>

<script setup lang="ts">
const currentDate = useNow()
</script>
