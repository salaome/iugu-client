"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iugu_resouces_1 = require("./iugu-resouces");
class SubscriptionResource extends iugu_resouces_1.IuguResouces {
    constructor(token) {
        super(token);
        this.path = 'subscriptions/';
    }
}
exports.SubscriptionResource = SubscriptionResource;
