"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const custumer_resource_1 = require("../../src/resources/custumer-resource");
describe('Customer specs', () => {
    let resource;
    before(function () {
        resource = new custumer_resource_1.CustomerResource();
        resource.setApiKey('7b39d6d2bcafc22abe9b6d519994929a');
    });
    it('should create, get and delete a new customer', function () {
        this.timeout(5000);
        return resource.create({
            email: "name@test.com",
            name: "user test"
        })
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.id).to.exist;
            return customer.id;
        })
            .then((id) => resource.get(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
            chai_1.expect(customer.email).to.equal('name@test.com');
            return customer.id;
        })
            .then((id) => resource.delete(id))
            .then((customer) => {
            chai_1.expect(customer).to.exist;
        })
            .catch((err) => chai_1.expect(err, err).to.not.exist);
    });
});
