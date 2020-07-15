
import {Headers} from "request";
import {RestClient} from "./rest-client";

export abstract class IuguResouces<T> extends RestClient<T>{

   token:string | undefined;

   constructor(token: string | undefined){
      super();
      this.token = token;
   }

   /**
    *
    * @returns {string}
    */
   protected $getToken() :string{
     return <string>this.token;
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


