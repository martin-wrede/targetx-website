import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base:'/targetx-website/',
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
  },
  plugins: [
    react(),
    svgr()
  ]
});
