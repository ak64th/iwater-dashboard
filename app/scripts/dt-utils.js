import Datatable from 'vanilla-datatables';

export {Datatable};

export const defaultConfig = {
    // prevText: '前一页',
    // nextText: '后一页',
    labels: {
        placeholder: '搜索...',
        perPage: '每页显示 {select} 条数据',
        noRows: '没有数据',
        info: '显示第 {start} 到 {end} 条记录，总共 {rows} 条数据',
    },
    layout: {
        top: '{search}{select}',
    },
    sortable: false,
};

export function setLoadingMessage(datatable, message = 'loading...') {
    if (datatable.headings.length && !datatable.data.length) {
        const colspan = datatable.headings.length;
        const tr = document.createElement('tr');
        tr.innerHTML = '<td class="dataTables-empty"' +
            ` colspan="${colspan}">${message}</td>`;
        datatable.clear(tr);
    }
}

export function refreshData(datatable, data) {
    // remove all data rows
    datatable.data.splice(0, datatable.data.length);
    if (Array.isArray(data)) {
        datatable.insert({data: data});
    } else {
        datatable.insert(data);
    }
}
