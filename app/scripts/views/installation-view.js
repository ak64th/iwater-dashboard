import window from 'global/window';
import range from '../range';

const tabData = {
    'by-date': {
        xAxis: {
            data: range(12).map((n) => `${n + 1}月`),
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
            data: [2, 3, 5, 47, 73, 51, 29, 67, 58, 61, 29],
        },
    },
    'by-model': {
        xAxis: {
            data: ['ZS-S6', 'ZS-J05W', 'ZS-J05G'],
        },
        series: {
            type: 'bar',
            name: 'installation',
            showSymbol: false,
            itemStyle: {
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
            data: [10, 200, 215],
        },
    },
};

export function initInstallationView(root) {
    let echarts = window.echarts;
    const container = root.querySelector('.installation-chart-container');
    const chart = echarts.init(container);
    chart.setOption({
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
            data: [],
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
        tooltip: {
            trigger: 'axis',
            show: true,
            formatter: '{b}装机{c}台',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
                color: '#47d3e2',
                fontSize: 10,
            }
        },
        series: {
            type: 'line',
            name: 'installation',
            data: [],
        },
    });

    const tabControl = root.querySelector('.tab-control');
    const tabs = tabControl.querySelectorAll('.tab-control-item');
    tabs.forEach((el) => {
        const siblings = Array.from(tabs).filter((s) => s !== el);
        el.addEventListener('click', (e) => {
            siblings.forEach((s) => {
                s.classList.remove('tab-control-item-active');
            });
            el.classList.add('tab-control-item-active');
            chart.setOption(tabData[el.dataset.tab]);
        });
    });
    chart.setOption(tabData['by-date']);
    return chart;
}


