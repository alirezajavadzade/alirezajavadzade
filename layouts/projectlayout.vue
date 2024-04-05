<template>
    <div>
        <v-layout>
            <v-app-bar elevation="1" class="app-bar">
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="nav-icon"></v-app-bar-nav-icon>

                <div class="nav-item-box">
                    <NuxtLink :to="item.router" v-for="(item, i) in items" :key="i" class="nav-item">{{ item.text }}
                    </NuxtLink>
                </div>

            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="right" temporary class="navigation-drawer">
                <v-list nav class="sidebar">
                    <v-list-item v-for="(item, i) in items" :key="i" :value="item" class="sidebar-item">
                        <NuxtLink :to="item.router" class="sidebar-item-link">{{ item.text }}</NuxtLink>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const drawer = ref(false);
const group = ref(null);
const items = ref([
    { router: '/', text: 'صفحه اصلی' },
    { router: '/project', text: 'پروژه های من' },
    { router: '/MyEducation', text: 'تحصیلات من' },
    { router: '/AboutMe', text: 'درباره من' },
]);

watch(group, () => {
    drawer.value = false;
});
</script>

<style scoped>
.app-bar {
    direction: rtl;
}

@media(max-width:767px) {
    .nav-item-box {
        display: none !important;
    }
}

@media(min-width:767px) {
    .nav-icon {
        display: none;
    }
}

.nav-item-box {
    display: flex;
    direction: rtl;
    padding: 0 1rem;
}

.nav-item {
    text-decoration: none;
    color: #000;
    margin: 1rem;
}

.nav-item:hover {
    color: #787878;
}

#sidebar>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;
}

.sidebar-item-link {
    text-decoration: none;
    letter-spacing: 1px;
    color: #767676 !important;
    display: flex;
    justify-content: flex-end;
}

.router-link-exact-active {
    color: black !important;
}
</style>