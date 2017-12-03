/* global BMap  */
import {Datatable, defaultConfig} from './datatable';

export default class DeviceDetailView {
    constructor(root) {
        this.datatable = this.initActivationTable(
            root.querySelector('.activation-table')
        );
        this.map = this.initMap(
            root.querySelector('.map-container')
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
}
