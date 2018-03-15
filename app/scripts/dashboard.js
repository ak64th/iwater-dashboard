import range from './range';
import dropImage from '../images/drop.png';

const MAP_CHART_INIT_CONFIG = {
    selectedMode: 'single',
    tooltip: {
        trigger: 'item',
        formatter: (item) => `${item.name}: ${item.value[2]}台`,
    },
    visualMap: {
        type: 'piecewise', pieces: [
            {gt: 500, symbol: 'circle', color: '#f6c40a', label: '500以上'},
            {gt: 350, lte: 500, symbol: 'circle', color: '#ff6800'},
            {gte: 200, lte: 350, symbol: 'circle', color: '#1857e7'},
            {lt: 200, symbol: 'circle', color: '#00e498', label: '200以下'},
        ],
        textStyle: {
            color: '#fff',
        },
        symbolWidth: 12,
        symbolHeight: 12,
        symbolGap: 6,
    },
    geo: {
        map: 'china',
        color: '#fff',
        width: '100%',
        roam: false,
        label: {
            emphasis: {
                show: false,
            },
        },
        itemStyle: {
            normal: {
                areaColor: '#368cb1',
                borderColor: '#fff',
            },
            emphasis: {
                areaColor: '#fff',
                borderColor: '#368cb1',
            },
        },
        regions: [
            {
                name: '南海诸岛',
                itemStyle: {normal: {opacity: 0}},
                label: {emphasis: {show: false}},
            },
        ],
    },
    series: [
        {
            name: 'deviceLocation',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: (val) => 2 + Math.max(Math.min(val[2] / 10, 15), 3),
        },
    ],
};

const CUSTOMER_CHART_CONFIG = {
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
};

const INSTALLATION_CHART_CONFIG = {
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
        },
    },
    series: {
        type: 'line',
        name: 'installation',
        data: [],
    },
};

const SERVICE_CHART_CONFIG = {
    title: [
        {
            text: '服务类型',
            top: 120,
            left: 65,
            textStyle: {
                color: '#fffbe5',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '服务地区',
            top: 120,
            left: 255,
            textStyle: {
                color: '#fffbe5',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '服务及时性',
            top: 120,
            left: 440,
            textStyle: {
                color: '#fffbe5',
                fontSize: 14,
                align: 'center',
            },
        },
    ],
    legend: [
        {
            name: 'service-type',
            top: 140,
            left: 55,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#d0d0d0',
                fontSize: 12,
            },
            data: ['安装', '换芯', '维修', '其他'],
        },
        {
            name: 'service-region',
            top: 140,
            left: 245,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['鹰潭', '临汾', '上海', '其他'],
        },
        {
            name: 'service-delay',
            top: 140,
            left: 430,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 5,
            orient: 'horizontal',
            textStyle: {
                color: '#999',
                fontSize: 12,
            },
            data: ['12小时', '24小时', '36小时', '更多'],
        },
    ],
    graphic: {
        elements: [
            {
                type: 'image',
                style: {
                    image: dropImage,
                    width: 18,
                    height: 24,
                },
                left: 90,
                top: 50,
            },
            {
                type: 'image',
                style: {
                    image: dropImage,
                    width: 18,
                    height: 24,
                },
                left: 280,
                top: 50,
            },
            {
                type: 'image',
                style: {
                    image: dropImage,
                    width: 18,
                    height: 24,
                },
                left: 470,
                top: 50,
            },
        ],
    },
    grid: {
        left: 50,
        bottom: 20,
        width: 500,
        height: 100,
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
        splitLine: {show: false},
        axisLabel: {
            align: 'middle',
            color: '#fff',
        },
        axisLine: {
            lineStyle: {
                color: '#628686',
            },
            margin: 20,
        },
        axisTick: {show: false},
        data: range(12).map((n) => `${n + 1}月`),
    },
    yAxis: {
        minInterval: 20,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#3e5555',
            },
        },
        axisLabel: {
            show: true,
            color: '#fff',
        },
        axisLine: {show: false},
    },
    series: [
        {
            name: 'service-type',
            type: 'pie',
            radius: [40, 50],
            center: [100, 60],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '安装',
                    value: 83,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '换芯',
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '维修',
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '其他',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            name: 'service-region',
            type: 'pie',
            radius: [40, 50],
            center: [290, 60],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '鹰潭',
                    value: 88,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '临汾',
                    value: 7,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '上海',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '其他',
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            name: 'service-delay',
            type: 'pie',
            radius: [40, 50],
            center: [480, 60],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: '12小时',
                    value: 23,
                    itemStyle: {
                        normal: {
                            color: '#47d3e2',
                        },
                    },
                },
                {
                    name: '24小时',
                    value: 43,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: '36小时',
                    value: 29,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: '更多',
                    value: 5,
                    itemStyle: {
                        normal: {
                            color: '#265299',
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
                    color: '#66a4be',
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
                            {offset: 0.2, color: '#20665e'},
                            {offset: 0.8, color: 'rgba(32, 102, 94, 0.25'},
                            {offset: 1, color: 'rgba(0, 0, 0, 0)'},
                        ],
                    },
                },
            },
            data: [],
        },
    ],
};

