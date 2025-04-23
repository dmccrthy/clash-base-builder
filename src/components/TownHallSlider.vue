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
                { selected: town.level === currTownHall },
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
import { onMounted, ref } from 'vue'
import Data from '@/assets/data.json'

const currTownHall = ref(1)
const emit = defineEmits(['update-townhall'])

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
    currTownHall.value = town
    localStorage.setItem('town-hall', `${town}`)

    // Here we emit the JSON object for the townhall for use on the map
    emit('update-townhall', Data[town - 1])
}
</script>

<style lang="css">
.selected {
    background-color: var(--main);
}
</style>
