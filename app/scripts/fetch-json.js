/**
 * Fetch json data from same origin site
 * @param {string} url Data source url
 * @return {Promise} A promise resolved with loaded json data
 */
export function fetchJson(url) {
    return fetch(url, {
        credentials: 'same-origin',
    }).then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
            return Promise.resolve(resp);
        }
        return Promise.reject(new Error(resp.statusText));
    }).then((resp) => resp.json());
}
