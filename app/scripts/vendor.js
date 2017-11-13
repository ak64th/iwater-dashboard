// polyfills
require('babel-polyfill');
require('whatwg-fetch');

// bundle echarts with map data and export to global
require('global/window').echarts = require('echarts');
require('echarts/map/js/china');
