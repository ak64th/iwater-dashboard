import Datatable from 'vanilla-datatables';
import {defaultConfig, setLoadingMessage, refreshData} from './dt-utils';

export default class TicketDetailView {
    constructor(root) {
        this.datatable = this.initOperationTable(
            root.querySelector('.operation-table')
        );
    }

    initOperationTable(el) {
        this.datatable = new Datatable(el, {
            ...defaultConfig,
            layout: {
                top: '',
            },
        });
        setLoadingMessage(this.datatable, '等待载入数据...');
        return this.datatable;
    }

    updateDeviceListTable(data) {
        refreshData(this.datatable, data);
    }
}
