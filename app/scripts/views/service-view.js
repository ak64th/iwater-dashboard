import range from '../range';
import dropImage from '../../images/drop.png';

export function initServiceChart(root) {
    const container = root.querySelector('.service-chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        title: [
            {
                text: '服务类型',
                top: 120,
                left: 65,
                textStyle: {
                    color: '#fffbe5',
                    fontSize: 14,
                    align: 'center',
                },
            },
            {
                text: '服务地区',
                top: 120,
                left: 255,
                textStyle: {
                    color: '#fffbe5',
                    fontSize: 14,
                    align: 'center',
                },
            },
            {
                text: '服务及时性',
                top: 120,
                left: 440,
                textStyle: {
                    color: '#fffbe5',
                    fontSize: 14,
                    align: 'center',
                },
            },
        ],
        legend: [
            {
                name: 'service-type',
                top: 140,
                left: 55,
                width: 120,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5,
                orient: 'horizontal',
                textStyle: {
                    color: '#d0d0d0',
                    fontSize: 12,
                },
                data: ['安装', '换芯', '维修', '其他'],
            },
            {
                name: 'service-region',
                top: 140,
                left: 245,
                width: 120,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5,
                orient: 'horizontal',
                textStyle: {
                    color: '#999',
                    fontSize: 12,
                },
                data: ['鹰潭', '临汾', '上海', '其他'],
            },
            {
                name: 'service-delay',
                top: 140,
                left: 430,
                width: 120,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5,
                orient: 'horizontal',
                textStyle: {
                    color: '#999',
                    fontSize: 12,
                },
                data: ['12小时', '24小时', '36小时', '更多'],
            },
        ],
        graphic: {
            elements: [
                {
                    type: 'image',
                    style: {
                        image: dropImage,
                        width: 18,
                        height: 24,
                    },
                    left: 90,
                    top: 50,
                },
                {
                    type: 'image',
                    style: {
                        image: dropImage,
                        width: 18,
                        height: 24,
                    },
                    left: 280,
                    top: 50,
                },
                {
                    type: 'image',
                    style: {
                        image: dropImage,
                        width: 18,
                        height: 24,
                    },
                    left: 470,
                    top: 50,
                },
            ],
        },
        grid: {
            left: 50,
            bottom: 20,
            width: 500,
            height: 100,
            containLabel: true,
        },
        tooltip: [
            {
                trigger: 'axis',
                show: true,
                formatter: '{b}处理服务单{c}个',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                textStyle: {
                    color: '#47d3e2',
                    fontSize: 10,
                },
            },
        ],
        xAxis: {
            splitLine: {show: false},
            axisLabel: {
                align: 'middle',
                color: '#fff',
            },
            axisLine: {
                lineStyle: {
                    color: '#628686',
                },
                margin: 20,
            },
            axisTick: {show: false},
            data: range(12).map((n) => `${n + 1}月`),
        },
        yAxis: {
            minInterval: 20,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3e5555',
                },
            },
            axisLabel: {
                show: true,
                color: '#fff',
            },
            axisLine: {show: false},
        },
        series: [
            {
                name: 'service-type',
                type: 'pie',
                radius: [40, 50],
                center: [100, 60],
                legendHoverLink: true,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        name: '安装',
                        value: 83,
                        itemStyle: {
                            normal: {
                                color: '#47d3e2',
                            },
                        },
                    },
                    {
                        name: '换芯',
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: '#3b395e',
                            },
                        },
                    },
                    {
                        name: '维修',
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: '#699090',
                            },
                        },
                    },
                    {
                        name: '其他',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: '#265299',
                            },
                        },
                    },
                ],
            },
            {
                name: 'service-region',
                type: 'pie',
                radius: [40, 50],
                center: [290, 60],
                legendHoverLink: true,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        name: '鹰潭',
                        value: 88,
                        itemStyle: {
                            normal: {
                                color: '#47d3e2',
                            },
                        },
                    },
                    {
                        name: '临汾',
                        value: 7,
                        itemStyle: {
                            normal: {
                                color: '#3b395e',
                            },
                        },
                    },
                    {
                        name: '上海',
                        value: 3,
                        itemStyle: {
                            normal: {
                                color: '#699090',
                            },
                        },
                    },
                    {
                        name: '其他',
                        value: 2,
                        itemStyle: {
                            normal: {
                                color: '#265299',
                            },
                        },
                    },
                ],
            },
            {
                name: 'service-delay',
                type: 'pie',
                radius: [40, 50],
                center: [480, 60],
                legendHoverLink: true,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        name: '12小时',
                        value: 23,
                        itemStyle: {
                            normal: {
                                color: '#47d3e2',
                            },
                        },
                    },
                    {
                        name: '24小时',
                        value: 43,
                        itemStyle: {
                            normal: {
                                color: '#3b395e',
                            },
                        },
                    },
                    {
                        name: '36小时',
                        value: 29,
                        itemStyle: {
                            normal: {
                                color: '#699090',
                            },
                        },
                    },
                    {
                        name: '更多',
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#265299',
                            },
                        },
                    },
                ],
            },
            {
                type: 'line',
                name: 'service-count',
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#66a4be',
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#51b5f3',
                    },
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {offset: 0.2, color: '#20665e'},
                                {offset: 0.8, color: 'rgba(32, 102, 94, 0.25'},
                                {offset: 1, color: 'rgba(0, 0, 0, 0)'},
                            ],
                        },
                    },
                },
                data: [],
            },
        ],
    });
    return chart;
}

export function updateServiceView(chart, data) {
    chart.setOption({
        series: {
            name: 'service-count',
            data: data,
        },
    });
}
