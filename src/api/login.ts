/*
 * @Author: liky
 * @Date: 2021-07-13 10:02:26
 * @LastEditTime: 2021-07-13 10:09:45
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\api\login.ts
 */
import http from "@/http/index";


export const userLogin = (username: string | Array<verify>, password: string | Array<verify>) => {
    return http.request({
        url: "get_token",
        method: "post",
        data: {
            username,
            password
        }
    })
}