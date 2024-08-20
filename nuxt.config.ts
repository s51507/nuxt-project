import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath, URL } from 'url'
import themeColor from './src/theme/4C9EEA.js'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: [{ src: '~/plugins/init.ts', ssr: false }],
  srcDir: './src',
  app: {
    baseURL: '/'
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  tailwindcss: {
    config: {
      darkMode: ['selector', '[data-mode="dark"]'],
      theme: {
        extend: {
          padding: {
          }
        },
        colors: () => {
          return Object.keys(themeColor.light).reduce((obj, k) => ({ ...obj, [k]: `var(--${k})` }), {})
        }
      }
    }
  },
})
