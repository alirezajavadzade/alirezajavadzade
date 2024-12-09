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
                <v-col v-for="(kpi, i) in marketingList" :key="i" cols="12" md="4" class="my-5">
                    <v-card class="mx-auto elevation-4">
                        <NuxtLink :to="`/kpi/marketing/${kpi.route}`" class="kpi-link">
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
import icon7 from "~/assets/icons/marketing7.svg"
import icon8 from "~/assets/icons/marketing8.svg"
import icon9 from "~/assets/icons/marketing9.svg"
import icon10 from "~/assets/icons/marketing10.svg"
import icon11 from "~/assets/icons/marketing11.svg"
import icon12 from "~/assets/icons/marketing12.svg"
import icon13 from "~/assets/icons/marketing13.svg"
import icon14 from "~/assets/icons/marketing14.svg"
import icon15 from "~/assets/icons/marketing15.svg"
import icon16 from "~/assets/icons/marketing16.svg"


definePageMeta({
    layout: 'kpiLayout'
});

const marketingList = ref([
    // {
    //     name: "CPL",
    //     description: "ارزش طول عمر مشتری",
    //     route: "cpl",
    //     icon: icon7,
    // },
    {
        name: "CPA",
        description: "میانگین درآمد هر مشتری",
        route: "cpa",
        icon: icon8,
    },
    {
        name: "CAC",
        description: "امتیاز خالص مروجان",
        route: "cac",
        icon: icon9,
    },
    {
        name: "LQ",
        description: "نرخ خالص ترویج کنندگان",
        route: "lq",
        icon: icon10,
    },
    {
        name: "CRR",
        description: "میانگین زمان حل شکایت",
        route: "crr",
        icon: icon11,
    },
    {
        name: "RFAC",
        description: "بازگشت از هزینه تبلیغات",
        route: "rfac",
        icon: icon12,
    },
    {
        name: "VPP",
        description: "بازدید از صفحات محصول",
        route: "vpp",
        icon: icon13,
    },
    {
        name: "BPP",
        description: "وبلاگ به صفحه محصول",
        route: "bpp",
        icon: icon14,
    },
    {
        name: "ACR",
        description: "نرخ اضافه کردن به سبد خرید",
        route: "acr",
        icon: icon15,
    },
    {
        name: "STR",
        description: "نرخ ترافیک اجتماعی",
        route: "str",
        icon: icon16,
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