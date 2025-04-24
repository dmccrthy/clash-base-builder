<template>
    <PageHeader />
    <RouterView />
    <PageFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/core/PageHeader.vue'
import PageFooter from './components/core/PageFooter.vue'
</script>
