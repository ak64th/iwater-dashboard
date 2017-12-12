import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';
import {Modal} from './modal';

export default class DeviceDetailView {
    constructor(root, options = {}) {
        this.datatable = this.initActivationTable(
            root.querySelector('.activation-table')
        );
        this.map = this.initMap(
            root.querySelector('.map-container')
        );
        this.tempChart = this.initTempChart(
            root.querySelector('.chart-container')
        );
        this.initOperationView(
            root.querySelector('.operation-view')
        );
        this.initFilterView(
            root.querySelector('.filter-info')
        );
        this.operationCallback = options['operationCallback'];
        this.resetFilterCallback = options['resetFilterCallback'];
        this.modal = new Modal();
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
        this.datatable = new Datatable(el, {
            ...defaultConfig,
            layout: {
                top: '<div class="section-header">激活记录</div>{search}',
            },
        });
        setLoadingMessage(this.datatable, '等待载入数据...');
        return this.datatable;
    }

    updateActivationTable(data) {
        refreshData(this.datatable, data);
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

    initOperationView(el) {
        const panel = el.querySelector('.operation-panel');
        panel.addEventListener('click', (ev) => {
            const button = ev.target.closest('.operation-button');
            if (!button) return;
            if (!this.operationCallback) {
                throw new Error('no operation callback provided');
            }
            const operation = button.dataset['operation'];
            const text = button.text.trim();
            this.modal.show('正在发送命令...');
            this.operationCallback(operation, text).then(() => {
                this.modal.update('操作成功');
            }).catch((reason) => {
                this.modal.update(`操作失败，错误原因：${reason}`);
                this.modal.closable = true;
            });
        });
    }

    initFilterView(el) {
        const button = el.querySelector('.button');
        const bars = el.querySelector('.filter-bars');
        button.addEventListener('click', () => {
            if (!this.resetFilterCallback) {
                throw new Error('no reset filter callback provided');
            }
            const editing = bars.classList.contains('filter-bars-editing');
            if (!editing) {
                bars.classList.add('filter-bars-editing');
                button.textContent = '确定';
            } else {
                const checked = Array.from(
                    el.querySelectorAll('input[name=filter]:checked')
                );
                const values = checked.map((checkbox) => checkbox.value);
                if (!values.length) {
                    bars.classList.remove('filter-bars-editing');
                    button.textContent = '重置';
                    return false;
                }
                this.modal.show('正在发送命令...');
                this.resetFilterCallback(values).then(() => {
                    checked.forEach((input) => {
                        const bar = input.closest('.filter-bar');
                        bar.querySelector('.meter span').style.width = '100%';
                        bar.querySelector('.filter-value').textContent = '100%';
                        input.checked = false;
                        this.modal.update('操作成功');
                    });
                }).catch((reason) => {
                    this.modal.update(`操作失败，错误原因：${reason}`);
                    bars.classList.remove('filter-bars-editing');
                    button.textContent = '重置';
                    this.modal.closable = true;
                });
            }
        });
    }
}
