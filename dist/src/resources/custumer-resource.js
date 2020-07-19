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
    paymentMethods(customer_id) {
        return rp.get(`${this.$getUri()}${customer_id}/payment_methods`, {
            json: true,
            headers: this.$getHeader()
        });
    }
    paymentMethod(customer_id, payment_id) {
        return rp.get(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }
    deletePaymentMethod(customer_id, payment_id) {
        return rp.delete(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }
    switchPaymentMethod(customer_id, payment_id) {
        return rp.put(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
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
    getByEmail(email) {
        return rp.get(`${this.$getUri()}/payment_methods`, {
            json: true,
            headers: this.$getHeader()
        });
    }
}
exports.CustomerResource = CustomerResource;
