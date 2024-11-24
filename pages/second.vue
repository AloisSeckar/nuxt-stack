<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    This page appears under `/second`
-->

<template>
  <div>
    <div class="m-4">
      {{ useT("page2") }}
    </div>
    <div class="m-4 flex flex-col items-center">
      <!-- special component for displaying images with NuxtImage -->
      <NuxtImg src="/unsplash.jpg" width="400" />
      <div class="text-xs">
        {{ useT("image") }}
      </div>
    </div>
    <div class="link">
      <NuxtLink to="/">
        {{ useT("goto1") }}
      </NuxtLink>
    </div>
  </div>
</template>
