<template>
    <!-- Outer container holds the inner map -->
    <div
        class="bg-[var(--alt)] rounded-3xl w-[500px] h-8/12 mb-5 overflow-hidden cursor-grab"
        @mousedown="startDrag"
    >
        <div
            class="flex flex-wrap relative w-40 h-96"
            :style="{ top: position.y + 'px', left: position.x + 'px' }"
        >
            <div v-for="i in 100" :key="i" class="w-5 h-5 bg-green-600"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Current pos of map, starts at (0, 0)
const position = ref({ x: 0, y: 0 })
let offset = { x: 0, y: 0 }

const startDrag = (event) => {
    offset = {
        x: event.clientX - position.value.x,
        y: event.clientY - position.value.y,
    }
    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', stopDrag)
}

const onDrag = (event) => {
    if (event.clientX - offset.x > 0) {
        position.value.x = event.clientX - offset.x
    }

    if (event.clienty - offset.y < 0) {
        position.value.y = event.clientY - offset.y
    }
}

const stopDrag = () => {
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', stopDrag)
}
</script>
