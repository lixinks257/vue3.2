<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList.list" :key="index">
      <!-- <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span> -->
      <span v-if="index === breadcrumbList.list.length - 1" class="no-redirect">
        {{ $t(`menus.${item.name}`) }}
      </span>
      <span v-elseclass="redirect" @click="handleRedirect(item.path)">
        {{ $t(`menus.${item.name}`) }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// import { reactive, watch } from 'vue'
import { reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log('router', router)
console.log('route', route)
const breadcrumbList = reactive({
  list: []
})
const initBreadcrumbList = () => {
  breadcrumbList.list = route.matched
  console.log('route.matche', route.matched)
}
const handleRedirect = (path) => {
  router.push(path)
}
// initBreadcrumbList()
// watch(
//   route,
//   () => {
//     initBreadcrumbList()
//   },
//   { deep: true, immediate: true }
// )
watchEffect(() => {
  initBreadcrumbList()
})
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
