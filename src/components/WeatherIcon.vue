<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
    <img :src="`https://github.com/mrdarrengriffin/google-weather-icons/raw/main/v4/${icon}.svg`" alt="Weather icon">
</template>
<style scoped lang="scss">
img {
  width: 64px;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
}
</style>
