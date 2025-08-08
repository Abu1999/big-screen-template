<template>
  <div class="w-full h-full flex items-center">
    <div class="flex-1">
      <dv-decoration-8 style="width: 100%; height: 50px" />
    </div>
    <div class="w-[1000px] flex justify-center">
      <div class="w-10/12">
        <div class="text-4xl font-[cursive] text-center relative top-4">可视化大屏标题</div>
        <dv-decoration5 id="mysvg" style="width: 100%; height: 40px" />
      </div>
    </div>
    <div class="flex-1">
      <dv-decoration-8 style="width: 100%; height: 50px" :reverse="true" />
    </div>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  const animateElement = document.querySelectorAll('#mysvg svg animate')
  animateElement.forEach((item: any) => (item.attributes.repeatCount.value = 1))
})
</script>

<style scoped></style>
