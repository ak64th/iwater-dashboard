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

export function initMapView(root) {
    const container = root.getElementsByClassName('map-container')[0];
    const chart = echarts.init(container);
    chart.setOption(MAP_CHART_INIT_CONFIG);
    return chart;
}

export function updateMapView(chart, data) {
    chart.setOption({
        series: [
            {
                name: 'deviceLocation',
                data: data,
            },
        ],
    });
}
