<template>
  <div class="w-full h-full p-5">
    <div class="w-full h-1/2 flex">
      <div class="w-1/3 h-full">
        <slot name="tl"></slot>
      </div>
      <div class="w-1/3 h-full">
        <slot name="tm"></slot>
      </div>
      <div class="w-1/3 h-full">
        <slot name="tr"></slot>
      </div>
    </div>
    <div class="w-full h-1/2 flex">
      <div class="w-1/2 h-full">
        <slot name="bl"></slot>
      </div>
      <div class="w-1/2 h-full">
        <slot name="br"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
