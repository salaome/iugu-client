/// <reference types="request-promise-native" />
import { Customer, PaymentMethod } from "../iugu-interfaces";
import { IuguResouces } from "./iugu-resouces";
import * as rp from "request-promise-native";
export declare class CustomerResource extends IuguResouces<Customer> {
    path: string;
    constructor(token: string | undefined);
    /**
     * Create a custumer payment method
     * @param {string} customer_id
     * @param {PaymentMethod} payment
     * @returns {Promise<any>}
     */
    createPaymentMethod(customer_id: string, payment: PaymentMethod): Promise<any>;
    paymentMethods(customer_id: string): Promise<any>;
    paymentMethod(customer_id: string, payment_id: string): Promise<any>;
    deletePaymentMethod(customer_id: string, payment_id: string): Promise<any>;
    switchPaymentMethod(customer_id: string, payment_id: string): Promise<any>;
    removePaymentMethod(customer_id: string, payment_method_id: string): rp.RequestPromise;
    getByEmail(email: string): rp.RequestPromise;
    invoices(customer_id: string): rp.RequestPromise;
    createInvoice(customer: Customer, date: string, description: string, price: number, payer?: any, payable_with?: string, expired_url?: string): rp.RequestPromise | Promise<{}>;
}
