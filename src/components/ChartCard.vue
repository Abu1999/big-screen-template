<template>
  <div class="w-full h-full p-2">
    <div class="w-ful h-full">
      <component :is="props.borderName ? props.borderName : $borderName" :title="props?.title">
        <div class="w-full h-full">
          <slot></slot>
        </div>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    borderName?: string
    title?: string
  }>(),
  {},
)
</script>

<style scoped></style>
