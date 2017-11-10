let echarts = window.echarts;

const className = 'customer-chart-container';
const customerChartContainer = document.getElementsByClassName(className)[0];
const customerChart = echarts.init(customerChartContainer);

customerChart.setOption({
    title: [
        {
            text: '年龄比例',
            top: 70,
            left: 45,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '性别比例',
            top: 70,
            left: 175,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '教育程度',
            top: 70,
            left: 305,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '购买方式',
            top: 70,
            left: 435,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
            },
        },
    ],
    legend: [
        {
            name: 'age',
            top: 90,
            left: 35,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['0-25', '25-40', '40-55', '55+'],
        },
        {
            name: 'gender',
            top: 90,
            left: 175,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['男', '女'],
        },
        {
            name: 'education',
            top: 90,
            left: 285,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['高中', '专科', '本科', '研究生以上'],
        },
        {
            name: 'purchase',
            top: 90,
            left: 425,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['线下', '线上'],
        },
    ],
    series: [
        {
            name: 'age',
            type: 'pie',
            radius: [25, 35],
            center: [80, 35],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '0-25',
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '25-40',
                    value: 65,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '40-55',
                    value: 40,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '55+',
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            name: 'gender',
            type: 'pie',
            radius: [25, 35],
            center: [210, 35],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '男',
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '女',
                    value: 65,
                    itemStyle: {
                        normal: {
                            color: '#007eab',
                        },
                    },
                },
            ],
        },
        {
            name: 'education',
            type: 'pie',
            radius: [25, 35],
            center: [340, 35],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '高中',
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '专科',
                    value: 35,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '本科',
                    value: 45,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '研究生以上',
                    value: 20,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            name: 'purchase',
            type: 'pie',
            radius: [25, 35],
            center: [470, 35],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '线下',
                    value: 120,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '线上',
                    value: 35,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
            ],
        },
    ],
});