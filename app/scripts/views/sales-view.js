import window from 'global/window';

export function initSalesView(root) {
    let echarts = window.echarts;
    const container = root.querySelector('.sales-chart-container');
    const chart = echarts.init(container);
    chart.setOption({
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
                left: 370,
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
                data: ['ZS-S6', 'ZS-J05W', 'ZS-J05G'],
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
                left: 370,
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
                data: [],
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
                        name: 'ZS-S6',
                        value: 10,
                        itemStyle: {
                            normal: {
                                color: '#3b395e',
                            },
                        },
                    },
                    {
                        name: 'ZS-J05W',
                        value: 200,
                        itemStyle: {
                            normal: {
                                color: '#699090',
                            },
                        },
                    },
                    {
                        name: 'ZS-J05G',
                        value: 215,
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
                z: 3,
                barWidth: 8,
                barMinHeight: 3,
                name: 'sales-channel',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: '#4cbbfe',
                        barBorderRadius: 5,
                    },
                },
                label: {
                    emphasis: {
                        show: true,
                        position: 'right',
                    },
                },
                data: [280, 100, 15, 10, 20],
            },
            {
                type: 'bar',
                z: 2,
                name: 'sales-channel-bg',
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
                data: [300, 300, 300, 300, 300],
                animation: false,
            },
            {
                type: 'bar',
                z: 3,
                barWidth: 8,
                barMinHeight: 3,
                name: 'sales-city',
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#4cbbfe',
                        barBorderRadius: 5,
                    },
                },
                label: {
                    emphasis: {
                        show: true,
                        position: 'right',
                    },
                },
                data: [],
            },
            {
                type: 'bar',
                z: 2,
                name: 'sales-city-bg',
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
                data: [],
                animation: false,
            },
        ],
    });
    return chart;
}

export function updateSalesView(chart, data) {
    const maxValue = Object.values(data['values'])
        .reduce((sum, v) => sum + v);
    chart.setOption({
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
                data: data['cities'],
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
                type: 'bar',
                z: 3,
                barWidth: 8,
                barMinHeight: 3,
                name: 'sales-city',
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#4cbbfe',
                        barBorderRadius: 5,
                    },
                },
                label: {
                    emphasis: {
                        show: true,
                        position: 'right',
                    },
                },
                data: data['values'],
            },
            {
                type: 'bar',
                z: 2,
                name: 'sales-city-bg',
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
                data: new Array(5).fill(maxValue),
                animation: false,
            },
        ],
    });
}

