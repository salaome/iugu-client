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
    charge(customerId, token, payer, orderId, price, description) {
        let body = {
            customer_id: customerId,
            token: token,
            email: payer.email,
            order_id: orderId,
            items: [
                {
                    description: description,
                    quantity: 1,
                    price_cents: price
                }
            ]
        };
        if (!token) {
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
    invoices(invoice_id) {
        return rp.get(`${this.customer.baseUrl}invoices/${invoice_id}`, {
            json: true,
            headers: this.customer.$getHeader()
        });
    }
    createInvoice(customer_id, email, date, description, price, cpf_cnpj, name, zip_code, number, payable_with) {
        let body = {
            customer_id: customer_id,
            email: email,
            due_date: date,
            items: [
                {
                    description: description,
                    quantity: 1,
                    price_cents: price
                }
            ],
            payable_with: payable_with,
            payer: {}
        };
        if (zip_code && number && cpf_cnpj) {
            body.payer['cpf_cnpj'] = cpf_cnpj;
            body.payer['name'] = name;
            body.payer['email'] = email;
            body.payer['address'] = {
                zip_code: zip_code,
                number: number
            };
        }
        return rp.post(`${this.subscription.baseUrl}invoices`, {
            headers: this.customer.$getHeader(),
            json: true,
            body: body
        }).promise();
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
