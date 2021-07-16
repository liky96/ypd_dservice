/*
 * @Author: liky
 * @Date: 2021-07-12 15:33:29
 * @LastEditTime: 2021-07-12 15:33:48
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\plugins\axios\index.ts
 */
import { App } from "vue";
import http from "@/http/index";
import { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $axios?: AxiosInstance;
    }
}

export const axiosPlugin = {
    install(app: App): void {
        app.config.globalProperties.$axios = http;
    },
};

export default axiosPlugin