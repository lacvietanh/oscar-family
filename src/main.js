import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { routes } from './router.js'
import './style.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, head, router }) => {
    app.use(head)
    router.afterEach(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  },
)