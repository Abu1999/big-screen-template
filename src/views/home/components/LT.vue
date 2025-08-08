<template>
  <ChartCard :title="'性别分布趋势图'">
    <ChartsMain class="p-5" id="lt" :option="sexOption(props.data)"></ChartsMain>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
import ChartCard from '@/components/ChartCard.vue'
import { sexOption } from '@/components/charts/options/pie/index'
interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      name: '男性',
      value: 50,
    },
    {
      name: '女性',
      value: 50,
    },
  ],
})

onMounted(() => {
  console.log(props.data, '??????????????')
})
</script>

<style scoped></style>
