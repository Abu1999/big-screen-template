<template>
  <div class="w-full h-full">
    <div class="w-full h-[80px]">
      <component :is="componentList[props.titleName]"></component>
    </div>
    <dv-loading v-if="props.loading">
      <div color-white>Loading...</div>
    </dv-loading>
    <component v-else :is="props.borderName" style="width: 100%; height: calc(100% - 80px)">
      <component :is="componentList[props.layoutName]">
        <template v-slot:[key] v-for="(value, key) in $slots">
          <slot :name="key"></slot>
        </template>
      </component>
    </component>
  </div>
</template>

<script setup lang="ts">
import Title from './components/title/Title.vue'
import LayoutA from './components/layout/LayoutA.vue'
import LayoutB from './components/layout/LayoutB.vue'
import LayoutC from './components/layout/LayoutC.vue'
import LayoutD from './components/layout/LayoutD.vue'
import LayoutE from './components/layout/LayoutE.vue'

const componentList: any = {
  LayoutA: LayoutA,
  LayoutB: LayoutB,
  LayoutC: LayoutC,
  LayoutD: LayoutD,
  LayoutE: LayoutE,
  Title: Title,
}

interface Props {
  loading?: boolean
  layoutName: string
  borderName: string
  titleName: string
}

//默认配置
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  layoutName: 'LayoutA',
  borderName: 'dv-border-box1',
  titleName: 'Title',
})
</script>

<style scoped></style>
