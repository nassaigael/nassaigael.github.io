import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Important pour résoudre le problème ESM
  ssr: {
    noExternal: ['@tailwindcss/vite'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'clsx', 'tailwind-merge', 'framer-motion'],
    exclude: ['@tailwindcss/vite'],
  },
  // Configuration pour l'environnement de build
  build: {
    commonjsOptions: {
      include: [/@tailwindcss\/vite/, /node_modules/],
    },
  },
})