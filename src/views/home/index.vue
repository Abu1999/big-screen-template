<template>
  <div class="w-full h-full">
    <div class="w-full h-full">
      <Layout layoutName="LayoutA" :loading="loading">
        <template #lt>
          <LT :data="state?.data1"></LT>
        </template>
        <template #lm>
          <LM :data="state?.data2"></LM>
        </template>
        <template #lb>
          <LB :data="state?.data3"></LB>
        </template>
        <template #mt>
          <MT :data="state?.data4"></MT>
        </template>
        <template #mb> <MB :data="state?.data5"></MB> </template>
        <template #rt> <RT :data="state?.data6"></RT></template>
        <template #rm> <RM :data="state?.data7"></RM> </template>
        <template #rb> <RB :data="state?.data8"></RB> </template>
      </Layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/layout/index.vue'
import LT from './components/LT.vue'
import LM from './components/LM.vue'
import LB from './components/LB.vue'
import RT from './components/RT.vue'
import RM from './components/RM.vue'
import MT from './components/MT.vue'
import MB from './components/MB.vue'
import RB from './components/RB.vue'
import getState from './index'

const loading = ref(true)
const state: any = ref({})

onMounted(() => {
  getState().then((res: any) => {
    state.value = res
    loading.value = false
  })
})
</script>

<style scoped></style>
