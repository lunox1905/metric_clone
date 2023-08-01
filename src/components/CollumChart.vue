<script setup lang="ts">
    import { Chart } from 'highcharts-vue';
    const props = defineProps({
        data: {type: Array, required: true}
    })
    const chartOptions = {
    
        chart: {
        type: 'column'
    },
    title: false,
    xAxis: {
        type: 'category',
        labels: {
            autoRotation: [-45, -90],
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Doanh số (Đồng)',
            style: {
                fontWeight: 600,
            }
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        colors: [{
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#FF9933'],
                [1, '#e85912'],
                
            ]
        }],
        colorByPoint: true,
        groupPadding: 0.2,
        data: props.data,
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}
</script>

<template>
    <Chart :options="chartOptions"></Chart>
</template>