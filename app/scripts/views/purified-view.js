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
                interval: 0,
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
        tooltip: [
            {
                trigger: 'axis',
                show: true,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                textStyle: {
                    color: '#47d3e2',
                    fontSize: 10,
                },
                formatter: (params) => {
                    const {name, value} = params[0];
                    return `${name}净水${value / 1000}吨`;
                },
            },
        ],
        series: [
            {
                type: 'line',
                name: 'purified',
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
                data: [],
            },
        ],
    });
    return {chart};
}

export function updatePurifiedView(view, data) {
    const {chart} = view;
    chart.setOption({
        series: [
            {
                name: 'purified',
                data: data,
            },
        ],
    });
}
