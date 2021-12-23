import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'demo',
  plugins: [vue()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, '../src'),
      },
      {
        find: '@demo',
        replacement: path.resolve(__dirname, './'),
      },
    ],
  },
})