const SALES_CHART_CONFIG = {
    title: [
        {
            text: '销售占比',
            top: 0,
            left: 25,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '渠道销量',
            top: 0,
            left: 145,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
        {
            text: '城市分布',
            top: 0,
            left: 370,
            textStyle: {
                color: '#4fa7b7',
                fontSize: 14,
                align: 'center',
            },
        },
    ],
    legend: [
        {
            name: 'service-type',
            top: 100,
            left: 35,
            width: 120,
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 10,
            orient: 'vertical',
            textStyle: {
                color: '#d0d0d0',
                fontSize: 12,
            },
            data: ['ZS-S6', 'ZS-J05W', 'ZS-J05G'],
        },
    ],
    grid: [
        {
            top: 25,
            left: 135,
            width: 200,
            height: 150,
            containLabel: true,
        },
        {
            top: 25,
            left: 370,
            width: 200,
            height: 150,
            containLabel: true,
        },
    ],
    xAxis: [
        {
            show: false,
            type: 'value',
            splitLine: {show: false},
        },
        {
            gridIndex: 1,
            show: false,
            type: 'value',
            splitLine: {show: false},
        },
    ],
    yAxis: [
        {
            type: 'category',
            data: ['直营', '经销商', '银行', '联通', '电信'],
            axisLabel: {
                color: '#fff',
                align: 'right',
            },
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
        },
        {
            gridIndex: 1,
            type: 'category',
            data: [],
            axisLabel: {
                color: '#fff',
                align: 'right',
            },
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
        },
    ],
    series: [
        {
            name: 'sales-type',
            type: 'pie',
            radius: 30,
            center: [60, 60],
            legendHoverLink: true,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    name: 'ZS-S6',
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#3b395e',
                        },
                    },
                },
                {
                    name: 'ZS-J05W',
                    value: 200,
                    itemStyle: {
                        normal: {
                            color: '#699090',
                        },
                    },
                },
                {
                    name: 'ZS-J05G',
                    value: 215,
                    itemStyle: {
                        normal: {
                            color: '#265299',
                        },
                    },
                },
            ],
        },
        {
            type: 'bar',
            z: 3,
            barWidth: 8,
            barMinHeight: 3,
            name: 'sales-channel',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#4cbbfe',
                    barBorderRadius: 5,
                },
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                },
            },
            data: [280, 100, 15, 10, 20],
        },
        {
            type: 'bar',
            z: 2,
            name: 'sales-channel-bg',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderWidth: 1,
                    borderColor: '#4cbbfe',
                    barBorderRadius: 6,
                    shadowColor: '#000',
                    shadowBlur: 3,
                },
            },
            barGap: '-110%',
            data: [300, 300, 300, 300, 300],
            animation: false,
        },
        {
            type: 'bar',
            z: 3,
            barWidth: 8,
            barMinHeight: 3,
            name: 'sales-city',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#4cbbfe',
                    barBorderRadius: 5,
                },
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                },
            },
            data: [],
        },
        {
            type: 'bar',
            z: 2,
            name: 'sales-city-bg',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderWidth: 1,
                    borderColor: '#4cbbfe',
                    barBorderRadius: 6,
                    shadowColor: '#000',
                    shadowBlur: 3,
                },
            },
            barGap: '-110%',
            data: [],
            animation: false,
        },
    ],
};

