
import {Headers} from "request";

export interface IRest {
   $getUri() :string;
   $getHeader() :Headers
}