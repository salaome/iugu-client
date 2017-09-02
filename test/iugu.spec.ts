import { expect } from 'chai';
import 'mocha';
import {Iugu} from "../src/iugu";
import {Customer} from "../src/iugu-interfaces";

describe('Customer specs', () => {
   let iugu: Iugu;

   before(function () {
      iugu = new Iugu('');
   });


   it('should create, get and delete a new customer', function() {
      this.timeout(5000);
      return iugu.customer.create({
         email: "name@test.com",
         name: "user test"
      })
         .then((customer:Customer) => {
            expect(customer).to.exist;
            expect(customer.id).to.exist;
            return customer.id;
         })
         .then((id:string) => iugu.customer.get(id))
         .then((customer:Customer) => {
            expect(customer).to.exist;
            expect(customer.email).to.equal('name@test.com');
            return customer.id
         })
         .then((id:string) => iugu.customer.delete(id))
         .then((customer:Customer) => {
            expect(customer).to.exist;
         })
         .catch((err:any) => expect(err, err).to.not.exist);
   });

});