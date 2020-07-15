/// <reference types="request" />
import { Headers } from "request";
import { RestClient } from "./rest-client";
export declare abstract class IuguResouces<T> extends RestClient<T> {
    token: string;
    constructor(token: string);
    /**
     *
     * @returns {string}
     */
    protected $getToken(): string;
    /**
     *
     * @returns {request.Headers}
     */
    $getHeader(): Headers;
}
