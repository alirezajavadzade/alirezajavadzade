<template>
    <div>
        <h1>{{ $route.params.project }}</h1>
        <h2>{{  }}</h2>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'projectlayout'
})

const items = ref([]);
var loading = ref(false);


const fetchData = async () => {
    loading.value = true;
    let retryCount = ref(0);
    const maxRetries = ref(3);
    try {
        const controller = new AbortController();
        const signal = controller.signal;
        setTimeout(async () => {
            setTimeout(() => {
                controller.abort();
            }, 1000);
            items.value = [];
            const response = await fetch('data/project.json', { signal });
            items.value = await response.json();
            retryCount.value = 0;
            loading.value = false;
        }, 2000);

    } catch (error) {
        if (retryCount < maxRetries) {
            retryCount.value++;
            setTimeout(FakeData, 5000);
        } else {
            console.log('Request failed');
        }
        loading.value = false;
    }
};



onMounted(() => {
    fetchData();
});
</script>

<style scoped></style>