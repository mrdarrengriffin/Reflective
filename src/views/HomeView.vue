<script setup lang="ts">
import Weather from '@/components/Weather.vue';
import Clock from '@/components/Clock.vue';
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
      </div>
      <div class="column column--right">
        <Weather week-info="temperature" :show-week-info="moreInfo" :temperature="11" temperature-unit="C"></Weather>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.columns {
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;

  max-width: 400px;

  &--right{
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>