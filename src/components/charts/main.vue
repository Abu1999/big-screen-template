<template>
  <div class="w-full h-full" :id="props.id"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-gl'
import chinaGeoDataJson from '@/assets/中华人民共和国.json'
import vintagedData from './theme/vintage.json'

const theme = inject('$theme') as string
const emit = defineEmits<{
  (e: 'click', value: any): void
}>()

interface Props {
  id: any
  option: any
}
const props = withDefaults(defineProps<Props>(), {
  id: 'echarts',
})

let myChart: any

function setOption() {
  if (myChart) {
    window.removeEventListener('resize', myChart.resize)
    myChart.dispose()
  }
  myChart = echarts.init(document.getElementById(props.id) as HTMLElement, theme)
  myChart.on('click', function (params: any) {
    emit('click', params)
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  myChart && myChart.setOption(props.option)
}

const initChart = () => {
  echarts.registerMap('china', chinaGeoDataJson as any)
  echarts.registerTheme('vintage', vintagedData)
  setOption()
  window.addEventListener('resize', myChart.resize)
}

watch(
  () => props.option,
  () => {
    setOption()
  },
  { deep: true },
)
onMounted(() => {
  initChart()
})

onUnmounted(() => {
  window.removeEventListener('resize', myChart.resize)
  myChart.dispose()
})
</script>

<style lang="scss" scoped></style>
