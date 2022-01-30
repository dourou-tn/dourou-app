import { io, auth, axios, i18n, fonts } from './config';
import { join } from 'path';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dourou-app',
    script: [],
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/click-outside.js', '~/plugins/direction-control',],

  router: {
    middleware: ["close-drawer"]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { path: join(__dirname, '..') } ],
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['nuxt-socket-io'],
    ['@nuxtjs/axios'],
    ['@nuxtjs/auth-next'],
    ['@nuxtjs/i18n'],
    ['@nuxt/image'],
  ],

  // socket.io module: https://nuxt-socket-io.netlify.app/installation/
  io: io,

  // axios module: https://axios.nuxtjs.org/setup
  axios: axios,

  // auth module: https://auth.nuxtjs.org/guide/setup/
  auth: auth,

  // google fonts module: https://google-fonts.nuxtjs.org/options
  googleFonts: fonts,

  // https://i18n.nuxtjs.org/basic-usage
  i18n: i18n,

  fontawesome: {
    icons: {
      brands: true,
    },
  },

  // https://image.nuxtjs.org/api/options#domains
  image: {
    domains: ['http://localhost:5000']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    // { path: "/ws", handler: "~/io/socket.js" },
  ],

  server: {
    port: process.env.APP_PORT || 8080,
    host: "0.0.0.0"
  }
}
