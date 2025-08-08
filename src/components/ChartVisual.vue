<template>
  <div class="flex w-full h-full text-black">
    <div class="w-1/2 h-full">
      <textarea id="config" :value="jsonString" @input="handleJsonChange" />
    </div>
    <div class="w-1/2 h-full">
      <ChartsMain ref="echartsRef" id="echarts" :option="option"></ChartsMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'

const jsonString = ref(`{

"title": {

"text": "示例图表"

},

"tooltip": {},

"legend": {

"data":["销量"]

},

"xAxis": {

"data": ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]

},

"yAxis": {},

"series": [{

"name": "销量",

"type": "bar",

"data": [5, 20, 36, 10, 10, 20]

}]

}`)
const option = ref({})

function handleJsonChange(e: any) {
  jsonString.value = e.target.value
  option.value = JSON.parse(e.target.value)
}

onBeforeMount(() => {
  option.value = JSON.parse(jsonString.value)
  console.log(option)
})
</script>

<style scoped>
#config {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
