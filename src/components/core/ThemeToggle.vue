<template>
    <button class="mr-10" @click="toggleTheme()">
        <IconSun v-show="activeTheme === 'light'" />
        <IconMoon v-show="activeTheme === 'dark'" />
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconSun from '../icons/IconSun.vue'
import IconMoon from '../icons/IconMoon.vue'
import { onMounted } from 'vue'

const activeTheme = ref('light')

/**
 * On pageload we want to set the stored theme
 */
onMounted(() => {
    if (
        localStorage.getItem('user-theme') === 'dark' ||
        (!('user-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        activeTheme.value = 'dark'
        document.documentElement.classList.add('dark')
    }
})

/**
 * Toggle theme from current value to something else
 */
function toggleTheme(): void {
    const theme: string = activeTheme.value === 'light' ? 'dark' : 'light'
    setTheme(theme)
}

/**
 * Set a new theme value for local storage
 * @param theme New Theme value to add
 */
function setTheme(theme: string): void {
    activeTheme.value = theme
    localStorage.setItem('user-theme', theme)
    document.documentElement.classList.toggle('dark')
}
</script>
