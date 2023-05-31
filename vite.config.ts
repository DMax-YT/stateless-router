import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      services: '/src/services',
      components: '/src/components',
      pages: '/src/pages'
    }
  },

  base: process.env.BASE_URL?.startsWith('/') ? process.env.BASE_URL : '/'
})
