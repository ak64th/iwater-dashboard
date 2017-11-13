import range from '../range';

let echarts = window.echarts;

const installationChartContainer = document.getElementsByClassName(
    'installation-chart-container'
)[0];

const installationChart = echarts.init(installationChartContainer);
installationChart.setOption({
    grid: {
        left: 20,
        bottom: 20,
        width: 550,
        height: 120,
        containLabel: true,
    },
    xAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#597a7a',
            },
        },
        axisLabel: {
            align: 'middle',
        },
        axisLine: {
            lineStyle: {
                color: '#999',
            },
        },
        axisTick: {show: false},
        data: range(12).map((n) => `${n + 1}月`),
    },
    yAxis: {
        minInterval: 20,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#597a7a',
            },
        },
        axisLabel: {
            show: true,
            color: '#fff',
        },
        axisLine: {show: false},
    },
    series: {
        type: 'line',
        name: 'installation',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        lineStyle: {
            normal: {
                color: '#7cc6e6',
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
                        {offset: 0, color: '#4bb8de'},
                        {offset: 1, color: '#134064'},
                    ],
                },
            },
        },
        data: [13, 25, 24, 37, 44, 35, 17],
    },
});
