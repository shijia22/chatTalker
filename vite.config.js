import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/talker/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true
  }
})
