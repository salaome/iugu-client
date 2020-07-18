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
        return rp.post(`${this.subscription.baseUrl}payment_token`, {
            headers: {'Content-Type': 'application/json'},
            json: true,
            body: {
                account_id: accountId,
                method: 'credit_card',
                test: test,
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

    charge(customerId: string, token: string, payer: any, orderId: string, price: number) {
        let body: any = {
            customer_id: customerId,
            token: token,
            email: payer.email,
            order_id: orderId,
            items: [
                {
                    description: 'Fatura Salao.Me',
                    quantity: 1,
                    price_cents: price
                }
            ]
        }

        if (true) {
            body['method'] = 'bank_slip';
            body['restrict_payment_method'] = true;
            body['bank_slip_extra_days'] = 30;
            body['payer'] = payer;
        }

        return rp.post(`${this.subscription.baseUrl}charge`, {
            headers: this.customer.$getHeader(),
            json: true,
            body: body
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
