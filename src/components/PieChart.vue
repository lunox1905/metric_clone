<script setup lang="ts">
    import { Chart } from 'highcharts-vue';
    import type { DataPieChart } from '@/types'
    interface Props {
        data: DataPieChart
    }

    const props = defineProps<Props>();
    const chartOptions = {
        chart: {
            type: 'pie'
        },
        title: false,

        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },

        plotOptions: {
            series: {
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                borderRadius: 0,
                innerSize: '52%',
                data: [
                    {
                        name: 'Chrome',
                        y: 61.04,
                        drilldown: 'Chrome'
                    },
                    {
                        name: 'Safari',
                        y: 9.47,
                        drilldown: 'Safari'
                    },
                    {
                        name: 'Edge',
                        y: 9.32,
                        drilldown: 'Edge'
                    },
                    {
                        name: 'Firefox',
                        y: 8.15,
                        drilldown: 'Firefox'
                    },
                    {
                        name: 'Other',
                        y: 11.02,
                        drilldown: null
                    }
                ]
            }
        ]
    }

</script>


<template>
    <Chart :options="chartOptions"></Chart>
</template>