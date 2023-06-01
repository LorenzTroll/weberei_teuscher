import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), imagemin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: '',
    outDir: 'dist',
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
})