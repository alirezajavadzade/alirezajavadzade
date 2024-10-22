<template>
    <div>
        <BarChart :chart-data="chartData" :options="chartOptions" class="chart" />
    </div>
</template>

<script setup>
import { BarChart } from 'vue-chart-3'
import { ref, watch } from 'vue'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend)



const props = defineProps({
    externalData: Object,
})



const chartData = ref({
    labels: ['نرخ کسب و کار شما'],
    datasets: [
        {
            label: 'هزینه به ازای هر سرنخ',
            data: props.externalData.data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1
        },
    ],
})

const chartOptions = ref({
    responsive: true,
    indexAxis: 'y',
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        tooltip: {
            enabled: true,
        },
    },
});


watch(() =>
    props.externalData, (newData) => {
        chartData.value.datasets[0].data = newData.data
    }
)



</script>

<style scoped>
.chart {
    max-height: 10rem;
}
</style>