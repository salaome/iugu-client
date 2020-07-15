import { CustomerResource } from "./resources/custumer-resource";
import { SubscriptionResource } from "./resources/subscription-resource";
export declare class Iugu {
    private token;
    customer: CustomerResource;
    subscription: SubscriptionResource;
    constructor(apiKey: string);
    /**
     *
     * @param {string} apiKey
     */
    private setApiKey(apiKey);
}
