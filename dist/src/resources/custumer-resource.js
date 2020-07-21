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
    invoices(customer_id) {
        return rp.get(`${this.baseUrl}invoices?customer_id=${customer_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }
    createInvoice(customer, date, description, price, payer, payable_with = 'bank_slip', expired_url) {
        try {
            return rp.post(`${this.baseUrl}invoices`, {
                body: {
                    email: customer.email,
                    due_date: date,
                    items: [{
                            description: description,
                            quantity: 1,
                            price_cents: price
                        }],
                    customer_id: customer.id,
                    payable_with: payable_with,
                    payer: payer
                },
                json: true,
                headers: this.$getHeader()
            });
        }
        catch (e) {
            return e;
        }
    }
}
exports.CustomerResource = CustomerResource;
