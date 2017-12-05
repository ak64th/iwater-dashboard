export function initCustomerView(root) {
    const container = root.querySelector('.customer-chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        title: [
            {
                text: '年龄比例',
                top: 80,
                left: 55,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    align: 'center',
                },
            },
            {
                text: '性别比例',
                top: 80,
                left: 185,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    align: 'center',
                },
            },
            {
                text: '教育程度',
                top: 80,
                left: 315,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    align: 'center',
                },
            },
            {
                text: '购买方式',
                top: 80,
                left: 445,
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
                top: 100,
                left: 45,
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
                top: 100,
                left: 185,
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
                top: 100,
                left: 295,
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
                top: 100,
                left: 435,
                width: 120,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5,
                orient: 'horizontal',
                textStyle: {
                    color: '#d0d0d0',
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
                center: [90, 40],
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
                center: [220, 40],
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
                        value: 65,
                        itemStyle: {
                            normal: {
                                color: '#47d3e2',
                            },
                        },
                    },
                    {
                        name: '女',
                        value: 30,
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
                center: [350, 40],
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
                center: [480, 40],
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
                        value: 3364,
                        itemStyle: {
                            normal: {
                                color: '#47d3e2',
                            },
                        },
                    },
                    {
                        name: '线上',
                        value: 6636,
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
    return chart;
}
