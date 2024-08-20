import themeColor from '@/theme/4C9EEA.js'
import ColorsGenerator from '@/theme/colorsGenerator'
import { UPDATE_IS_DARK } from '@/stores/constant'
import useGlobalStore from '@/stores/global'

export default defineNuxtPlugin(nuxtApp => {
  // SSR沒window
  if (!window) return
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = isDark ? themeColor.dark : themeColor.light

  const globalStore = useGlobalStore()
  globalStore[UPDATE_IS_DARK](isDark)

  nuxtApp.vueApp.config.globalProperties.$colors = theme
  Object.keys(themeColor).map((themeType) => ColorsGenerator(themeColor[themeType as 'light' | 'dark'], themeType))
})
