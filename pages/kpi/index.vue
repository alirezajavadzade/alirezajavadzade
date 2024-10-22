<template>

    <Head>
        <Meta name="description" content="`پروژه کسب و کار اجرا شده توسط علیرضا جوادزاده`">
        </Meta>
    </Head>
    <!-- <div class="main-section"> -->
    <!-- <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">KPI</h1>
                </div>
            </v-col>
        </v-row> -->

    <!-- <v-row>
            <v-col cols="12">
                <v-stepper alt-labels editable :items="['قدم اول', 'قدم دوم', 'قدم سوم']">
                    <template v-slot:item.1>
                        <v-card class="step-box" title="هزینه به ازای هر سرنخ CPL" flat>
                            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                                <v-text-field v-model="cpl1" class="mt-3" :rules="rules" label="تعداد سرنخ های تولید شده" variant="outlined" required></v-text-field>
                                <v-text-field v-model="cpl2" class="mt-3" :rules="rules" label="مجموع هزینه های بازاریابی" variant="outlined" required></v-text-field>
                                <v-btn :disabled="!valid" class="mt-2 submit-btn" type="submit" size="large" block>محاسبه</v-btn>
                                <p v-if="cplResult !== null" class="mt-2">هزینه به ازای هر سرنخ کسب و کار شما {{
                                    cplResult }} است</p>
                            </v-form>
                        </v-card>
                    </template>

<template v-slot:item.2>
                        <v-card class="step-box" title="CPA هزینه به ازای هر اقدام" flat>...</v-card>
                    </template>

<template v-slot:item.3>
                        <v-card class="step-box" title="CAC هزینه جذب مشتری" flat>...</v-card>
                    </template>
</v-stepper>
</v-col>
</v-row> -->
    <!-- </div> -->
    <v-row>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="6" class="my-5">
            <h1 class="mt-9">محاسبه هزینه به ازای هر سرنخ</h1>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <v-text-field v-model="cpl1" class="mt-3" :rules="rules" label="تعداد سرنخ های تولید شده"
                    variant="outlined" required></v-text-field>
                <v-text-field v-model="cpl2" class="mt-3" :rules="rules" label="مجموع هزینه های بازاریابی"
                    variant="outlined" required></v-text-field>
                <v-btn :disabled="!valid" class="mt-2 submit-btn" type="submit" size="large" block>محاسبه</v-btn>
                <p v-if="cplResult !== null" class="mt-2">هزینه به ازای هر سرنخ کسب و کار شما {{
                    cplResult }} است</p>
            </v-form>

            <div v-show="analysisTab">
                <v-card>
                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab value="one">Item One</v-tab>
                        <v-tab value="two">Item Two</v-tab>
                        <v-tab value="three">Item Three</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                One
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                Two
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                Three
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
                <!-- <BarChart :externalData="chartData" /> -->
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