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

export function createHeadOnlyDatatable(el, headings, config) {
    config = Object.assign({}, defaultConfig, config || {});
    return new Datatable(el, Object.assign({}, config, {
        data: {
            headings: headings,
            // add an empty line to make setMessage work correctly
            data: [new Array(headings.length).fill('')],
        },
    }));
}
