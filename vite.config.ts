import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Treino Diário',
        short_name: 'Treino',
        description: 'Aplicativo de controle de exercícios',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: '/treino.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/treino.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
