<template>
  <div class="w-full h-full flex p-5">
    <div class="w-3/12 h-full">
      <div class="w-full h-1/3">
        <slot name="lt"></slot>
      </div>
      <div class="w-full h-1/3">
        <slot name="lm"></slot>
      </div>
      <div class="w-full h-1/3">
        <slot name="lb"></slot>
      </div>
    </div>
    <div class="w-6/12 h-full">
      <div class="w-full h-2/3">
        <slot name="mt"></slot>
      </div>
      <div class="w-full h-1/3">
        <slot name="mb"></slot>
      </div>
    </div>
    <div class="w-3/12 h-full">
      <div class="w-full h-1/3">
        <slot name="rt"></slot>
      </div>
      <div class="w-full h-1/3">
        <slot name="rm"></slot>
      </div>
      <div class="w-full h-1/3">
        <slot name="rb"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
