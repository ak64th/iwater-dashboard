import range from '../range';

export function initPurifiedView(root) {
    const container = root.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        grid: {
            left: 50,
            bottom: 20,
            width: 440,
            height: 100,
            containLabel: true,
        },
        xAxis: {
            splitLine: {show: false},
            axisLabel: {
                align: 'middle',
            },
            axisTick: {show: false},
            axisLine: {show: false},
            data: range(12).map((n) => `${n + 1}月`),
        },
        yAxis: {
            splitNumber: 3,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    // hide first split line
                    color: ['rgba(0,0,0,0)'].concat(Array(10).fill('#999')),
                },
            },
            axisLabel: {
                show: true,
                color: '#999',
                formatter: (value, index) => index && `${value / 1000}吨` || '',
            },
            axisTick: {show: false},
            axisLine: {show: false},
        },
        series: [
            {
                type: 'line',
                name: 'service-count',
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#1188ac',
                        width: 1,
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
                                {offset: 1, color: '#fff'},
                                {offset: 0, color: 'rgba(0, 150, 189, 0.43'},
                            ],
                        },
                    },
                },
                data: [133, 280, 312, 345, 422, 432, 445, 424, 545, 511, 523],
            },
        ],
    });
    return chart;
}
