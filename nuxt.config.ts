// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-mdi'
  ],
  image: {
    dir: 'assets/images'
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'علیرضا جوادزاده | Alireza javadzade',
      meta: [
        {
          name: 'description', content: 'وب سایت شخصی علیرضا جوادزاده'
        }
      ]
    }
  }
})
