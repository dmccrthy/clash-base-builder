<template>
    <img :src="imageUrl" />
</template>

<script setup lang="ts">
const props = defineProps({
    townHall: Object,
})

const imageUrl: string = `/images/town_halls/${props.townHall?.image}`
</script>
