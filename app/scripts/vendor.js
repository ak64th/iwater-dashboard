// polyfills
require('babel-polyfill');
require('whatwg-fetch');

// export a dom ready listener to browser
require('global/window').domready = require('domready');

// bundle echarts with map data and export to global
require('global/window').echarts = require('echarts');
require('echarts/map/js/china');
