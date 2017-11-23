// polyfills
require('babel-polyfill');
require('whatwg-fetch');

// export a dom ready listener to browser
global.domready = require('domready');

// bundle echarts with map data and export to global
global.echarts = require('echarts');
require('echarts/map/js/china');
