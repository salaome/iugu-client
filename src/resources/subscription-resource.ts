import {IuguResouces} from "./iugu-resouces";
import {Subscription} from "../iugu-interfaces";
import * as rp from "request-promise-native";

export class SubscriptionResource extends IuguResouces<Subscription> {

   path = 'subscriptions/'

   constructor(token: string | undefined) {
      super(token);
   }

   suspend(subscription_id: string): Promise<any> {
      return rp.post(`${this.$getUri()}${subscription_id}/suspend`, {
         json: true,
         headers: this.$getHeader()
      });
   }

}
