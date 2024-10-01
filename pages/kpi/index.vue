<template>

    <Head>
        <Meta name="description" content="`پروژه کسب و کار اجرا شده توسط علیرضا جوادزاده`">
        </Meta>
    </Head>
    <div class="main-section">
        <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">KPI</h1>
                </div>
            </v-col>
        </v-row>
        <v-row>
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
        </v-row>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
    layout: 'default'
});


const cpl1 = ref();
const cpl2 = ref();
const cplResult = ref(null);
const valid = ref(false);
const form = ref(null)

const rules = [
    v => !!v || 'پر کردن این قسمت اجباری میباشد',
]

const submitForm = () => {
    if (form.value.validate()) {
        cplResult.value = cpl1.value / cpl2.value
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