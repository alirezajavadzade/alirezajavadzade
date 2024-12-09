// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', 'vuetify/styles'],

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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '~/public/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '~/public/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '~/public/favicon-16x16.png' },
        { rel: 'manifest', href: '~/public/site.webmanifest' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-D9W94785LH',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-D9W94785LH');
          `
        },
        {
          innerHTML: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pbb85x9fnm");
          `,
          type: 'text/javascript'
        }
      ],
    }
  },

  compatibilityDate: '2024-10-23'
})