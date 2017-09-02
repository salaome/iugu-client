"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custumer_resource_1 = require("./resources/custumer-resource");
const subscription_resource_1 = require("./resources/subscription-resource");
class Iugu {
    constructor(apiKey) {
        this.setApiKey(apiKey);
        this.customer = new custumer_resource_1.CustomerResource(this.token);
        this.subscription = new subscription_resource_1.SubscriptionResource(this.token);
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
