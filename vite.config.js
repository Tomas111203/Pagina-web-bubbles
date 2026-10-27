import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base './' works regardless of repo name (Pagina-web, Pagina-web-bubbles, etc.)
  base: './',
});
