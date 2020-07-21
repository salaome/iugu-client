import {
    Customer,
    PaymentMethod
} from "../iugu-interfaces";
import {IuguResouces} from "./iugu-resouces";
import * as rp from "request-promise-native";
import * as requestPromise from "request-promise-native";


export class CustomerResource extends IuguResouces<Customer> {
    path: string = 'customers/';

    constructor(token: string | undefined) {
        super(token);
    }

    /**
     * Create a custumer payment method
     * @param {string} customer_id
     * @param {PaymentMethod} payment
     * @returns {Promise<any>}
     */
    createPaymentMethod(customer_id: string, payment: PaymentMethod): Promise<any> {
        return rp.post(`${this.$getUri()}${customer_id}/payment_methods`, {
            body: payment,
            json: true,
            headers: this.$getHeader()
        });
    }

    paymentMethods(customer_id: string): Promise<any> {
        return rp.get(`${this.$getUri()}${customer_id}/payment_methods`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    paymentMethod(customer_id: string, payment_id: string): Promise<any> {
        return rp.get(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    deletePaymentMethod(customer_id: string, payment_id: string): Promise<any> {
        return rp.delete(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    switchPaymentMethod(customer_id: string, payment_id: string): Promise<any> {
        return rp.put(`${this.$getUri()}${customer_id}/payment_methods/${payment_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    removePaymentMethod(customer_id: string, payment_method_id: string) {
        return rp.delete(`${this.$getUri()}${customer_id}/payment_methods/${payment_method_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    getByEmail(email: string) {
        return rp.get(`${this.$getUri()}/payment_methods`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    invoices(customer_id: string) {
        return rp.get(`${this.baseUrl}invoices?customer_id=${customer_id}`, {
            json: true,
            headers: this.$getHeader()
        });
    }

    createInvoice(customer_id: string, email: string, date: string, description: string, price: number,
                  cpf_cnpj: string, name: string, zip_code: string, number: string, payable_with: string = 'bank_slip',
                  expired_url?: string) {
        return rp.post(`${this.baseUrl}invoices`, {
            body: {
                email: email,
                due_date: date,
                items: [{
                    description: description,
                    quantity: 1,
                    price_cents: price
                }],
                customer_id: customer_id,
                payable_with: payable_with,
                payer: {
                    cpf_cnpj: cpf_cnpj,
                    name: name,
                    email: email,
                    address: {
                        zip_code: zip_code,
                        number: number
                    }
                }
            },
            json: true,
            headers: this.$getHeader()
        });
    }

}
