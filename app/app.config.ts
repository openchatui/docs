export default defineAppConfig({
  socials: {
    discord: 'https://discord.gg/WQnmggQknM'
  },
  github: {
    url: 'https://github.com/openchatui/openchat',
    branch: 'main'
  },
  toc: {
    bottom: {
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui.nuxt.com/getting-started/installation/nuxt',
        target: '_blank',
      }],
    },
  },
  ui: {
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0',
      },
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none',
      },
    },
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },  
})
