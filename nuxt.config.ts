// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://graphql.anilist.co',
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
})