const installationData = {
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
            data: [],
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


export default class DashboardView {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.initMapView();
        this.initCustomerView();
        this.initInstallationView();
        this.initServiceView();
        this.initSalesView();
    }

    initMapView() {
        const el = this.rootEl.querySelector('.map-view');
        const container = el.querySelector('.map-container');
        const panel = el.querySelector('.panel-control');
        const regionSelect = panel.querySelector('.region-select');
        const chart = echarts.init(container);
        chart.setOption(MAP_CHART_INIT_CONFIG);
        chart.on('geoselectchanged', (ev) => {
            const selected = ev.batch && ev.batch[0].selected || ev.selected;
            let selectedKey = 'all';
            if (selected) {
                for (const key in selected) {
                    if (selected.hasOwnProperty(key) && selected[key]) {
                        selectedKey = key;
                        break;
                    }
                }
            }
            Array.from(regionSelect.options)
                .filter((option) => option.value === selectedKey)
                .forEach((option) => {
                    option.selected = true;
                    regionSelect.dispatchEvent(new Event('change'));
                });
        });
        regionSelect.addEventListener('change', () => {
            const selected = regionSelect.options[regionSelect.selectedIndex];
            chart.dispatchAction({
                type: 'geoSelect',
                seriesIndex: 0,
                name: selected.value,
            });
            chart.resize();
        });
        return chart;
    }

    initCustomerView() {
        const el = this.rootEl.querySelector('.customer-view');
        const container = el.querySelector('.customer-chart-container');
        const chart = echarts.init(container);
        chart.setOption(CUSTOMER_CHART_CONFIG);
        return chart;
    }

    initInstallationView() {
        const el = this.rootEl.querySelector('.installation-view');
        const container = el.querySelector('.installation-chart-container');
        const chart = echarts.init(container);
        chart.setOption(INSTALLATION_CHART_CONFIG);
        const tabControl = el.querySelector('.tab-control');
        const tabs = Array.from(
            tabControl.querySelectorAll('.tab-control-item')
        );
        tabs.forEach((el) => {
            const siblings = tabs.filter((s) => s !== el);
            el.addEventListener('click', () => {
                siblings.forEach((s) => {
                    s.classList.remove('tab-control-item-active');
                });
                el.classList.add('tab-control-item-active');
                chart.setOption(installationData[el.dataset.tab]);
            });
        });
        chart.setOption(installationData['by-date']);
        return chart;
    }

    initServiceView() {
        const el = this.rootEl.querySelector('.service-view');
        const container = el.querySelector('.service-chart-container');
        const chart = echarts.init(container);
        chart.setOption(SERVICE_CHART_CONFIG);
        return chart;
    }

    initSalesView() {
        const el = this.rootEl.querySelector('.sales-view');
        const container = el.querySelector('.sales-chart-container');
        const chart = echarts.init(container);
        chart.setOption(SALES_CHART_CONFIG);
        return chart;
    }

    updateMapView(data) {
        const el = this.rootEl.querySelector('.map-view');
        const container = el.querySelector('.map-container');
        const chart = echarts.getInstanceByDom(container);
        chart.setOption({
            series: [
                {
                    name: 'deviceLocation',
                    data: data,
                },
            ],
        });
    }

    updateInstallationView(data) {
        const el = this.rootEl.querySelector('.installation-view');
        const container = el.querySelector('.installation-chart-container');
        const chart = echarts.getInstanceByDom(container);
        installationData['by-date']['series']['data'] = data;
        chart.setOption(installationData['by-date']);
    }

    updateServiceView(data) {
        const el = this.rootEl.querySelector('.service-view');
        const container = el.querySelector('.service-chart-container');
        const chart = echarts.getInstanceByDom(container);
        chart.setOption({
            series: {
                name: 'service-count',
                data: data,
            },
        });
    }

    updateSalesView({cities, values}) {
        const el = this.rootEl.querySelector('.sales-view');
        const container = el.querySelector('.sales-chart-container');
        const chart = echarts.getInstanceByDom(container);
        const maxValue = values.reduce((sum, v) => sum + v);
        chart.setOption({
            yAxis: [
                {
                    type: 'category',
                    data: ['直营', '经销商', '银行', '联通', '电信'],
                    axisLabel: {
                        color: '#fff',
                        align: 'right',
                    },
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    data: cities,
                    axisLabel: {
                        color: '#fff',
                        align: 'right',
                    },
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                },
            ],
            series: [
                {
                    type: 'bar',
                    z: 3,
                    barWidth: 8,
                    barMinHeight: 3,
                    name: 'sales-city',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: '#4cbbfe',
                            barBorderRadius: 5,
                        },
                    },
                    label: {
                        emphasis: {
                            show: true,
                            position: 'right',
                        },
                    },
                    data: values,
                },
                {
                    type: 'bar',
                    z: 2,
                    name: 'sales-city-bg',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderWidth: 1,
                            borderColor: '#4cbbfe',
                            barBorderRadius: 6,
                            shadowColor: '#000',
                            shadowBlur: 3,
                        },
                    },
                    barGap: '-110%',
                    data: new Array(5).fill(maxValue),
                    animation: false,
                },
            ],
        });
    }
}
