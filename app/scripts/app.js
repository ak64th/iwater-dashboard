import {initMapView, updateMapView} from './views/map-view';
import {initCustomerView} from './views/customer-view';
import {initInstallationView} from './views/installation-view';
import {initServiceChart, updateServiceView} from './views/service-view';
import {initSalesView, updateSalesView} from './views/sales-view';

const mapView = initMapView(document.querySelector('.map-view'));
initCustomerView(document.querySelector('.customer-view'));
initInstallationView(document.querySelector('.installation-view'));
const serviceView = initServiceChart(document.querySelector('.service-view'));
const salesView = initSalesView(document.querySelector('.sales-view'));

window.updateMapView = (data) => updateMapView(mapView, data);
window.updateServiceView = (data) => updateServiceView(serviceView, data);
window.updateSalesView = (data) => updateSalesView(salesView, data);
