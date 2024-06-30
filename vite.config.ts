import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'facebook-conversion-api',
      fileName: 'facebook-conversion-api',
    },
  },
  plugins: [
    dts({
      exclude: 'dev',
    }),
  ],
})
