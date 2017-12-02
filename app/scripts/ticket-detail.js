import {Datatable, defaultConfig} from './datatable';

export default class TicketDetailView {
    constructor(root) {
        this.datatable = this.initOperationTable(
            root.querySelector('.operation-table')
        );
    }

    initOperationTable(el) {
        const headings = [
            '操作时间',
            '操作',
            '状态',
            '备注',
        ];
        this.datatable = new Datatable(el, Object.assign({}, defaultConfig, {
            layout: {
                top: '',
            },
            data: {
                headings: headings,
                // add an empty line to make setMessage work correctly
                data: [new Array(headings.length).fill('')],
            },
        }));
        return this.datatable;
    }

    updateDeviceListTable(data) {
        // remove all data rows
        this.datatable.data.splice(0, this.datatable.data.length);
        this.datatable.insert({data: data});
    }
}
