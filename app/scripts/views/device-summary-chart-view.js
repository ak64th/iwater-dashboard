const titleOptions = {
    textStyle: {
        color: '#333',
        fontSize: 14,
        align: 'center',
    },
};
const pieSeriesOptions = {
    type: 'pie',
    radius: [30, 40],
    animation: false,
    hoverAnimation: false,
    avoidLabelOverlap: false,
    label: {normal: {show: false}},
};

export function initDeviceSummaryView(root) {
    const container = root.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        title: [
            {
                ...titleOptions,
                text: '总/在线',
                top: 110,
                left: 60,
            },
            {
                ...titleOptions,
                text: '总/故障',
                top: 110,
                left: 220,
            },
            {
                ...titleOptions,
                text: '总/到期',
                top: 110,
                left: 380,
            },
            {
                ...titleOptions,
                text: '总/购机',
                top: 110,
                left: 540,
            },
        ],
        series: [
            {
                ...pieSeriesOptions,
                name: 'online',
                center: [90, 60],
                data: [
                    {
                        name: '在线',
                        value: 176,
                        itemStyle: {
                            normal: {
                                color: '#009ac1',
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '176台\n41.4%',
                                position: 'center',
                            },
                        },
                    },
                    {
                        name: '离线',
                        value: 425,
                        itemStyle: {
                            normal: {
                                color: '#dcdcdc',
                            },
                            emphasis: {
                                color: '#dcdcdc',
                            },
                        },
                    },
                ],
            },
            {
                ...pieSeriesOptions,
                name: 'error',
                center: [250, 60],
                data: [
                    {
                        name: '故障',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: '#79c0b3',
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '0台\n0%',
                                position: 'center',
                            },
                        },
                    },
                    {
                        name: '正常',
                        value: 425,
                        itemStyle: {
                            normal: {
                                color: '#dcdcdc',
                            },
                            emphasis: {
                                color: '#dcdcdc',
                            },
                        },
                    },
                ],
            },
            {
                ...pieSeriesOptions,
                name: 'outage',
                center: [410, 60],
                data: [
                    {
                        name: '过期',
                        value: 2,
                        itemStyle: {
                            normal: {
                                color: '#f7716c',
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '2台\n0.47%',
                                position: 'center',
                            },
                        },
                    },
                    {
                        name: '正常',
                        value: 425,
                        itemStyle: {
                            normal: {
                                color: '#dcdcdc',
                            },
                            emphasis: {
                                color: '#dcdcdc',
                            },
                        },
                    },
                ],
            },
            {
                ...pieSeriesOptions,
                name: 'purchase',
                center: [570, 60],
                data: [
                    {
                        name: '购机',
                        value: 125,
                        itemStyle: {
                            normal: {
                                color: '#f1d300',
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: '125台\n29.4%',
                                position: 'center',
                            },
                        },
                    },
                    {
                        name: '租赁',
                        value: 425,
                        itemStyle: {
                            normal: {
                                color: '#dcdcdc',
                            },
                            emphasis: {
                                color: '#dcdcdc',
                            },
                        },
                    },
                ],
            },
        ],
    });
    return chart;
}
