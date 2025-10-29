export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  site: {
    name: 'Docs',
  },
  compatibilityDate: '2025-10-28',
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  llms: {
    domain: 'https://openchatui.org',
    title: 'OpenChat Docs',
    description: 'Offical Documentation for OpenChat',
    full: {
      title: 'OpenChat Docs',
      description: 'Offical Documentation for OpenChat',
    },
  }
})
