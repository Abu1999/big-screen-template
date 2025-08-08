<template>
  <ChartCard :title="'户口分布趋势图'">
    <ChartsMain id="rb" :option="threeDOption(props.data)"></ChartsMain>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
import ChartCard from '@/components/ChartCard.vue'
import { threeDOption } from '@/components/charts/options/pie/index'

interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      name: '农村户口',
      value: 60,
    },
    {
      name: '城市户口',
      value: 44,
    },
  ],
})
</script>

<style scoped></style>
