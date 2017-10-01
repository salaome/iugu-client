import {IRest} from "./iresources";
import {Headers} from "request";
import * as rp from "request-promise-native";

export abstract class RestClient<T> implements IRest {

   /**
    * Path
    */
   path:string;

   /**
    * Base Url
    * @type {string}
    */
   baseUrl: string = 'https://api.iugu.com/v1/';

   /**
    * Return Uri
    * @returns {string}
    */
   $getUri() :string{
      return this.baseUrl + this.path;
   }

   /**
    *
    * @returns {Headers}
    */
   $getHeader() :Headers {
      return {
         'Content-Type': 'application/json',
      }
   }


   /**
    *
    * @param {T} t
    * @returns {Promise<any>}
    */
   create(t: T):Promise<any> {
      return rp.post(this.$getUri(), {
         body: t,
         json: true,
         headers: this.$getHeader()
      });
   }

   /**
    *
    * @param {string} id
    * @returns {Promise<T>}
    */
   get(id:string): Promise<T> {
      return rp.get(this.$getUri()+id, {
         json: true,
         headers: this.$getHeader()
      });
   }

   /**
    *
    * @param {string} id
    * @returns {Promise<T>}
    */
   delete(id:string): Promise<T>{
      return rp.delete(this.$getUri()+id, {
         headers: this.$getHeader()
      });
   }

   /**
    *
    * @param {T} t
    * @returns {Promise<any>}
    */
   update(id:string, t: T):Promise<any> {
      return rp.put(this.$getUri()+id, {
         body: t,
         json: true,
         headers: this.$getHeader()
      });
   }


}