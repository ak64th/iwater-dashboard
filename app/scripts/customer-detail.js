import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';

export default class CustomerDetailView {
    constructor(root) {
        this.initDeviceListTable(
            root.querySelector('.device-list-table')
        );
        this.initDeviceRecordTable(
            root.querySelector('.device-record-table')
        );
    }

    initDeviceListTable(el) {
        this.deviceListTable = new Datatable(el, {
            ...defaultConfig,
            layout: {
                top: '',
            },
        });
        setLoadingMessage(this.deviceListTable, '等待载入数据...');
        return this.deviceListTable;
    }

    updateActivationTable(data) {
        refreshData(this.deviceListTable, data);
    }

    initDeviceRecordTable(el) {
        this.deviceRecordTable = new Datatable(el, {
            ...defaultConfig,
            layout: {
                top: '',
            },
        });
        setLoadingMessage(this.deviceRecordTable, '等待载入数据...');
        return this.deviceRecordTable;
    }

    updateDeviceRecordTable(data) {
        refreshData(this.deviceRecordTable, data);
    }
}
