// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image', '@pinia/nuxt'],

  build: {
    transpile: ['xmlrpc', 'odoo-xmlrpc-ts']
  },
  typescript: {
    strict: false
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: ['~/components/', '~/components/form/']
})