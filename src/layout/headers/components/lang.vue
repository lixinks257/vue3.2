<template>
  <el-dropdown @command="handleCommand" id="lang">
    <svg-icon icon="language" class="svg-container"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
// 使用i18n
const i18n = useI18n()
const store = useStore()

const currentLanguage = computed(() => {
  // 获取i18n的值
  return i18n.locale.value
})

const handleCommand = (val) => {
  // 改变值
  i18n.locale.value = val
  store.commit('app/changeLang', val)
  localStorage.setItem('lang', val)
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
