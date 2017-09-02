
import {Headers} from "request";
import {RestClient} from "./rest-client";

export abstract class IuguResouces<T> extends RestClient<T>{

   token:string;

   constructor(token: string){
      super();
      this.token = token;
   }

   /**
    *
    * @returns {string}
    */
   protected $getToken() :string{
     return this.token;
   }

   /**
    *
    * @returns {request.Headers}
    */
   $getHeader() :Headers{
      return {
         'Authorization': `Basic ${this.$getToken()}`,
         'Content-Type': 'application/json',
      }
   }


}


