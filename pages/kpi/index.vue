<template>
    <div>
        <v-container>
            <v-row>
                <v-alert variant="tonal" class="my-7 text-right">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
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