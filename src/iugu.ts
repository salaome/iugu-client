import {CustomerResource} from "./resources/custumer-resource";
import {SubscriptionResource} from "./resources/subscription-resource";

export class Iugu {

   private token: string | undefined;

   customer: CustomerResource;
   subscription: SubscriptionResource;


   constructor(apiKey: string) {
      this.setApiKey(apiKey);
      this.customer = new CustomerResource(this.token);
      this.subscription = new SubscriptionResource(this.token);
   }

   /**
    *
    * @param {string} apiKey
    */
   private setApiKey(apiKey:string) {
      this.token = Buffer.from(`${apiKey}:`).toString('base64')
   }
}
