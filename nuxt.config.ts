// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:
      {
      head:{
        titleTemplate: 'CloneBnB | %s',
        htmlAttrs: {
          lang: 'en'
        },
        bodyAttrs: {
          class: ["my-style"]
        },
        meta: [{
          charset: "utf-8"
        }]
      }
}
  
})
