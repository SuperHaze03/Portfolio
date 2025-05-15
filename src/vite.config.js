import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'nama-repo' di bawah dengan nama repository kamu di GitHub
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
