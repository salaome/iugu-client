"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custumer_resource_1 = require("./resources/custumer-resource");
const subscription_resource_1 = require("./resources/subscription-resource");
const rp = require("request-promise-native");
class Iugu {
    constructor(apiKey) {
        this.setApiKey(apiKey);
        this.customer = new custumer_resource_1.CustomerResource(this.token);
        this.subscription = new subscription_resource_1.SubscriptionResource(this.token);
    }
    paymentToken(accountId, test, number, verificationValue, firstName, lastName, month, year) {
        return rp.post(`${this.subscription.baseUrl}payment_token`, {
            headers: { 'Content-Type': 'application/json' },
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
    charge(customerId, token, payer, orderId, price) {
        let body = {
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
        };
        if (true) {
            body['method'] = 'bank_slip';
            body['restrict_payment_method'] = true;
            body['bank_slip_extra_days'] = 30;
            body['payer'] = payer;
        }
        return rp.post(`${this.subscription.baseUrl}charge`, {
            headers: { 'Content-Type': 'application/json' },
            json: true,
            body: body
        });
    }
    /**
     *
     * @param {string} apiKey
     */
    setApiKey(apiKey) {
        this.token = Buffer.from(`${apiKey}:`).toString('base64');
    }
}
exports.Iugu = Iugu;
