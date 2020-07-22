import {IRest} from "./iresources";
import {Headers} from "request";
import * as rp from "request-promise-native";

export abstract class RestClient<T> implements IRest<T> {

   /**
    * Path
    */
   path: string | undefined;

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
    * @returns {Promise<T>}
    */
   create(t: T):Promise<T> {
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
    * @returns {Promise<T>}
    */
   update(id:string | undefined, t: T):Promise<T> {
      return rp.put(this.$getUri()+id, {
         body: t,
         json: true,
         headers: this.$getHeader()
      });
   }


}
