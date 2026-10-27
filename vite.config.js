import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // In production for GitHub Pages under /Pagina-web/
  base: process.env.NODE_ENV === 'production' ? '/Pagina-web/' : '/',
});
