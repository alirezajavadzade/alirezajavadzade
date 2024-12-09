<template>
    <div>
        <v-container>
            <v-row>
                <v-alert variant="tonal" class="my-7 text-right">
                    KPI (شاخص کلیدی عملکرد) در کمپین‌های تبلیغاتی آنلاین به عنوان ابزاری حیاتی برای ارزیابی موفقیت و
                    اثربخشی کمپین‌ها استفاده می‌شود. این شاخص‌ها به کسب‌وکارها کمک می‌کنند تا عملکرد فعالیت‌های تبلیغاتی
                    خود را با معیارهای مشخصی مانند نرخ کلیک (CTR)، نرخ تبدیل، هزینه به ازای هر کلیک (CPC) و بازگشت
                    سرمایه (ROI) بسنجند. انتخاب KPI مناسب بستگی به اهداف کمپین دارد؛ برای مثال، اگر هدف افزایش آگاهی از
                    برند باشد، معیارهایی مثل بازدیدها و تعامل کاربران مهم می‌شوند. با تحلیل دقیق KPIها، می‌توان نقاط قوت
                    و ضعف کمپین را شناسایی کرده و استراتژی‌های تبلیغاتی را بهبود بخشید. این رویکرد باعث می‌شود منابع
                    بهینه‌تر تخصیص داده شوند و نتایج بهتری حاصل شود.
                </v-alert>
            </v-row>
            <v-row>
                <v-col v-for="(kpi, i) in kpiList" :key="i" cols="12" md="4" class="my-5">
                    <v-card class="mx-auto elevation-4 main-card">
                        <NuxtLink :to="`/kpi/${kpi.route}`" class="kpi-link">
                            <div class="d-flex flex-column align-center pa-5">
                                <img :src="kpi.icon" alt="" width="120" class="my-5">
                                <h3 class="blue-grey-darken-3">{{ kpi.name }}</h3>
                            </div>
                        </NuxtLink>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import imgCustomer from "~/assets/icons/marketing37.svg";
import imgSale from "~/assets/icons/marketing36.svg";
import imgMarketing from "~/assets/icons/marketing35.svg";

definePageMeta({
    layout: 'kpiLayout'
});

useHead({
    title: 'علیرضا جوادزاده | صفحه اصلی',
    meta: [
        { name: 'title', content: 'محاسبه KPI | شاخص‌های کلیدی عملکرد کمپین‌های تبلیغاتی و کلیکی' },
        { name: 'description', content: 'راهنمای کامل محاسبه KPI برای کمپین‌های تبلیغاتی، کمپین‌های کلیکی و جشنواره‌ها. با تحلیل شاخص‌های کلیدی عملکرد، موفقیت بازاریابی دیجیتال خود را تضمین کنید.' },
    ],
})



const kpiList = ref([
    {
        name: "ارزش مشتری",
        description: "محاسبه هزینه به ازای هر سرنخ",
        route: "customerValue",
        icon: imgCustomer,
    },
    {
        name: "فروش",
        description: "محاسبه هزینه به ازای هر سرنخ",
        route: "sale",
        icon: imgSale,
    },
    {
        name: "مارکتینگ",
        description: "محاسبه هزینه به ازای هر سرنخ",
        route: "marketing",
        icon: imgMarketing,
    },
])


</script>

<style scoped>
.main-card h3 {
    font-weight: 400;
}

.kpi-link {
    text-decoration: none;
    color: black;
}
</style>