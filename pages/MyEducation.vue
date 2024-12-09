<template>
    <div class="main-section">
        <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">تحصیلات من</h1>
                </div>
            </v-col>
        </v-row>
        <Comingsoon />
    </div>
</template>

<script setup>

useHead({
    title: 'علیرضا جوادزاده | تحصیلات ',
    meta: [
        { name: 'title', content: 'تحصیلات علیرضا جوادزاده | از عمران تا برنامه‌نویسی در مهندسی سازه' },
        { name: 'description', content: 'تحصیلات علیرضا جوادزاده شامل رشته عمران در دانشگاه آزاد کرج و ارشد سازه در دانشگاه آزاد اسلامشهر است. او تخصص ویژه‌ای در برنامه‌نویسی برای مهندسی سازه و هوش مصنوعی در عمران دارد' },
    ],
})


</script>

<style scoped>
.main-section {
    padding: 16px;
    height: 100%;
    min-height: 90dvh;
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
</style>