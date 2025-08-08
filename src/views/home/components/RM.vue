<template>
  <ChartCard title="年龄分布趋势图">
    <ChartsMain class="p-4" id="rm" :option="sortOption(props.data)"></ChartsMain>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
import ChartCard from '@/components/ChartCard.vue'
import { sortOption } from '@/components/charts/options/bar/index'
interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      name: '示例1',
      value: 500,
    },
    {
      name: '示例2',
      value: 355,
    },
    {
      name: '示例3',
      value: 358,
    },
    {
      name: '示例4',
      value: 458,
    },
    {
      name: '其他',
      value: 147,
    },
  ],
})
</script>

<style scoped></style>
