# Nuxt Ignis

![Nuxt Ignis](https://github.com/AloisSeckar/nuxt-ignis/blob/main/public/nuxt-ignis.png)

This is a template starter for Nuxt web applicatons. It is being build as the setup I'd currently use to start with a new "real world" [Nuxt](https://nuxt.com/) webapp. It will improve and grow together with my skills. I also try to include **WHAT** and **WHY** comments based on my knowledge about the framework and used libraries.

## Features
- `pnpm` based project
- Nuxt application framework atop Vue.js
- Available as a standalone Nuxt layer package
- VueUse for utility functions
- Tailwind CSS for styling
- NuxtImage to optimize use of images
- nuxt/i18n for localization
- Pinia for state management
- Supabase for auth and DB services
- FormKit for input forms
- Icônes for providing SVG icons
- ESLint via @nuxt/eslint for automatic code quality check

## How to use

### As standalone template
1. Do a `git checkout` from https://github.com/AloisSeckar/nuxt-ignis.git
2. Open in IDE and run `pnpm install` in terminal
3. Configure modules via `.env` properties
4. Start dev server with `pnpm dev` command
5. Visit `localhost:3000` in browser

You are ready to build your next awesome project in Nuxt.

### As a layer
Aside from being "forked", `nuxt-ignis` is also available as a NPM package that can be referenced as a single-import dependency with all the features incomming.

More info comming soon...

## Related article
https://master-coda.cz/article/nuxt-stack

## Configuration
It is possible to select which Nuxt modules will be activated in your project. For example, if you don't need database connectivity, you don't need to include `supabase` - and be forced to setup connection.

Currently, following modules are opinionated:
- `@nuxt/ui`
- `@nuxtjs/tailwindcss` (option ignored if `@nuxt/ui` is selected)
- `@formkit/nuxt`
- `@nuxtjs/supabase`
