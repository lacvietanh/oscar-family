import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSitemap from './dev/vite-plugin-sitemap.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginSitemap()],
})
