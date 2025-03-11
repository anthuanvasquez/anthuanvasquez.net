// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  devtools: {
    enabled: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      title: 'Anthuan Vásquez | Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content: 'Software Engineer, JavaScript Engineer, Web Engineer',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Software Engineer',
        },
      ],
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    inject: true,
    quality: 80,
    format: ['webp'],
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
    vueI18n: './i18n.config.ts',
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      BASE_URL: process.env.BASE_URL,
    },
  },
});
