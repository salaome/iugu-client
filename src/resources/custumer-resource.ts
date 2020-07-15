import {
   Customer,
   PaymentMethod
} from "../iugu-interfaces";
import {IuguResouces} from "./iugu-resouces";
import * as rp from "request-promise-native";


export class CustomerResource extends IuguResouces<Customer> {
   path: string = 'customers/';

    constructor(token: string | undefined){
      super(token);
   }

   /**
    * Create a custumer payment method
    * @param {string} customer_id
    * @param {PaymentMethod} payment
    * @returns {Promise<any>}
    */
   createPaymentMethod(customer_id:string, payment: PaymentMethod):Promise<any> {
      return rp.post(`${this.$getUri()}${customer_id}/payment_methods`, {
         body: payment,
         json: true,
         headers: this.$getHeader()
      });
   }

   removePaymentMethod(customer_id:string, payment_method_id: string){
       return rp.delete(`${this.$getUri()}${customer_id}/payment_methods/${payment_method_id}`, {
           json: true,
           headers: this.$getHeader()
       });
   }

}
