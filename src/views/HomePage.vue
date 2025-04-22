<template>
    <main class="h-96 flex justify-center mb-8">
        <TownHallSlider />
        <div class="flex flex-col">
            <BaseMap />
        </div>
    </main>
</template>

<script setup lang="ts">
import TownHallSlider from '@/components/TownHallSlider.vue'
import BaseMap from '@/components/BaseMap.vue'
</script>
