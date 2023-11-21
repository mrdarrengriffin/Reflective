<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useMotionStore } from './stores/home-assistant/motion';
import { ref, watch } from 'vue';
const motionStore = useMotionStore();

//if motionStore.state < 50, set opacity to 0.5 else 1
let op = ref(1);
watch(() => motionStore.state, (newVal) => {
  if (parseInt(newVal) < 50) {
    op.value = 0.35;
  } else {
    op.value = 1;
  }
});

setInterval(() => {
    motionStore.state = Math.floor(Math.random() * 100).toString();
}, 5000);


</script>

<template>
  {{ motionStore.state }}
  <div class="wrapper" :style="'opacity:'+op">
    <RouterView/>
  </div>
</template>