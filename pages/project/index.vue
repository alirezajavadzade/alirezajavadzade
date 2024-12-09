<template>
    <div class="main-section">
        <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">پروژه های من</h1>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="loading == false" v-for="(project, i) in items" :key="i" cols="12" sm="6" lg="4" class="my-4">
                <v-card class="mx-auto a-card" max-width="344" elevation="1">
                    <NuxtLink :to="`/project/${project.page}`" class="card-link">
                        <v-img height="200px" :src="`/images/${project.image}`" class="card-image"></v-img>
                        <v-card-title class="card-title">
                            {{ project.title }}
                        </v-card-title>

                        <v-card-subtitle class="card-subtitle">
                            اجرا شده توسط : {{ project.company }}
                        </v-card-subtitle>
                    </NuxtLink>
                </v-card>
            </v-col>

            <v-col cols="12" v-else>
                <div class="loader-box">
                    <loader />
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

definePageMeta({
    layout: 'default'
});

useHead({
    title: 'علیرضا جوادزاده | پروژه های it ',
    meta: [
        { name: 'title', content: 'پروژه‌های علیرضا جوادزاده | مهندس عمران، برنامه‌نویس و طراح سایت' },
        { name: 'description', content: 'آشنایی با پروژه‌های متنوع علیرضا جوادزاده، مهندس عمران و برنامه‌نویس متخصص در طراحی سایت و اپلیکیشن‌های اندروید و iOS، سئو و فریم‌ورک‌های مدرن.' },
    ],
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
        }, 1000);

    } catch (error) {
        if (retryCount < maxRetries) {
            retryCount.value++;
            // setTimeout(FakeData, 5000);
            console.log('fake data')
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

<style scoped>
.main-section {
    padding: 16px;
    height: 100%;
}

.a-title-box {
    display: flex;
    justify-content: flex-end;
}

.a-title {
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
    display: inline;
    font-weight: normal;
}

.a-card {
    border-radius: 6px;
}

.card-link {
    text-decoration: none;
}

.card-image {
    margin: 1rem;
    border-radius: 8px;
}

.card-title {
    text-align: end;
    color: #000;
    font-size: 16px;
    font-weight: normal;
    height: 96px;
}

.card-title:hover {
    color: #565656;
}

.card-subtitle {
    color: #5b5b5b;
    padding: 1rem;
    text-align: start;
}

.loader-box {
    height: 100%;
    min-height: 90dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>