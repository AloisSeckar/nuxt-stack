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
- Supabase or Neon DB services
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
It is possible to select which Nuxt modules will be activated in your project. For example, if you don't need database connectivity, you don't need to include a DB module and be forced to setup connection.

### UI
It is possible to pick from three options:
- `nuxt-ui` - full https://ui.nuxt.com/ via `@nuxt/ui` connector module **[RECOMMENDED]**
- `tailwind` - only https://tailwindcss.com/ via `@nuxtjs/tailwindcss` connector module
- `off` - no UI library **[DEFAULT]**

Set the value via `NUXT_PUBLIC_IGNIS_UI` env variable.

### Database
It is possible to pick from three options:
- `neon` - https://neon.tech/ via `nuxt-neon` connector module **[RECOMMENDED]**
- `supabase` - https://supabase.com/ via `@nuxtjs/supabase` connector module
- `off` - no database module **[DEFAULT]**

Set the value via `NUXT_PUBLIC_IGNIS_DB` env variable.

### Optional modules
Currently, following modules are opinionated:
- `@formkit/nuxt` - set `NUXT_PUBLIC_IGNIS_FORMKIT` to `true | false`
- `@nuxt/content` - set `NUXT_PUBLIC_IGNIS_CONTENT` to `true | false`

Default values are **false** (not included) for all optional modules.
