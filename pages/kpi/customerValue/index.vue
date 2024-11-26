<template>
    <div>
        <v-container>
            <v-row>
                <v-alert variant="tonal" class="my-7">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                </v-alert>
            </v-row>
            <v-row>
                <v-col v-for="(kpi, i) in customerValueList" :key="i" cols="12" md="4" class="my-5">
                    <v-card class="mx-auto elevation-4">
                        <NuxtLink :to="`/kpi/customerValue/${kpi.route}`" class="kpi-link">
                            <div class="d-flex flex-row justify-space-between pa-2">
                                <h3 class="blue-grey-darken-3">{{ kpi.name }}</h3>
                                <img :src="kpi.icon" alt="" width="80">
                            </div>

                            <v-card-text class="bg-surface-light pt-4 text-right">
                                {{ kpi.description }}
                            </v-card-text>
                        </NuxtLink>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import icon1 from "~/assets/icons/marketing1.svg"
import icon2 from "~/assets/icons/marketing2.svg"
import icon3 from "~/assets/icons/marketing3.svg"
import icon4 from "~/assets/icons/marketing4.svg"
import icon5 from "~/assets/icons/marketing5.svg"
import icon6 from "~/assets/icons/marketing6.svg"


definePageMeta({
    layout: 'kpiLayout'
});

const customerValueList = ref([
    {
        name: "LTV",
        description: "ارزش طول عمر مشتری",
        route: "ltv",
        icon: icon1,
    },
    {
        name: "APC",
        description: "میانگین درآمد هر مشتری",
        route: "apc",
        icon: icon2,
    },
    {
        name: "NPS",
        description: "امتیاز خالص مروجان",
        route: "nps",
        icon: icon3,
    },
    {
        name: "NPR",
        description: "نرخ خالص ترویج کنندگان",
        route: "npr",
        icon: icon4,
    },
    {
        name: "ATC",
        description: "میانگین زمان حل شکایت",
        route: "atc",
        icon: icon5,
    },
    {
        name: "RR",
        description: "نرخ بازگشت",
        route: "rr",
        icon: icon6,
    },
])


</script>

<style scoped>
.kpi-link {
    text-decoration: none;
    cursor: pointer;
    color: #37474F;
}

.kpi-link h3 {
    padding: 1rem;
}
</style>