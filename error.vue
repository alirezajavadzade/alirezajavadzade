<template>
    <div>
        <h1>error</h1>
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>
        <NuxtLink to="/">back</NuxtLink>
    </div>
</template>

<script setup>
defineProps(['error'])

</script>

<style scoped></style>