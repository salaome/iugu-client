import {IuguResouces} from "./iugu-resouces";
import {Subscription} from "../iugu-interfaces";

export class SubscriptionResource extends IuguResouces<Subscription> {

   path = 'subscriptions/'

   constructor(token: string) {
      super(token);
   }

}