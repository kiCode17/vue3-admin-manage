import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    title: 'VUE3-ADMIN-MANAGE',
    fixedHeader: false,
    sideBarLogo: true,
    showSettings: true,
    tableHeight: 600, // 表格高度
    hideHeader: false,
    lang: '/zh-CN',
  }),
  actions: {
    // 设置高度
    setTableHeight(height) {
      this.tableHeight = height
    },
    // 设置语言
    getLangState(lang) {
      this.lang = lang
    },
  }
})