import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Le site est servi depuis https://<utilisateur>.github.io/HC/.
// Les routes utilisent un hash (#/fr/...) : aucune réécriture serveur n'est nécessaire.
export default defineConfig({
  base: '/HC/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist' },
})
