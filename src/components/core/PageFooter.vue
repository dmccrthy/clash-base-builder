<template>
    <footer class="w-screen flex flex-col items-center justify-center mb-8 [&>*]:py-1">
        <p class="font-semibold">
            Copyright © {{ new Date().getFullYear() }}
            <a href="https://dan.sbs" class="underline">Dan McCarthy</a>
        </p>
        <p class="font-medium flex items-center">
            <IconStar class="stroke-0 fill-amber-300" />
            Star this project on
            <a href="https://github.com/dmccrthy/clash-base-builder" class="underline">github</a>
        </p>
    </footer>
</template>

<script setup lang="ts">
import IconStar from '../icons/IconStar.vue'
</script>
