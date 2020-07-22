"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise-native");
class RestClient {
    constructor() {
        /**
         * Base Url
         * @type {string}
         */
        this.baseUrl = 'https://api.iugu.com/v1/';
    }
    /**
     * Return Uri
     * @returns {string}
     */
    $getUri() {
        return this.baseUrl + this.path;
    }
    /**
     *
     * @returns {Headers}
     */
    $getHeader() {
        return {
            'Content-Type': 'application/json',
        };
    }
    /**
     *
     * @param {T} t
     * @returns {Promise<T>}
     */
    create(t) {
        return rp.post(this.$getUri(), {
            body: t,
            json: true,
            headers: this.$getHeader()
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Promise<T>}
     */
    get(id) {
        return rp.get(this.$getUri() + id, {
            json: true,
            headers: this.$getHeader()
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Promise<T>}
     */
    delete(id) {
        return rp.delete(this.$getUri() + id, {
            headers: this.$getHeader()
        });
    }
    /**
     *
     * @param {T} t
     * @returns {Promise<T>}
     */
    update(id, t) {
        return rp.put(this.$getUri() + id, {
            body: t,
            json: true,
            headers: this.$getHeader()
        });
    }
}
exports.RestClient = RestClient;
