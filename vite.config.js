import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Penting agar asset path sesuai root
  plugins: [react()],
})
