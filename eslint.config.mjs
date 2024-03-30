import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({

  // `rules` section can follow, where you can change default eslint behaviour if needed
  // you can adjust or even turn off some rules if you cannot or don't want to satisfy them
  // it is not recommended to do so though

  rules: {
    // default for this rule is "1", but I find it too restrictive
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 3,
      },
    }],
  },

})
