# Nuxt Ignis

![Nuxt Ignis](https://github.com/AloisSeckar/nuxt-ignis/blob/main/public/nuxt-ignis.png)

This is a template starter for Nuxt web applicatons. It is being build as the setup I'd currently use to start with a new "real world" [Nuxt](https://nuxt.com/) webapp. It will improve and grow together with my skills. I also try to include **WHAT** and **WHY** comments based on my knowledge about the framework and used libraries.

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

## Overview

**Fundamentals**
- [`pnpm`](https://pnpm.io/) based project
- [Nuxt](https://nuxt.com/) application framework built atop [Vue.js](https://vuejs.org/)
- Available as a template or standalone package

**Built-in features**
- [`nuxt-time`](https://nuxt.com/modules/time) - SSR-friendly component for rendering dynamic date/time
- [`nuxt-security`](https://nuxt-security.vercel.app/) - zero-config OWASP security patterns for Nuxt
- [`@nuxt/eslint`](https://nuxt.com/modules/eslint) - linting for maintaining coding standards and improving code quality 
- [`@nuxt/image`](https://image.nuxt.com/) - handful tools for working with images
- [`@pinia/nuxt`](https://pinia.vuejs.org/ssr/nuxt.html) - de-facto standard state management library for Vue apps - Pinia
- [`@vueuse/nuxt`](https://vueuse.org/nuxt/README.html) - integration with utility functions library for Vue apps - VueUse

**Configurable features**
- UI (pick 0-1)
  - **Nuxt UI** - UI component and CSS library
  - **Tailwind CSS** - CSS library (included in Nuxt UI)
- Database (pick 0-1)
  - **Neon** - serverless PostgreSQL database 
  - **Supabase** - serverless PostgreSQL database 
- Other (opt-in)
  - **I18N** - translations and internalization made easy
  - **FormKit** - for handling input forms
  - **Content** - for working with website content in `.md` or `.json`
  - **Open Props** - for extra CSS by [Open Props](https://open-props.style/)

## Configuration
It is possible to select which Nuxt modules will be activated in your project. All dependencies are being downloaded into local `node_modules`, but Nuxt build process will ensure only relevant packages will be bundled for production.

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
- `@nuxtjs/i18n` - set `NUXT_PUBLIC_IGNIS_I18N` to `true | false`
- `@formkit/nuxt` - set `NUXT_PUBLIC_IGNIS_FORMKIT` to `true | false`
- `@nuxt/content` - set `NUXT_PUBLIC_IGNIS_CONTENT` to `true | false`

Default values are **false** (not included) for all optional modules.

### Optional features
Currently, following extra features (not using separate Nuxt Modules) are opinionated:
- `Open Props CSS` - set `NUXT_PUBLIC_IGNIS_OPENPROPS` to `true | false`

Default values are **false** (not included) for all optional features.
