import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV==='production'? '/Plain-Object-Router/':'/',
  //這裡有更改網址 從React-router換成Plain-Object-Router
  plugins: [react()],
})
