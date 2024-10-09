import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://doodle.manasas.dev/',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
