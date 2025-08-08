<template>
  <div class="w-full h-full flex p-5">
    <div class="w-4/12 h-full">
      <div class="w-full h-1/2">
        <slot name="lt"></slot>
      </div>
      <div class="w-full h-1/2">
        <slot name="lb"></slot>
      </div>
    </div>
    <div class="w-4/12 h-full">
      <div class="w-full h-1/2">
        <slot name="mt"></slot>
      </div>
      <div class="w-full h-1/2">
        <slot name="mb"></slot>
      </div>
    </div>
    <div class="w-4/12 h-full">
      <div class="w-full h-1/2">
        <slot name="rt"></slot>
      </div>
      <div class="w-full h-1/2">
        <slot name="rb"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
