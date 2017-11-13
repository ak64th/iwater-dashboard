import window from 'global/window';
import document from 'global/document';

let echarts = window.echarts;

const salesChartContainer = document.getElementsByClassName(
    'sales-chart-container'
)[0];
const salesChart = echarts.init(salesChartContainer);

salesChart.setOption({
    title: [
        {
            text: '销售占比',
            top: 0,
            left: 25,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '渠道销量',
            top: 0,
            left: 145,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '城市分布',
            top: 0,
            left: 380,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
    ],
    legend: [
        {
            name: 'service-type',
            top: 100,
            left: 35,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 10,
            orient: 'vertical',
            textStyle: {
                color: '#d0d0d0',
                fontSize: 12,
            },
            data: ['设备1', '设备2', '设备3'],
        },
    ],
    grid: [
        {
            top: 25,
            left: 135,
            width: 200,
            height: 150,
            containLabel: true,
        },
        {
            top: 25,
            left: 380,
            width: 200,
            height: 150,
            containLabel: true,
        },
    ],
    xAxis: [
        {
            show: false,
            type: 'value',
            splitLine: {show: false},
        },
        {
            gridIndex: 1,
            show: false,
            type: 'value',
            splitLine: {show: false},
        },
    ],
    yAxis: [
        {
            type: 'category',
            data: ['直营', '经销商', '银行', '联通', '电信'],
            axisLabel: {
                color: '#fff',
                align: 'right',
            },
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
        },
        {
            gridIndex: 1,
            type: 'category',
            data: ['鹰潭', '菏泽', '余江', '杭州', '淮南'],
            axisLabel: {
                color: '#fff',
                align: 'right',
            },
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
        },
    ],
    series: [
        {
            name: 'sales-type',
            type: 'pie',
            radius: 30,
            center: [60, 60],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '设备1',
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '设备2',
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '设备3',
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            type: 'bar',
            barWidth: 8,
            name: 'sales-channel',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#4cbbfe',
                    barBorderRadius: 5,
                },
            },
            data: [12, 43, 22, 15, 23],
        },
        {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderWidth: 1,
                    borderColor: '#4cbbfe',
                    barBorderRadius: 6,
                    shadowColor: '#000',
                    shadowBlur: 3,
                },
            },
            barGap: '-110%',
            data: [50, 50, 50, 50, 50],
            animation: false,
        },
        {
            type: 'bar',
            barWidth: 8,
            name: 'sales-city',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#4cbbfe',
                    barBorderRadius: 5,
                },
            },
            data: [42, 33, 12, 25, 43],
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderWidth: 1,
                    borderColor: '#4cbbfe',
                    barBorderRadius: 6,
                    shadowColor: '#000',
                    shadowBlur: 3,
                },
            },
            barGap: '-110%',
            data: [50, 50, 50, 50, 50],
            animation: false,
        },
    ],
});
