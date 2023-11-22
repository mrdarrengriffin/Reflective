<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useMotionStore } from './stores/home-assistant/motion';
import { ref, watch } from 'vue';
const motionStore = useMotionStore();

</script>

<template>
  <div class="wrapper">
    <RouterView/>
  </div>
</template>
<style scoped lang="scss">
.wrapper{
  height: 100%;
}
</style>