<template>
  <el-menu
    :active-text-color="variables.activeText"
    :background-color="variables.menuBg"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :collapse="!$store.getters.siderType"
    text-color="#fff"
    router
    unique-opened
  >
    <el-sub-menu v-for="(item, idx) in menusList" :key="idx" :index="item.id">
      <template #title>
        <el-icon><component :is="iconList[idx]"></component></el-icon>
        <span>{{ $t(`menus.${item.path}`) }}</span>
      </template>
      <el-menu-item v-for="(li, index) in item.children" :key="index" :index="'/' + li.path" @click="savePath(li.path)">
        <template #title>
          <el-icon><component :is="icon"></component></el-icon>
          <span>{{ $t(`menus.${li.path}`) }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { menuList } from '@/api/menu'
import { ref } from 'vue'
// 导入定义的全局样式
import variables from '@/styles/variables.scss'

console.log('menuList', variables)

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])

const icon = ref('menu')
// 默认保持选中状态
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menusList = ref([])
const initMenusList = async () => {
  menusList.value = await menuList()
  console.log('menusList', menusList.value)
}
initMenusList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
