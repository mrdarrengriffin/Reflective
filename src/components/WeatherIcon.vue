<script setup lang="ts">
defineProps<{
  icon?: string;
}>()
</script>

<template>
    <img class="weather-icon" :src="`https://github.com/mrdarrengriffin/google-weather-icons/raw/main/v4/${icon}.svg`" alt="Weather icon">
</template>
<style scoped lang="scss">
img {
  width: 64px;
  height: 64px;
  aspect-ratio: 1/1;
  display: flex;
}
</style>
