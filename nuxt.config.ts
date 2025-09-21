// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate   : '2025-07-15'
  , devtools          : { enabled: true }
  , modules           : ['nuxt-aos']
  , aos               : {
                          // optional global settings
                          duration  : 600,   // animation duration
                          once      : false,     // animate every time you scroll past
                          easing    : 'ease-in-out',
                          offset    : 0,
                          
                        }
  , css               : [
                            '~/assets/css/main.css'
                            , '~/assets/css/fonts.css'
                            , '~/assets/css/vueAnimation.css'
                            , '~/assets/css/customAnimation.css'
                            , '@fortawesome/fontawesome-free/css/all.min.css'
                        ]
  , vite              : {
      plugins: [tailwindcss()],
    }
  , app: {
        head: {
            title   : 'Sun Kimleng',
            link    : [
              { rel: 'icon', type: 'image/png', href: '/images/logo.png' } // favicon in /public
            ],
            meta    : [
              { name: 'description', content: 'Leng’s awesome Nuxt portfolio' }
            ]
      }
  }
  , ssr: true,
})
