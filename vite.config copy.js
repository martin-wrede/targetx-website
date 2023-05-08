import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [svgr()],
  plugins: [svgr()],
  define: {
    'process.env': {
      PUBLIC_URL: JSON.stringify('http://localhost:5173')
    }
  }
})

 