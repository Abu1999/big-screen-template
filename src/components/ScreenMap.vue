<template>
  <div
    class="ScreenAdapter"
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
      transform,
    }"
  >
    <slot :scaleData="scaleData"></slot>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  width?: string
  height?: string
}
const transform = ref<string>()
const scaleData = ref<number>(0)

const props = withDefaults(defineProps<Props>(), {
  width: '1920',
  height: '1080',
})

// 获取放大缩小比例
const getScale = () => {
  const elmnt = document.documentElement as HTMLElement
  console.log(elmnt.clientWidth, elmnt.clientHeight, props.width, props.height)
  const w = elmnt.clientWidth / Number(props.width)
  const h = elmnt.clientHeight / Number(props.height)

  scaleData.value = w < h ? w : h
  return scaleData.value
}
// 设置比例
const setScale = () => {
  transform.value = 'scale(' + getScale() + ') translate(-50%, -50%)'
}

// 变换时间
const Debounce = (fn: () => void, t?: number) => {
  const delay = t ?? 500
  let timer: any
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

onMounted(() => {
  setScale()
  window.onresize = Debounce(setScale)
})
</script>
<style scoped>
.ScreenAdapter {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.2s;
}
</style>
