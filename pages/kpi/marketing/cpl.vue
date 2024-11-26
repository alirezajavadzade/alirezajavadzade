<template>

    <Head>
        <Meta name="description" content="`پروژه کسب و کار اجرا شده توسط علیرضا جوادزاده`">
        </Meta>
    </Head>
    <v-row>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="my-5">
            <h1 class="mt-9">محاسبه هزینه به ازای هر سرنخ</h1>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <v-text-field v-model="cpl1" class="mt-3" :rules="rules" label="تعداد سرنخ های تولید شده"
                    variant="outlined" required></v-text-field>
                <v-text-field v-model="cpl2" class="mt-3" :rules="rules" label="مجموع هزینه های بازاریابی"
                    variant="outlined" required></v-text-field>
                <v-btn :disabled="!valid" class="mt-2 submit-btn blue-grey-lighten-5" type="submit" size="large"
                    block>محاسبه</v-btn>
                <v-alert v-if="cplResult !== null" title="نتیجه تحلیل" class="my-10 blue-grey-lighten-5">هزینه به ازای
                    هر سرنخ کسب و کار شما {{
                        cplResult }} است</v-alert>
            </v-form>

            <div v-show="analysisTab">
                <v-card>
                    <v-tabs v-model="tab" bg-color="blue-grey-lighten-5">
                        <v-tab value="one">آنالیز</v-tab>
                        <v-tab value="two">توضیحات</v-tab>
                        <v-tab value="three">توصیه کارشناس</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <BarChart :externalData="chartData" />
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                    خلاقی، و
                                    فرهنگ</p>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                <P>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                                    شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                    خلاقی، و
                                    فرهنگ
                                </P>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </div>

        </v-col>
        <v-col cols="12" md="3"></v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BarChart from '~/components/BarChart.vue'

definePageMeta({
    layout: 'kpiLayout'
});



const cpl1 = ref();
const cpl2 = ref();
const cplResult = ref(null);
const valid = ref(false);
const form = ref(null);
const analysisTab = ref(false);
const tab = ref(null)
const chartData = ref({
    data: [],
});


const rules = [
    v => !!v || 'پر کردن این قسمت اجباری میباشد',
]

const submitForm = () => {
    if (form.value.validate()) {
        analysisTab.value = true;
        cplResult.value = cpl1.value / cpl2.value;
        chartData.value = {
            data: [cplResult.value, 1]
        },

            console.log(chartData.value)
    } else {
        alert('فرم به درستی پر نشده است')
    }
}



onMounted(() => {

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

.step-box {
    min-height: 100%;
    direction: rtl;
}

.submit-btn {
    background-color: #546E7A;
    color: #fff;
}
</style>