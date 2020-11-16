"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iugu_resouces_1 = require("./iugu-resouces");
const rp = require("request-promise-native");
class SubscriptionResource extends iugu_resouces_1.IuguResouces {
    constructor(token) {
        super(token);
        this.path = 'subscriptions/';
    }
    suspend(subscription_id) {
        return rp.post(`${this.$getUri()}${subscription_id}/suspend`, {
            json: true,
            headers: this.$getHeader()
        });
    }
}
exports.SubscriptionResource = SubscriptionResource;
