<template>
  <div class="w-full h-full">
    <div class="w-full h-[60px] flex justify-around items-center">
      <dv-decoration-11 style="width: 300px; height: 60px">
        <div class="w-full h-full text-lg px-6 flex justify-around items-center">
          <div class="text-lg">问卷总数:</div>
          <div>{{ props.data?.total || 0 }}</div>
        </div>
      </dv-decoration-11>
      <dv-decoration-11 :reverse="true" style="width: 300px; height: 60px">
        <div class="w-full h-full text-lg px-6 flex justify-around items-center">
          <div class="text-lg">今日新增:</div>
          <div>{{ props.data?.todayTotal || 0 }}</div>
        </div>
      </dv-decoration-11>
    </div>
    <div class="w-full h-[calc(100%-60px)]">
      <ChartsMain class="p-5" id="map" :option="option"></ChartsMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartsMain from '@/components/charts/main.vue'
interface Props {
  data?: any
}

const props = withDefaults(defineProps<Props>(), {
  data: [],
})

const option = reactive({
  backgroundColor: '',

  geo: {
    map: 'china',
    aspectScale: 0.9,
    layoutCenter: ['50%', '70%'], //地图位置
    layoutSize: '100%',
    zoom: 1.4, //当前视角的缩放比例
    // roam: true, //是否开启平游或缩放
    scaleLimit: {
      //滚轮缩放的极限控制
      min: 1,
      max: 2,
    },
    label: {
      show: true,
      color: '#000',
      fontSize: 8,
    },
    itemStyle: {
      normal: {
        areaColor: 'rgba(17, 75, 94, 1)',
        borderColor: 'rgba(152, 234, 255, 1)',
        borderWidth: 0.5,
        shadowColor: 'rgba(59,202,251,0.5)',
        shadowOffsetX: 6, // 折线的X偏移
        shadowOffsetY: 12, // 折线的Y偏移
        shadowBlur: 6, // 折线模糊
      },
      // 高亮状态下的多边形和标签样式。
    },
    emphasis: {
      disabled: true,
    },
  },
  visualMap: {
    type: 'continuous', // 分段型。
    min: 0, // 最小值。
    // max: 10001, // 最大值
  },
  series: [
    {
      name: '随机数',
      type: 'map',
      geoIndex: 0,
      selectedMode: false,
      data: computed(() => {
        return props.data?.province || []
      }),
    },
  ],
})
</script>

<style scoped></style>
