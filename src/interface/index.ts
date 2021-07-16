/*
 * @Author: liky
 * @Date: 2021-07-02 15:48:05
 * @LastEditTime: 2021-07-13 10:08:00
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\interface\index.ts
 */

/*--------------------------登录--------------------------*/
export interface loginState {
    loginForm: userState;
    loginRules: userState;
    loading: boolean;
}

export interface userState {
    userName: string | Array<verify>;
    password: string | Array<verify>;
}

/*--------------------------登录--------------------------*/

export interface configurationState {
    tableData: Array<configuration>;
    isLoading: boolean;
    dialogFormVisible: boolean;
    dialog_title: string;
    dialogFormLoading: boolean;
    multipleSelection: Array<configuration>;
    editForm: configuration;
    editRules: configuration
}

export interface configuration {
    id?: number;
    value1: string | Array<verify>;
    value2: string | Array<verify>;
    value3?: string | Array<verify>;
}