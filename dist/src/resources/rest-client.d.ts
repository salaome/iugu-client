/// <reference types="request" />
import { IRest } from "./iresources";
import { Headers } from "request";
export declare abstract class RestClient<T> implements IRest {
    /**
     * Path
     */
    path: string;
    /**
     * Base Url
     * @type {string}
     */
    baseUrl: string;
    /**
     * Return Uri
     * @returns {string}
     */
    $getUri(): string;
    /**
     *
     * @returns {Headers}
     */
    $getHeader(): Headers;
    /**
     *
     * @param {T} t
     * @returns {Promise<any>}
     */
    create(t: T): Promise<any>;
    /**
     *
     * @param {string} id
     * @returns {Promise<T>}
     */
    get(id: string): Promise<T>;
    /**
     *
     * @param {string} id
     * @returns {Promise<T>}
     */
    delete(id: string): Promise<T>;
    /**
     *
     * @param {T} t
     * @returns {Promise<any>}
     */
    update(id: string, t: T): Promise<any>;
}
