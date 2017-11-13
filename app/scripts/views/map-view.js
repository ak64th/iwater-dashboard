import window from 'global/window';
import document from 'global/document';

let echarts = window.echarts;

const mapContainer = document.getElementsByClassName('map-container')[0];
const mapChart = echarts.init(mapContainer);
mapChart.setOption({
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
    },
    series: [
        {
            name: 'deviceLocation',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
                {
                    name: '大连',
                    value: [121.62, 38.92, 147, 520],
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
        },
    ],
});
