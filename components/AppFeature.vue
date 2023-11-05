<!--
    https://nuxt.com/docs/guide/directory-structure/components

    Example of a reusable Nuxt component.

    Any valid .vue file inside `/components` directory is auto-imported everywhere by Nuxt
    => no need for explicit imports.

    Modern Vue.js Composition API syntax is used for setup.
    https://vuejs.org/api/sfc-script-setup.html

    For usage go to `/pages/index.vue`
-->

<template>
  <div class="features">
    <!-- "double mustache" syntax to display JS expression inside HTML template -->
    <!-- notice you can call props directly in template section -->
    {{ text }}
    <AppIconSmiley />
  </div>
</template>

<script setup lang="ts">
// defineProps() comming from Vue.js Composition API itself
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
// this is how you pass variables inside components
// required - value has to be provided, otherwise an error will occur
// default - will have this value, unless overwritten by caller
const props = defineProps({
  text: { type: String, required: true },
  optionalText: { type: String, default: 'default' }
})

// in setup section, you have to adress properties like this
// you cannot reach them directly unlike in template
/* eslint "no-console" : "off" */
console.debug(props.text)
console.debug(props.optionalText)
// note special inline eslint flag because normally you shouldn't use build-in console directly
// see https://eslint.org/docs/latest/rules/no-console
</script>
