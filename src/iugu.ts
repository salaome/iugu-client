import {CustomerResource} from "./resources/custumer-resource";
import {SubscriptionResource} from "./resources/subscription-resource";
import * as rp from "request-promise-native";

export class Iugu {

    private token: string | undefined;

    customer: CustomerResource;
    subscription: SubscriptionResource;


    constructor(apiKey: string) {
        this.setApiKey(apiKey);
        this.customer = new CustomerResource(this.token);
        this.subscription = new SubscriptionResource(this.token);
    }

    paymentToken(accountId: string, test: boolean, number: string, verificationValue: string, firstName: string,
                 lastName: string, month: string, year: string) {
        return rp.post(`${this.subscription.baseUrl}/payment_token`, {
            headers: this.subscription.$getHeader(),
            json: true,
            body: {
                account_id: accountId,
                method: 'credit_card',
                test,
                data: {
                    number,
                    verification_value: verificationValue,
                    first_name: firstName,
                    last_name: lastName,
                    month,
                    year
                }
            }
        });
    }

    /**
     *
     * @param {string} apiKey
     */
    private setApiKey(apiKey: string) {
        this.token = Buffer.from(`${apiKey}:`).toString('base64')
    }
}
