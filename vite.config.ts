import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' => los assets se resuelven en forma relativa, así el sitio funciona
// tanto en https://usuario.github.io/repo/ como en un dominio propio, sin tocar nada.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
