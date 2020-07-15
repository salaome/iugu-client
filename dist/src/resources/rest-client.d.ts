/// <reference types="request" />
import { IRest } from "./iresources";
import { Headers } from "request";
export declare abstract class RestClient<T> implements IRest<T> {
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
     * @returns {Promise<T>}
     */
    create(t: T): Promise<T>;
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
     * @returns {Promise<T>}
     */
    update(id: string | undefined, t: T): Promise<T>;
}
