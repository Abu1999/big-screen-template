<template>
  <ChartCard title="学校分布趋势图">
    <ChartsMain class="p-2" id="lb" :option="nightingaleOption(props.data, false)"></ChartsMain>
  </ChartCard>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
import { nightingaleOption } from '@/components/charts/options/pie/index'
import ChartCard from '@/components/ChartCard.vue'
interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [
    {
      value: '522',
      name: '北京大学 522',
    },
    {
      value: '431',
      name: '清华大学 431',
    },
    {
      value: '305',
      name: '浙江大学 305',
    },
    {
      value: '293',
      name: '复旦大学 293',
    },
    {
      value: '262',
      name: '武汉大学 262',
    },
    {
      value: '237',
      name: '上海交通大学 237',
    },
    {
      value: '217',
      name: '中山大学 217',
    },
    {
      value: '211',
      name: '南京大学 211',
    },
    {
      value: '207',
      name: '中国人民大学 207',
    },
    {
      value: '202',
      name: '华中科技大学 202',
    },
    {
      value: '186',
      name: '同济大学 186',
    },
    {
      value: '142',
      name: '四川大学 142',
    },
    {
      value: '137',
      name: '北京航空航天大学 137',
    },
    {
      value: '134',
      name: '山东大学 134',
    },
    {
      value: '132',
      name: '厦门大学 132',
    },
    {
      value: '131',
      name: '哈尔滨工业大学 131',
    },
    {
      value: '126',
      name: '华南理工大学 126',
    },
    {
      value: '120',
      name: '中国传媒大学 120',
    },
    {
      value: '111',
      name: '南开大学 111',
    },
    {
      value: '108',
      name: '中国科学技术大学 108',
    },
  ],
})
</script>

<style scoped></style>
