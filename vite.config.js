import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Die-game/',   // 👈 VERY IMPORTANT
  plugins: [react()],
})
