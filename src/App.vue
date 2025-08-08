<script setup lang="ts">
import { RouterView } from 'vue-router'
import ScreenMap from '@/components/ScreenMap.vue'
</script>
<template>
  <div
    class="w-full h-[100vh]"
    :style="`color: ${$textColour};background: ${$bg};background-size: cover;background-position: center;`"
  >
    <ScreenMap>
      <RouterView />
    </ScreenMap>
  </div>
</template>

<style scoped></style>
