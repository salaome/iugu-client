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
    /**
     *
     * @param {string} apiKey
     */
    private setApiKey(apiKey);
}
