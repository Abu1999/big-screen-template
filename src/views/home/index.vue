<template>
  <div class="w-full h-full">
    <div class="w-full h-full">
      <Layout layoutName="LayoutA" :loading="loading">
        <template v-for="item in slotItems" :key="item.slot" v-slot:[item.slot]>
          <component :is="item.component" :data="state?.[item.dataKey]" />
        </template>
      </Layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/layout/index.vue'
import getState from './index'

const loading = ref(true)
const state: any = ref({})

const homeComponentModules = import.meta.glob('./components/*.vue')

function loadHomeComponent(fileName: string) {
  const moduleKey = `./components/${fileName}.vue`
  const loader = homeComponentModules[moduleKey]
  if (!loader) return undefined
  return defineAsyncComponent(loader as never)
}

const slotItems = [
  { slot: 'lt', file: 'LT', dataKey: 'data1' },
  { slot: 'lm', file: 'LM', dataKey: 'data2' },
  { slot: 'lb', file: 'LB', dataKey: 'data3' },
  { slot: 'mt', file: 'MT', dataKey: 'data4' },
  { slot: 'mb', file: 'MB', dataKey: 'data5' },
  { slot: 'rt', file: 'RT', dataKey: 'data6' },
  { slot: 'rm', file: 'RM', dataKey: 'data7' },
  { slot: 'rb', file: 'RB', dataKey: 'data8' },
].map((item) => ({
  ...item,
  component: loadHomeComponent(item.file),
}))

onMounted(() => {
  getState().then((res: any) => {
    state.value = res
    loading.value = false
  })
})
</script>

<style scoped></style>
