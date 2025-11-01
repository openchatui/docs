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
        label: 'Vercel Next.js',
        to: 'https://nextjs.org/docs',
        target: '_blank',
      },
      {
        icon: 'i-lucide-book-open',
        label: 'AI SDK',
        to: 'https://ai-sdk.dev/',
        target: '_blank',
      },
      {
        icon: 'i-lucide-book-open',
        label: 'Docker',
        to: 'https://docs.docker.com/',
        target: '_blank',
      }
      ],
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
