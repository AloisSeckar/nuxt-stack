<!--
    https://github.com/antfu/icones

    Icônes - super-easy way of importing graphic components with no additional depenencies

    - change 'width' and 'height' for displayed dimensions
        - any valid unit definition is possible (see https://www.w3schools.com/cssref/css_units.php)
        - note: in current setup icon scales according to higher of the two values and the other one can be omitted
    - change 'fill' to change color
        - 'currentColor' stands for currenty applied css color
        - any other valid color definiton is possible (see https://www.w3schools.com/cssref/css_colors_legal.php)
    - replace 'd' with another SVG definition for another icon
        - refer to https://icones.js.org/ for TONS of free and ready-to-use icons
-->

<template>
  <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path
      fill="#fbbf24"
      d="M18 9V7h-2V2.84A9.929 9.929 0 0 0 11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3H18zm-2.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zM22 3h2v2h-2v2h-2V5h-2V3h2V1h2v2z"
    />
  </svg>
</template>

<!--
This part comes from "VueTS" export on Icônes site
But since this is Nuxt and not plain Vue.js, no exporting and registering components elsewhere is needed
Contents from '/components' folder gets auto-imported application wide

<script lang="ts">
export default {
    name: 'IcBaseline4k'
}
</script>
-->
