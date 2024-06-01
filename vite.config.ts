import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/vite-react-ts-vitest/',
  server:{
    port:3000,
    proxy:{
      '/api':'https://gps.autotracker.group'
    }
  }
})
