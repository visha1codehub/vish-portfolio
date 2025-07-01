import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // <-- dev mode fallback
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    // needed for 'vite preview' or static hosting
    historyApiFallback: true,
  },
})
