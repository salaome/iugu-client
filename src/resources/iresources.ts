
import {Headers} from "request";

export interface IRest<T> {
   $getUri() :string;
   $getHeader() :Headers;
   create(t: T):Promise<T>;
   get(id:string): Promise<T>;
   delete(id:string): Promise<T>;
   update(id:string | undefined, t: T):Promise<T>
}