// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    'nuxt-mapbox',
  ],
  srcDir: 'src/',
  components: ['~/components'],
  css: ['~/assets/main.css'],
  ui: {
    prefix: 'Nuxt',
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        types: ['node'],
      },
    },
  },
  eslint: {
    checker: true,
  },
  mapbox: {
    accessToken: process.env.MAPBOX_TOKEN,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      title: 'Anthuan Vásquez | Senior Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content: 'Software Engineer, JavaScript Engineer, Web Engineer',
        },
        {
          name: 'description',
          content: 'Software Engineer',
        },
      ],
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.ico' }],
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
        flag: '🇺🇸',
        description: 'Speak english?',
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-ES.json',
        flag: '🇪🇸',
        description: 'Hablas español?',
      },
    ],
    lazy: true,
    langDir: './lang',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: './i18n/i18n.config.ts',
  },
  routeRules: {
    '/': { prerender: true },
    '/api/*': {},
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      mapboxToken: process.env.MAPBOX_TOKEN,
    },
  },
});
