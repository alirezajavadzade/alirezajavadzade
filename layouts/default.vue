<template>
    <div class="main">
        <v-layout class="header">
            <v-app-bar elevation="1" class="app-bar">
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="nav-icon"></v-app-bar-nav-icon>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="right" temporary class="navigation-drawer">
                <v-list nav class="sidebar">
                    <v-list-item v-for="(item, i) in items" :key="i" :value="item" class="sidebar-item">
                        <NuxtLink :to="item.router" class="sidebar-item-link">{{ item.text }}</NuxtLink>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>

        <v-container class="h-100" fluid>
            <v-row>
                <v-col cols="12" md="9">
                    <slot />
                </v-col>
                <v-col cols="12" md="3" id="sidebar">
                    <div>

                        <v-list nav class="sidebar">
                            <v-list-item class="sidebar-title">
                                <h1>علیرضا جوادزاده</h1>
                            </v-list-item>
                            <v-list-item v-for="(item, i) in items" :key="i" :value="item" class="sidebar-item">
                                <NuxtLink :to="item.router" class="sidebar-item-link">{{ item.text }}</NuxtLink>
                            </v-list-item>
                        </v-list>

                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
const drawer = ref(false);
const group = ref(null);
const items = [
    { router: '/', text: 'صفحه اصلی' },
    { router: '/project', text: 'پروژه های من' },
    { router: '/MyEducation', text: 'تحصیلات من' },
    { router: '/AboutMe', text: 'درباره من' },
];
watch(group, () => {
    drawer.value = false;
});

</script>

<style scoped>
body {
    font-family: "YekanBakhFaNum" !important;
}

.main {
    background-color: #f8f8f8;
    min-height: 100dvh;
    height: 100%;
}

#sidebar {
    background-color: #fff;
    height: 100dvh;
    position: fixed;
    right: 0;
    top: 0;
    direction: rtl;
}

#sidebar>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;
}

.sidebar-title {
    color: black;
    padding-bottom: 2rem !important;
    text-align: start;
}

.sidebar-title h1 {
    font-weight: normal !important;
}

.sidebar-item-link {
    text-decoration: none;
    letter-spacing: 1px;
    color: #767676 !important;
    display: flex;
    justify-content: flex-start;
}

.router-link-exact-active {
    color: black !important;
}

.v-app {
    max-height: 3rem;
}

.app-bar {
    border-bottom: 1px solid #e4e4e4;
    direction: rtl;
}

@media(max-width:961px) {
    #sidebar {
        display: none;
    }

    .main {
        margin-top: 4rem;
    }
}

@media(min-width:961px) {
    .header {
        display: none;
    }
}
</style>