<script setup lang="ts">
    import { Chart } from 'highcharts-vue';
    const props = defineProps({
        data: {type: Array, required: true}
    })
    const chartOptions = {
    
    chart: {
        type: 'bar',
        height: 600
    },
    title: false,
    xAxis: {
        type: 'category',
        title: {
          text: 'Ngành hàng'
        },
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
            text: 'Population (millions)',
            x: 400,
            y: 10
        },
        labels: {
            overflow: 'justify', // one decimal
            formatter: function():string {
              return (this as any).value > 0 ? (this as any).value + ' tỷ' : (this as any).value;
          }
        },
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
            enabled: true,
            rotation: 0,
            color: 'black',
            align: 'right',
            format: '{point.y:.1f} tỷ', // one decimal
            x: 75, // 10 pixels down from the top
            style: {
                fontWeight: 300,
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}
</script>

<template>
    <Chart :options="chartOptions"></Chart>
</template>