export interface Customer {
   id?:string
   email?: string;
   name?: string;
}

export interface PaymentMethod {
   description?:string;
   token:string;
   set_as_default:boolean;
}

export interface Subscription {
   plan_identifier?:string;
   customer_id:string;
   expires_at?: string;
   only_on_charge_success?:boolean;
   payable_with?:string;
   credits_based?: boolean;
   price_cents?: number;
   credits_cycle?:number;
   credits_min?:number;
}