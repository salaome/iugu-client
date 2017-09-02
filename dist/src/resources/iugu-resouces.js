"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_client_1 = require("./rest-client");
class IuguResouces extends rest_client_1.RestClient {
    constructor(token) {
        super();
        this.token = token;
    }
    /**
     *
     * @returns {string}
     */
    $getToken() {
        return this.token;
    }
    /**
     *
     * @returns {request.Headers}
     */
    $getHeader() {
        return {
            'Authorization': `Basic ${this.$getToken()}`,
            'Content-Type': 'application/json',
        };
    }
}
exports.IuguResouces = IuguResouces;
