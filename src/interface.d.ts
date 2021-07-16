/*
 * @Author: liky
 * @Date: 2021-07-06 11:25:11
 * @LastEditTime: 2021-07-12 14:44:05
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\interface.d.ts
 */
declare interface SimpleKeyValueObject {
    [key: string]: any
}

declare interface verify {
    required: boolean;
    message: string;
    trigger: string;
    [name: string]: any;
}
