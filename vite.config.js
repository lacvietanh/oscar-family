import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  ssgOptions: {
    async onFinished() {
      // Generate sitemap after all pages are rendered
      const { generateSitemap } = await import('./scripts/generate-sitemap.js')
      await generateSitemap()
    }
  }
})
