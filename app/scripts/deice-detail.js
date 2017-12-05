import Datatable from 'vanilla-datatables';
import {defaultConfig} from './dt-utils';

export default class DeviceDetailView {
    constructor(root) {
        this.datatable = this.initActivationTable(
            root.querySelector('.activation-table')
        );
        this.map = this.initMap(
            root.querySelector('.map-container')
        );
        this.tempChart = this.initTempChart(
            root.querySelector('.chart-container')
        );
    }

    initMap(el) {
        this.map = new BMap.Map(el);
        return this.map;
    }

    updateMap(lng, lat) {
        const center = new BMap.Point(lng, lat);
        const marker = new BMap.Marker(center);
        this.map.centerAndZoom(center, 18);
        this.map.addOverlay(marker);
    }

    initActivationTable(el) {
        const headings = [
            '激活码',
            '激活时间',
            '激活码类型',
        ];
        this.datatable = new Datatable(el, Object.assign({}, defaultConfig, {
            layout: {
                top: '<div class="section-header">激活记录</div>{search}',
            },
            data: {
                headings: headings,
                // add an empty line to make setMessage work correctly
                data: [new Array(headings.length).fill('')],
            },
        }));
        return this.datatable;
    }

    updateActivationTable(data) {
        // remove all data rows
        this.datatable.data.splice(0, this.datatable.data.length);
        this.datatable.insert({data: data});
    }

    initTempChart(el) {
        const chart = echarts.init(el);
        chart.setOption({
            title: [
                {
                    textStyle: {
                        color: '#666',
                        fontSize: 14,
                        align: 'center',
                    },
                    text: '热水温度',
                    top: 140,
                    left: 148,
                },
                {
                    textStyle: {
                        color: '#666',
                        fontSize: 14,
                        align: 'center',
                    },
                    text: '冷水温度',
                    top: 140,
                    left: 288,
                },
            ],
            series: [
                {
                    type: 'pie',
                    radius: [30, 50],
                    animation: false,
                    label: {normal: {show: false}},
                    name: 'hot',
                    center: [180, 80],
                    data: [
                        {
                            name: 'empty',
                            value: 100,
                            itemStyle: {
                                normal: {
                                    color: '#e6e6e6',
                                },
                                emphasis: {
                                    color: '#e6e6e6',
                                },
                            },
                        },
                    ],
                },
                {
                    type: 'pie',
                    radius: [30, 50],
                    animation: false,
                    label: {normal: {show: false}},
                    name: 'cold',
                    center: [320, 80],
                    data: [
                        {
                            name: 'empty',
                            value: 100,
                            itemStyle: {
                                normal: {
                                    color: '#e6e6e6',
                                },
                                emphasis: {
                                    color: '#e6e6e6',
                                },
                            },
                        },
                    ],
                },
            ],
        });
        this.tempChart = chart;
        return this.tempChart;
    }

    updateTempChart(hotTemp, coldTemp) {
        this.tempChart.setOption({
            series: [
                {
                    name: 'hot',
                    animation: true,
                    hoverAnimation: false,
                    data: [
                        {
                            name: 'hot',
                            value: hotTemp,
                            itemStyle: {
                                normal: {
                                    color: '#f7716c',
                                },
                                emphasis: {
                                    color: '#f7716c',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: '{c}℃',
                                    fontSize: 20,
                                    color: '#333',
                                },
                            },
                        },
                        {
                            name: 'empty',
                            value: 100 - hotTemp,
                            itemStyle: {
                                normal: {
                                    color: '#e6e6e6',
                                },
                                emphasis: {
                                    color: '#e6e6e6',
                                },
                            },
                        },
                    ],
                },
                {
                    name: 'cold',
                    animation: true,
                    hoverAnimation: false,
                    data: [
                        {
                            name: 'cold',
                            value: coldTemp,
                            itemStyle: {
                                normal: {
                                    color: '#009ac1',
                                },
                                emphasis: {
                                    color: '#009ac1',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: '{c}℃',
                                    fontSize: 20,
                                    color: '#333',
                                },
                            },
                        },
                        {
                            name: 'empty',
                            value: 100 - coldTemp,
                            itemStyle: {
                                normal: {
                                    color: '#e6e6e6',
                                },
                                emphasis: {
                                    color: '#e6e6e6',
                                },
                            },
                        },
                    ],
                },
            ],
        });
    }
}
