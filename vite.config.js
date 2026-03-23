import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: false,
  server: {
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: {
          three: ['three'],
          gsap:  ['gsap'],
        },
      },
    },
  },
})
