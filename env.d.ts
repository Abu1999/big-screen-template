/// <reference types="vite/client" />

declare module 'vue' {
  interface ComponentCustomProperties {
    $bg: string
    $theme: string
    $textColour: string
    $borderName: string
  }
}
