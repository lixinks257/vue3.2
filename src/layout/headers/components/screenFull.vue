<template>
  <div id="screenFul" @click="handleFullScreen">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'
// 是否全屏
const icon = ref(screenfull.isFullscreen)
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}

onMounted(() => {
  // 监听是否全屏变化
  screenfull.on('change', changeIcon)
})
onBeforeMount(() => {
  screenfull.off('change')
})
</script>

<style lang="scss" scoped></style>
