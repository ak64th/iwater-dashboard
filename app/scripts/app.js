const echarts = window.echarts;

const mapContainer = document.getElementsByClassName('map-container')[0];
const mapChart = echarts.init(mapContainer);
mapChart.setOption({
    selectedMode: 'single',
    tooltip: {
        trigger: 'item',
        formatter: (item) => `${item.name}: ${item.value[2]}台`,
    },
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 200,
        calculable: true,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        textStyle: {
            color: '#fff',
        },
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
    },
    series: [
        {
            name: 'deviceLocation',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
                {
                    name: '大连',
                    value: [121.62, 38.92, 47],
                },
            ],
            symbolSize: (val) => val[2] / 5,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false,
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: '#ddb926',
                },
            },
        },
    ],
});
