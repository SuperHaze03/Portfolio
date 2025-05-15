import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // <-- GANTI sesuai nama repo GitHub kamu
  plugins: [react()],
});
