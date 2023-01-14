import i18nConfig from './i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Công Ty Cổ Phần Nông Sản Thực Phẩm Quảng Ngãi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/reset.scss', '~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/apollo',
  ],

  i18n: i18nConfig,
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
      'https://7wy8iw50.api.sanity.io/v2021-10-21/data/query/production?',
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://stirred-shiner-19.hasura.app/v1/graphql', // Example url
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': 'TKrjwyPC0UH3sfUFyNS64kCfLastnHcvTnA9NyF5TCjX27U5WNuzNxIeZopDrN0y',
            'content-typex-auth-token': 'application/json'
          }
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  target: 'static',
  server: {
    host: '0', // default: localhost
  },
}
