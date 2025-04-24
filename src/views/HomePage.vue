<template v-for="i in 2">
    <main class="h-[70vh] max-h-[600px] flex justify-center mb-12">
        <TownHallSlider />
        <div class="flex flex-col">
            <BaseMap />
            <BaseItems />
        </div>
    </main>
</template>

<script setup lang="ts">
import TownHallSlider from '@/components/TownHallSlider.vue'
import BaseMap from '@/components/BaseMap.vue'
import BaseItems from '@/components/BaseItems.vue'
</script>
