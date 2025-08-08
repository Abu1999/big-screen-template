<template>
  <div class="w-full h-full">
    <div class="w-full h-[50px] pb-2">
      <div
        :style="`background: url(${TitleBg});background-size: cover;background-position: center;`"
        class="max-w-[430px] w-full h-[38px] flex items-center pl-[60px]"
      >
        {{ props.title }}
      </div>
    </div>
    <div class="w-full h-[calc(100%-50px)]">
      <dv-border-box7>
        <slot></slot>
      </dv-border-box7>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBg from '@/assets/titlebg/3.png'

interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<style scoped></style>
