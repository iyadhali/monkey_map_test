// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],



  typescript: {
    typeCheck: true,
    strict: true
  },

  experimental: {
    typedPages: true
  },
  build: {
    transpile: ['echarts', 'zrender', 'tslib'],
  }
})
