<template>
    <!-- Add button for each townhall -->
    <aside
        class="bg-[var(--alt)] rounded-2xl w-48 h-full flex flex-col items-center overflow-x-hidden overflow-y-scroll mr-5"
    >
        <TownHallButton v-for="town in Data" :town-hall="town" />
    </aside>
</template>

<script setup lang="ts">
import TownHallButton from './TownHallButton.vue'
import Data from '@/assets/data.json'
</script>
