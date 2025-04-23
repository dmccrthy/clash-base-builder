<template>
    <div class="bg-[var(--alt)] rounded-3xl w-96 h-8/12 mb-5">{{ props.town }}</div>
    <div class="bg-[var(--alt)] rounded-3xl w-96 h-4/12 flex overflow-y-hidden overflow-x-scroll">
        <!-- Populate items for building on map -->
        <div
            class="w-20 h-20 m-5 bg-[var(--main)] rounded-2xl"
            v-for="building in props.town.buildings"
            :key="building.name"
        >
            <img
                :src="`/images/buildings/${building.name}/l${building.level}.webp`"
                :alt="building.name"
            />
            <div class="bg-blue-600 rounded-4xl w-10 h-10 p-2 text-center text-white font-bold">
                {{ building.count }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TownHall } from '@/models/TownHall'

const props = defineProps<{
    town: TownHall
}>()

const buildings = ref(props.town)
</script>
