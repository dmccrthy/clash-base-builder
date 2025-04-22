<template>
    <header class="flex w-screen h-32 justify-center items-center">
        <SearchBar />
        <div class="flex flex-col items-center mx-auto">
            <h1 class="text-3xl font-medium border-b-1 border-[var(--font)]">Clash Base Builder</h1>
            <nav class="flex items-center [&>*]:mx-3 [&>*]:text-lg [&>*]:hover:underline">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/builder-base">Builder Base</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
        <ThemeToggle />
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from './SearchBar.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>
