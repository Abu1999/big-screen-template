<template>
  <ChartCard title="问卷质量反馈评分趋势图">
    <ChartsMain id="rt" :option="doughnutOption(props.data)"></ChartsMain>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
import ChartCard from '@/components/ChartCard.vue'
import { doughnutOption } from '@/components/charts/options/pie/index'

interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      name: '杭州',
      value: 98,
    },
    {
      name: '金华',
      value: 150,
    },
    {
      name: '金华',
      value: 150,
    },
    {
      name: '宁波',
      value: 62,
    },
    {
      name: '太原',
      value: 54,
    },
  ],
})
</script>

<style scoped></style>
