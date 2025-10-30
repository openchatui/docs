export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const isLanding = (path: string) => {
      const p = (path || '/').replace(/\/$/, '') || '/'
      return p === '/' || p === '/en' || p === '/fr'
    }

    const update = (path: string) => {
      if (isLanding(path)) document.body.classList.add('landing-bg')
      else document.body.classList.remove('landing-bg')
    }

    // Initial on mount
    nuxtApp.hook('app:mounted', () => update(window.location.pathname))

    // On every route change
    addRouteMiddleware('landing-bg', (to) => {
      update(to.path)
    }, { global: true })
  }
})

