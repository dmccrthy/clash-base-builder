<template>
    <!-- Add button for each townhall -->
    <aside
        class="bg-[var(--alt)] rounded-2xl w-44 h-full flex flex-col items-center overflow-x-hidden overflow-y-scroll mr-5"
    >
        <!-- Create button for each TH -->
        <button
            v-for="town in Data"
            :key="town.level"
            :class="[
                'flex flex-col items-center my-4 p-4 rounded-2xl hover:cursor-pointer hover:bg-[var(--main)]',
                { 'bg-[var(--main)]': town.level === selected.townhall.level },
            ]"
            :id="'townhall-' + town.level"
            @click="selectTownHall(town.level)"
        >
            <img
                :src="'/images/town_halls/' + town.image"
                :alt="'Townhall ' + town.level"
                class="w-24 h-24"
            />
            <h3 class="text-lg font-medium mt-5">Townhall {{ town.level }}</h3>
        </button>
    </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTownHallStore } from '@/stores/TownHall'
import Data from '@/assets/data.json'

const selected = useTownHallStore()

// On pageload set default townhall if present
onMounted(() => {
    if (localStorage.getItem('town-hall')) {
        selectTownHall(Number(localStorage.getItem('town-hall')))
    }
})

/**
 * Update/emit townhall object
 * @param town Townhall object to set
 */
function selectTownHall(town: number): void {
    selected.setTownHall(town)
    localStorage.setItem('town-hall', `${town}`)
}
</script>
