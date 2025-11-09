
  // vite.config.js — path-free (100% güvenli)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// __dirname yerine import.meta.url ile dinamik yol
const SRC_PATH = new URL('./src', import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': SRC_PATH,
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});