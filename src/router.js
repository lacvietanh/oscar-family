import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Index from './pages/home.vue'
import Studio from './pages/studio.vue'
import OscarStudio from './pages/oscarstudio.vue'
import Akinet from './pages/akinet.vue'
import AkiWorkflow from './pages/akiworkflow.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/studio',
    name: 'Studio',
    component: Studio,
  },
  {
    path: '/oscarstudio',
    name: 'OscarStudioArticle',
    component: OscarStudio,
  },
  {
    path: '/akinet',
    name: 'Akinet',
    component: Akinet,
  },
  {
    path: '/akiworkflow',
    name: 'AkiWorkflow',
    component: AkiWorkflow,
  },
]


const isServer = typeof window === 'undefined';
const router = createRouter({
  history: isServer ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
});

export default router
