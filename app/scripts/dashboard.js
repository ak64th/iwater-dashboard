import {initMapView, updateMapView} from './views/map-view';
import {initCustomerView} from './views/customer-view';
import {initInstallationView, updateInstallationView} from './views/installation-view';
import {initServiceChart, updateServiceView} from './views/service-view';
import {initSalesView, updateSalesView} from './views/sales-view';


export default class DashboardView {
    constructor(root) {
        this.mapView = initMapView(
            root.querySelector('.map-view')
        );
        initCustomerView(
            root.querySelector('.customer-view')
        );
        this.installationView = initInstallationView(
            root.querySelector('.installation-view')
        );
        this.serviceView = initServiceChart(
            root.querySelector('.service-view')
        );
        this.salesView = initSalesView(
            root.querySelector('.sales-view')
        );
    }

    updateMapView(data) {
        updateMapView(this.mapView, data);
    }

    updateInstallationView(data) {
        updateInstallationView(this.installationView, data);
    }

    updateServiceView(data) {
        updateServiceView(this.serviceView, data);
    }

    updateSalesView(data) {
        updateSalesView(this.salesView, data);
    }
}
