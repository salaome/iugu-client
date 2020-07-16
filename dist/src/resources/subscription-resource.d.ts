import { IuguResouces } from "./iugu-resouces";
import { Subscription } from "../iugu-interfaces";
export declare class SubscriptionResource extends IuguResouces<Subscription> {
    path: string;
    constructor(token: string | undefined);
}
