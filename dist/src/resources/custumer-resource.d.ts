import { Customer, PaymentMethod } from "../iugu-interfaces";
import { IuguResouces } from "./iugu-resouces";
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
}
