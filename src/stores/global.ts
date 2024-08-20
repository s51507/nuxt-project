import { defineStore } from "pinia"
import * as types from './constant'

import ColorsGenerator from '@/theme/colorsGenerator'
import themeColor from '@/theme/4C9EEA.js'


export default defineStore({
  id: 'global',
  state: () => ({
    dark: false,
  }),
  getters: {
    isDark: (state) => state.dark,
  },
  actions: {
    [types.UPDATE_IS_DARK](bool: boolean) {
      this.dark = bool
      document.documentElement.setAttribute('data-mode', bool ? 'dark' : 'light')
      this[types.UPDATE_THEME]()
    },
    [types.UPDATE_THEME]() {
      const theme: { [key: string]: string } = this.isDark ? themeColor.dark : themeColor.light
      // ColorsGenerator(theme)
      useNuxtApp().vueApp.config.globalProperties.$colors = theme
    },
  },
})
