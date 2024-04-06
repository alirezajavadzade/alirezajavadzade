<template>
    <Head>
        <Meta name="description" :content="`پروژه ی ${projectData.title} اجرا شده توسط علیرضا جوادزاده`">
        </Meta>
    </Head>
    <div>
        <v-container v-if="loading == false">
            <v-row>
                <v-col cols="12" lg="5" class="image-col order-1 order-lg-0">
                    <v-card width="fit-content" class="image-box">
                        <NuxtLink :to="`/images/${projectData.slider}`" target="blank">
                            <img aspect-ratio="16/9" height="600px" :src="`/images/${projectData.slider}`"
                                :alt="projectData.title">
                        </NuxtLink>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="7" class="order-0 order-lg-1">
                    <div class="content-box">
                        <h1>{{ projectData.title }}</h1>
                        <h2>{{ projectData.subtitle }}</h2>
                        <div class="badge-box">
                            <span class="project-badge" v-for="(item, i) in projectData.technologis" :key="i">{{ item
                                }}</span>
                        </div>
                        <div class="desc-box">
                            <p>{{ projectData.description1 }}</p>
                            <p>{{ projectData.description2 }}</p>
                            <p>{{ projectData.description3 }}</p>
                            <p>{{ projectData.description4 }}</p>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card elevation="0" class="tab-card">
                        <v-tabs v-model="tab">
                            <v-tab value="one" class="tab-title">توضیحات فنی تکمیلی</v-tab>
                            <v-tab value="two" class="tab-title">لینک های مرتبط</v-tab>
                            <v-tab value="three" class="tab-title">همکاران</v-tab>
                        </v-tabs>

                        <v-card-text>
                            <v-window v-model="tab" class="tab-item-box">
                                <v-window-item value="one" class="tab-item">
                                    {{ projectData.extraInfo }}
                                </v-window-item>

                                <v-window-item value="two" class="tab-item link-box">
                                    <NuxtLink v-for="(item, i) in projectData.links" :to="item.url" target="blank"
                                        class="link"> <v-icon :icon="item.icon"></v-icon> {{ item.name }} : {{ item.link
                                        }}</NuxtLink>
                                </v-window-item>

                                <v-window-item value="three" class="tab-item">
                                    این قسمت به زودی تکمیل میشود
                                </v-window-item>
                            </v-window>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-else>
            <v-row>
                <v-col cols="12">
                    <div class="loader-box">
                        <loader />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
});


const items = ref([]);
const projectData = ref([]);
var loading = ref(false);
const tab = ref(null);
const route = useRoute();

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
            const response = await fetch('/data/project.json', { signal });
            items.value = await response.json();
            let filteredProject = items.value.find(project => project.id == route.params.project);
            projectData.value = filteredProject;
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

<style scoped>
.image-col {
    display: flex;
    justify-content: center;
}

.image-box {
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    height: 100%;
}

.content-box h1 {
    text-align: right;
    font-weight: normal;
    margin: 1rem 0;
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
    display: inline;
}

.content-box h2 {
    font-weight: 300;
    font-size: 18px;
    margin: 1rem 0;
    text-align: right;
}

.badge-box {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.project-badge {
    font-size: 12px;
    color: #fff;
    background-color: rgb(70, 70, 70);
    padding: 0.3rem 0.8rem;
    margin: 0.3rem;
    border-radius: 8px;
}

.desc-box {
    margin: 1rem 0;
}

.desc-box p {
    font-size: 15px;
    font-weight: 300;
    text-align: right;
    line-height: 2rem;
}

.tab-card {
    background-color: transparent;
    direction: rtl;
}

@media(max-width:768px) {
    .tab-title {
        font-size: 14px;
        letter-spacing: -2px;
    }
}

.tab-title {
    font-size: 17px;
    letter-spacing: -2px;
}

.tab-item-box {
    min-height: 5rem
}

.tab-item {
    margin: 1rem 0;
    font-weight: 300;
    font-size: 15px
}

.link-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.link {
    text-decoration: none;
    padding: 0.5rem;
    color: #000;
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