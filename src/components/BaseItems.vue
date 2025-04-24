<template>
    <div
        class="bg-[var(--alt)] rounded-3xl w-[500px] h-4/12 flex overflow-y-hidden overflow-x-scroll"
    >
        <!-- Populate items for building on map -->
        <button
            v-for="building in selected.townhall?.buildings"
            :key="building.name"
            :class="[
                'w-20 h-20 m-5 bg-[var(--main)] rounded-2xl',
                { 'border-2 border-amber-100': building.name === selected.building.name },
            ]"
            @click="selectBuilding(building)"
        >
            <img
                :src="`/images/buildings/${building.name}/l${building.level}.webp`"
                :alt="building.name"
            />
            <div class="bg-blue-600 rounded-4xl w-10 h-10 p-2 text-center text-white font-bold">
                {{ building.count }}
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useTownHallStore } from '@/stores/TownHall'

const selected = useTownHallStore()

/**
 *
 * @param building
 */
function selectBuilding(building: Building): void {
    // Check if currently selected so we can toggle
    if (selected.building.name === building.name) {
        currSelected.value = null
        emit('update-building', null)
    } else {
        currSelected.value = building
        emit('update-building', building)
    }
}
</script>
