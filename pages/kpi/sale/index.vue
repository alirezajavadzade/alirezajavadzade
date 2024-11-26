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
                        <NuxtLink :to="`/kpi/sale/${kpi.route}`" class="kpi-link">
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
import icon17 from "~/assets/icons/marketing17.svg"
import icon18 from "~/assets/icons/marketing18.svg"
import icon19 from "~/assets/icons/marketing19.svg"
import icon20 from "~/assets/icons/marketing20.svg"
import icon21 from "~/assets/icons/marketing21.svg"
import icon22 from "~/assets/icons/marketing22.svg"
import icon23 from "~/assets/icons/marketing23.svg"
import icon24 from "~/assets/icons/marketing24.svg"
import icon25 from "~/assets/icons/marketing25.svg"
import icon26 from "~/assets/icons/marketing26.svg"
import icon27 from "~/assets/icons/marketing27.svg"
import icon28 from "~/assets/icons/marketing28.svg"


definePageMeta({
    layout: 'kpiLayout'
});

const marketingList = ref([
    {
        name: "CAC",
        description: "مشتریان در حال ارتباط",
        route: "cac",
        icon: icon17,
    },
    {
        name: "NFT",
        description: "تعداد تراکنش های فروش",
        route: "nft",
        icon: icon18,
    },
    {
        name: "AOV",
        description: "میانگین ارزش سفارش",
        route: "aov",
        icon: icon19,
    },
    {
        name: "GP",
        description: "سود ناخالص",
        route: "gp",
        icon: icon20,
    },
    {
        name: "TI",
        description: "مجموع درآمد",
        route: "ti",
        icon: icon21,
    },
    {
        name: "NP",
        description: "سود خالص",
        route: "np",
        icon: icon22,
    },
    {
        name: "NASC",
        description: "تعداد سبد خرید رها شده",
        route: "nasc",
        icon: icon23,
    },
    {
        name: "PONC",
        description: "درصد سفارشات مشتریان جدید",
        route: "ponc",
        icon: icon24,
    },
    {
        name: "SCR",
        description: "نرخ تبدیل سبد خرید",
        route: "scr",
        icon: icon25,
    },
    {
        name: "PRCO",
        description: "درصد سفارشات مشتریان بازگشتی",
        route: "prco",
        icon: icon26,
    },
    {
        name: "SP",
        description: "تناسب محصولات",
        route: "sp",
        icon: icon27,
    },
    {
        name: "ANC",
        description: "تعداد مشتریان جدید بدست آمده",
        route: "anc",
        icon: icon28,
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