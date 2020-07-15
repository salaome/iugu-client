"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iugu_resouces_1 = require("./iugu-resouces");
const rp = require("request-promise-native");
class CustomerResource extends iugu_resouces_1.IuguResouces {
    constructor(token) {
        super(token);
        this.path = 'customers/';
    }
    /**
     * Create a custumer payment method
     * @param {string} customer_id
     * @param {PaymentMethod} payment
     * @returns {Promise<any>}
     */
    createPaymentMethod(customer_id, payment) {
        return rp.post(`${this.$getUri()}${customer_id}/payment_methods`, {
            body: payment,
            json: true,
            headers: this.$getHeader()
        });
    }
    removePaymentMethod(customer_id, payment_method_id) {
        return rp.delete(`${this.$getUri()}${customer_id}/payment_methods/${payment_method_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }
}
exports.CustomerResource = CustomerResource;
