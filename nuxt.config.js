export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '주식회사 일신',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=Edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '주식회사 일신'
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '일신, 주식회사 일신, LG냉장고용 콘덴서, MFC 공정, FIN, FIN 성형, FIN TUBE, 핀밀러, 경남 함안군'
      },
      {
        name: 'naver-site-verification',
        content: '5913962d1127cc9b70d47c0cae0adb948e2d2654'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/moment.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
