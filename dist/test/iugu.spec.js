"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const iugu_1 = require("../src/iugu");
describe('Customer specs', () => {
    let iugu;
    before(function () {
        iugu = new iugu_1.Iugu('7b39d6d2bcafc22abe9b6d519994929a');
    });
    it('should create, get , update and delete a new customer', function () {
        this.timeout(5000);
        return iugu.customer.create({
            id: '',
            email: "name@test.com",
            name: "user test"
        })
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.id).to.exist;
            customer.email = 'name2@test.com';
            return customer;
        })
            .then((customer) => iugu.customer.update(customer.id, customer))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.email).to.equal('name2@test.com');
            return customer.id;
        })
            .then((id) => iugu.customer.get(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.email).to.equal('name2@test.com');
            customer.email;
            return customer;
        })
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.id).to.exist;
            return customer.id;
        })
            .then((id) => iugu.customer.delete(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
        })
            .catch((err) => chai_1.expect(err, err).to.not.exist);
    });
});
