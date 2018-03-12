/**
 * Data Store
 */
export class DataStore {
    /**
     * Create a new data store instance
     * @param {object} data - initial data.
     */
    constructor(data) {
        this.data = data;
    }
}

const singleton = new DataStore({
    currentData: {
        deviceLocations: {
            name: '大连',
            longitude: 121.62,
            latitude: 38.92,
            amount: 47,
        },
        deviceSummary: {
            total: 6,
            error: 3,
            online: 5,
            outage: 2,
            purchase: 1,
        },
    },
});

export default singleton;