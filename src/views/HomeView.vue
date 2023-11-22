<script setup lang="ts">
import Weather from '@/components/Weather.vue';
import Clock from '@/components/Clock.vue';
import EnergyStats from '@/components/EnergyStats.vue';
import Spotify from '@/components/Spotify.vue';

import { ref } from 'vue';

let moreInfo = ref(false);

// if o key pressed, toggle moreInfo
window.addEventListener('keydown', (e) => {
  if (e.key === 'o') {
    moreInfo.value = !moreInfo.value;
  }
});
</script>

<template>
  <main>
    <div class="columns">
      <div class="column">
        <Clock :show-seconds="moreInfo" blink-separator :show-sun-times="moreInfo" :show-date="moreInfo" />
        <EnergyStats />
      </div>
      <div class="column column--right">
        <Weather week-info="temperature" :show-week-info="moreInfo" :temperature="11" temperature-unit="C"></Weather>
        <Spotify />
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
main{
  height: 100%;
}
.columns {
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
}

.column {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 3rem;

  max-width: 400px;

  &--right{

    align-items: flex-end;
  }
}
</style>