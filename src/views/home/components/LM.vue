<template>
  <ChartCard title="学历分布趋势图">
    <div class="w-full h-full p-2">
      <dv-capsule-chart :config="config" style="width: 25rem; height: 15rem" />
    </div>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartCard from '@/components/ChartCard.vue'
interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      name: '南阳',
      value: 167,
    },
    {
      name: '周口',
      value: 123,
    },
    {
      name: '漯河',
      value: 98,
    },
    {
      name: '郑州',
      value: 75,
    },
    {
      name: '西峡',
      value: 66,
    },
  ],
})

const config = reactive({
  data: computed(() => props.data),
  unit: '人',
  showValue: true,
})
</script>

<style scoped></style>
