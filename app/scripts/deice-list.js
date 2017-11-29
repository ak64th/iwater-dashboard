import {createHeadOnlyDatatable} from './datatable';
import {initDeviceSummaryView} from './views/device-summary-chart-view';
import {initPurifiedView} from './views/purified-view';

export default class DeviceListView {
    constructor(root) {
        this.datatable = this.initDeviceListTable(
            root.querySelector('.device-list-table')
        );
        this.deviceSummaryView = initDeviceSummaryView(
            root.querySelector('.device-summary-view')
        );
        this.purifiedView = initPurifiedView(
            root.querySelector('.purified-view')
        );
    }

    initDeviceListTable(el) {
        const headings = [
            '设备编号',
            '设备型号',
            '使用方式',
            '使用停止限制信息',
            '设备状态',
            '使用状态',
        ];
        this.datatable = createHeadOnlyDatatable(el, headings, {
            perPage: 5,
            perPageSelect: [5, 10, 50],
        });
        this.datatable.setMessage('等待载入数据...');
        return this.datatable;
    }

    updateDeviceListTable(data) {
        // remove all data rows
        this.datatable.data.splice(0, this.datatable.data.length);
        this.datatable.insert({data: data});
    }
}
