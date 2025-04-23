<template>
    <main class="h-96 flex justify-center mb-8">
        <TownHallSlider @update-townhall="updateTownHall" />
        <div class="flex flex-col">
            <BaseMap :town="currTownHall" />
        </div>
    </main>
</template>

<script setup lang="ts">
import TownHallSlider from '@/components/TownHallSlider.vue'
import BaseMap from '@/components/BaseMap.vue'
import { ref } from 'vue'

const currTownHall = ref()

/**
 * Update townhall selection (re-renders map)
 * @param town New townhall object
 */
function updateTownHall(town: object): void {
    console.log(town)
    currTownHall.value = town
}
</script>
