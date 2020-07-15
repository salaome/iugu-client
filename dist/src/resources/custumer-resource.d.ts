/// <reference types="request-promise-native" />
import { Customer, PaymentMethod } from "../iugu-interfaces";
import { IuguResouces } from "./iugu-resouces";
import * as rp from "request-promise-native";
export declare class CustomerResource extends IuguResouces<Customer> {
    path: string;
    constructor(token: string);
    /**
     * Create a custumer payment method
     * @param {string} customer_id
     * @param {PaymentMethod} payment
     * @returns {Promise<any>}
     */
    createPaymentMethod(customer_id: string, payment: PaymentMethod): Promise<any>;
    removePaymentMethod(customer_id: string, payment_method_id: string): rp.RequestPromise;
}
