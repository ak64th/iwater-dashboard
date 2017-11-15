import {initMapView, updateMapView} from './views/map-view';
import './views/customer-view';
import {initInstallationView} from './views/installation-view';
import {initServiceChart, updateServiceView} from './views/service-view';
import './views/sales-view';

const mapView = initMapView(document.querySelector('.map-view'));
initInstallationView(document.querySelector('.installation-view'));
const serviceView = initServiceChart(document.querySelector('.service-view'));

window.updateMapView = (data) => updateMapView(mapView, data);
window.updateServiceView = (data) => updateServiceView(serviceView, data);
