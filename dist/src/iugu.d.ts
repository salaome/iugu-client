/// <reference types="request-promise-native" />
import { CustomerResource } from "./resources/custumer-resource";
import { SubscriptionResource } from "./resources/subscription-resource";
import * as rp from "request-promise-native";
export declare class Iugu {
    private token;
    customer: CustomerResource;
    subscription: SubscriptionResource;
    constructor(apiKey: string);
    paymentToken(accountId: string, test: boolean, number: string, verificationValue: string, firstName: string, lastName: string, month: string, year: string): rp.RequestPromise;
    charge(customerId: string, token: string, payer: any, orderId: string, price: number, description: string): rp.RequestPromise;
    invoices(invoice_id: string): rp.RequestPromise;
    createInvoice(customer_id: string, email: string, date: string, description: string, price: number, cpf_cnpj: string, name: string, zip_code: string, number: string, payable_with: string): Promise<any>;
    /**
     *
     * @param {string} apiKey
     */
    private setApiKey(apiKey);
}
