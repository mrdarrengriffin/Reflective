<script setup lang="ts">
defineProps<{
    icon: string;
}>()
</script>

<template>
    <i class="icon" v-html="icon"></i>
</template>
<style scoped lang="scss">
    i.icon{
        display: inline-flex;
    }
</style>
