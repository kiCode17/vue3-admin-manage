<template>
  <el-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </el-config-provider>
</template>

<script setup>
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import enLocale from 'element-plus/es/locale/lang/en'
import { computed, onMounted } from 'vue'
import { useSettingStore } from '@/pinia/setting'
import { usePermissionStore } from '@/pinia/permission'

const setting = useSettingStore()
const permissionStore = usePermissionStore()

const resizeHeight = () => {
  const { clientHeight } = document.body
  const height = Math.max(600, clientHeight - 170) // 保证最小值大于600
  setting.setTableHeight(height)
}

onMounted(() => {
  permissionStore.setPermission()
})

resizeHeight()

const locale = computed(() => {
  return setting.lang === '/zh-CN' ? zhLocale : enLocale
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.element-plus-logo {
  width: 50%;
}
</style>
