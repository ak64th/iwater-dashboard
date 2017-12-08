import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';
import range from './range';

const chartTitleStyle = {
    textStyle: {
        color: '#999',
        fontSize: 14,
        align: 'center',
    },
};

const chartLegendStyle = {
    width: 120,
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 5,
    orient: 'horizontal',
    textStyle: {
        color: '#999',
        fontSize: 12,
    },
};

const pieSeriesStyle = {
    type: 'pie',
    radius: [20, 35],
    legendHoverLink: true,
    hoverAnimation: false,
    label: {
        normal: {
            show: false,
        },
    },
};

function initPurchaseFrequencyView(el) {
    const container = el.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        grid: {
            left: 10,
            bottom: 30,
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
            minInterval: 50,
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
                formatter: '{value} 台',
                margin: 10,
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
                data: [62, 84, 72, 55, 68, 72, 99, 104, 71, 82, 102, 66],
            },
        ],
    });
    return {chart};
}

function initPurchaseTypeView(el) {
    const container = el.querySelector('.chart-container');
    const chart = echarts.init(container);
    chart.setOption({
        title: [
            {
                ...chartTitleStyle,
                text: '下单价格范围',
                top: 90,
                left: 40,
            },
            {
                ...chartTitleStyle,
                text: '促销敏感度',
                top: 90,
                left: 200,
            },
            {
                ...chartTitleStyle,
                text: '产品倾向',
                top: 90,
                left: 355,
            },
        ],
        legend: [
            {
                ...chartLegendStyle,
                name: 'priceRange',
                top: 110,
                left: 40,
                data: ['2k-3k', '3k-4k', '4k-5k', '其他'],
            },
            {
                ...chartLegendStyle,
                name: 'promotionAcceptance',
                top: 110,
                left: 200,
                data: ['促销购买', '非促销购买'],
            },
            {
                ...chartLegendStyle,
                name: 'productPreference',
                top: 110,
                left: 345,
                data: ['收藏', '查看', '搜索', '其他'],
            },
        ],
        series: [
            {
                ...pieSeriesStyle,
                name: 'priceRange',
                center: [90, 50],
                data: [
                    {
                        name: '2k-3k',
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: '#f5716c',
                            },
                        },
                    },
                    {
                        name: '3k-4k',
                        value: 65,
                        itemStyle: {
                            normal: {
                                color: '#f1d300',
                            },
                        },
                    },
                    {
                        name: '4k-5k',
                        value: 40,
                        itemStyle: {
                            normal: {
                                color: '#558cf6',
                            },
                        },
                    },
                    {
                        name: '其他',
                        value: 25,
                        itemStyle: {
                            normal: {
                                color: '#79c0b3',
                            },
                        },
                    },
                ],
            },
            {
                ...pieSeriesStyle,
                name: 'promotionAcceptance',
                center: [240, 50],
                data: [
                    {
                        name: '非促销购买',
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: '#f5716c',
                            },
                        },
                    },
                    {
                        name: '促销购买',
                        value: 65,
                        itemStyle: {
                            normal: {
                                color: '#79c0b3',
                            },
                        },
                    },
                ],
            },
            {
                ...pieSeriesStyle,
                name: 'productPreference',
                center: [390, 50],
                data: [
                    {
                        name: '收藏',
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: '#f5716c',
                            },
                        },
                    },
                    {
                        name: '查看',
                        value: 35,
                        itemStyle: {
                            normal: {
                                color: '#f1d300',
                            },
                        },
                    },
                    {
                        name: '搜索',
                        value: 45,
                        itemStyle: {
                            normal: {
                                color: '#558cf6',
                            },
                        },
                    },
                    {
                        name: '其他',
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: '#79c0b3',
                            },
                        },
                    },
                ],
            },
        ],
    });
    return {chart};
}

export default class CustomerListView {
    constructor(root) {
        this.initCustomerListTable(
            root.querySelector('.customer-list-table')
        );
        this.purchaseFrequencyView = initPurchaseFrequencyView(
            root.querySelector('.purchase-frequency-view')
        );
        this.purchaseTypeView = initPurchaseTypeView(
            root.querySelector('.purchase-type-view')
        );
    }

    initCustomerListTable(el) {
        this.customerListTable = new Datatable(el, defaultConfig);
        setLoadingMessage(this.customerListTable, '等待载入数据...');
        return this.customerListTable;
    }

    updateCustomerListTable(data) {
        refreshData(this.customerListTable, data);
    }
}
