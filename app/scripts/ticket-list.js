import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';
import range from './range';

// hide NanHai region
const initRegions = [
    {
        name: '南海诸岛',
        itemStyle: {normal: {opacity: 0}},
        label: {emphasis: {show: false}},
    },
];


function initServiceCoverageView(el) {
    const container = el.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        selectedMode: false,
        geo: {
            map: 'china',
            color: '#fff',
            height: 480,
            roam: false,
            label: {emphasis: {show: false}},
            itemStyle: {
                normal: {
                    areaColor: '#49b5c9',
                    borderColor: '#fff',
                },
                emphasis: {
                    areaColor: '#49b5c9',
                },
            },
            regions: initRegions,
        },
        tooltip: {
            trigger: 'item',
            formatter: (item) => `${item.name}: ${item.value[2]}个服务商`,
        },
        series: [
            {
                name: 'serviceCoverage',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: (val) => 2 + Math.max(Math.min(val[2], 15), 3),
                itemStyle: {
                    normal: {
                        color: '#f6c40a',
                    },
                },
                data: [],
            },
        ],
    });
    return {chart};
}

function updateServiceCoverageView(view, data) {
    const {chart} = view;
    const coveredProvinces = data['coveredProvinces'] || [];
    const coveredCities = data['coveredCities'] || [];
    chart.setOption({
        geo: {
            regions: coveredProvinces.map((province) => {
                return {
                    name: province,
                    itemStyle: {
                        normal: {
                            areaColor: '#13879c',
                        },
                    },
                };
            }).concat(initRegions),
        },
        series: [
            {
                name: 'serviceCoverage',
                data: coveredCities,
            },
        ],
    });
}

function initServiceStatView(el) {
    const container = el.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        title: [
            {
                text: '服务类型',
                top: 107,
                left: 100,
                textStyle: {
                    color: '#333',
                    fontSize: 14,
                    align: 'left',
                },
            },
        ],
        legend: [
            {
                name: 'service-type',
                top: 95,
                left: 255,
                width: 150,
                itemWidth: 20,
                itemHeight: 10,
                itemGap: 15,
                orient: 'horizontal',
                textStyle: {
                    color: '#666',
                    fontSize: 12,
                },
                data: ['安装', '换芯', '维修', '其他'],
            },
        ],
        grid: {
            left: 30,
            bottom: 40,
            width: 450,
            height: 120,
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
            boundaryGap: false,
            splitLine: {show: false},
            axisLabel: {
                align: 'middle',
                color: '#999',
                margin: 10,
            },
            axisTick: {show: false},
            axisLine: {show: true},
            data: range(12).map((n) => `${n + 1}月`),
        },
        yAxis: {
            minInterval: 30,
            splitNumber: 3,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#c9c9c9',
                },
            },
            axisLabel: {
                show: true,
                color: '#999',
                formatter: '{value} 单',
                margin: 10,
            },
            axisTick: {show: false},
            axisLine: {show: false},
        },
        series: [
            {
                name: 'service-type',
                type: 'pie',
                radius: [45, 60],
                center: [132, 118],
                animation: false,
                label: {normal: {show: false}},
                data: [
                    {
                        name: '安装',
                        value: 23,
                        itemStyle: {
                            normal: {
                                color: '#f1d300',
                            },
                        },
                    },
                    {
                        name: '换芯',
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: '#78c0b3',
                            },
                        },
                    },
                    {
                        name: '维修',
                        value: 5,
                        itemStyle: {
                            normal: {
                                color: '#f5716c',
                            },
                        },
                    },
                    {
                        name: '其他',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: '#995626',
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
                        color: '#bef',
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
                                {offset: 0, color: 'rgba(0, 150, 189, 0.43)'},
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

function updateServiceStatView(view, data) {
    const {chart} = view;
    chart.setOption({
        series: {
            name: 'service-count',
            data: data,
        },
    });
}

export default class TicketListView {
    constructor(root) {
        this.datatable = this.initServiceListTable(
            root.querySelector('.service-list-table')
        );
        this.serviceCoverageView = initServiceCoverageView(
            root.querySelector('.service-coverage-view')
        );
        this.serviceStatView = initServiceStatView(
            root.querySelector('.service-stat-view')
        );
    }

    updateServiceCoverageView(data) {
        updateServiceCoverageView(this.serviceCoverageView, data);
    }

    updateServiceStatView(data) {
        updateServiceStatView(this.serviceStatView, data);
    }

    initServiceListTable(el) {
        this.datatable = new Datatable(el, defaultConfig);
        setLoadingMessage(this.datatable, '等待载入数据...');
        return this.datatable;
    }

    updateServiceListTable(data) {
        refreshData(this.datatable, data);
    }
}
