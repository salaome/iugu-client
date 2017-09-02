"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const iugu_1 = require("../src/iugu");
describe('Customer specs', () => {
    let iugu;
    before(function () {
        iugu = new iugu_1.Iugu('');
    });
    it('should create, get and delete a new customer', function () {
        this.timeout(5000);
        return iugu.customer.create({
            email: "name@test.com",
            name: "user test"
        })
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.id).to.exist;
            return customer.id;
        })
            .then((id) => iugu.customer.get(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.email).to.equal('name@test.com');
            return customer.id;
        })
            .then((id) => iugu.customer.delete(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
        })
            .catch((err) => chai_1.expect(err, err).to.not.exist);
    });
});
