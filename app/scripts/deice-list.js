import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';
import {initDeviceSummaryView} from './views/device-summary-chart-view';
import {initPurifiedView, updatePurifiedView} from './views/purified-view';

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
        this.datatable = new Datatable(el, {
            ...defaultConfig,
            perPage: 5,
            perPageSelect: [5, 10, 50],
        });
        setLoadingMessage(this.datatable, '等待载入数据...');
        return this.datatable;
    }

    updateDeviceListTable(data) {
        refreshData(this.datatable, data);
    }

    updatePurifiedView(data) {
        updatePurifiedView(this.purifiedView, data);
    }
}
