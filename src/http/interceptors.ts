/*
 * @Author: liky
 * @Date: 2021-07-12 15:08:31
 * @LastEditTime: 2021-07-13 10:43:39
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\http\interceptors.ts
 */
// 首先引入axios和上一步封装的cookie方法
import axios, { AxiosInstance } from "axios";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import qs from 'qs'

const router = useRouter();

const CancelToken: any = axios.CancelToken; // axios 的取消请求

export class Interceptors {
    instance: AxiosInstance;
    constructor() {        
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_BASE_API,
            timeout: import.meta.env.VITE_TIMEOUT
        })
        this.init()
    }
    // 初始化拦截器
    init() {
        // 请求接口拦截器
        this.instance.interceptors.request.use(
            (config) => {                
                // neverCancel 配置项，允许多个请求
                if (!config.neverCancel) {
                    // 生成canalToken
                    config.cancelToken = new CancelToken((c: any) => {
                        removePending(config, c);
                    });
                }
                // 判断一下是否有token 如果有的话则把token放入请求头中
                if (sessionStorage.getItem("token")) {
                    config.headers['Authorization'] = sessionStorage.getItem("token");
                }
                let ContentType = config.method == 'post' ? 'application/x-www-form-urlencoded' : 'application/json'
                config.headers['Content-Type'] = ContentType
                config.data = config.method == 'post' ? qs.stringify(config.data) : config.data // 转为formdata数据格式                
                return config;
            },
            (err) => {
                console.error(err);
            }
        );

        // 防止重复提交 利用axios的cancelToken
        let pending: any[] = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识

        const removePending = (config: any, f?: any) => {
            const flgUrl = config.url;            
            if (pending.indexOf(flgUrl) !== -1) {
                if (f) {
                    f('取消重复请求');
                } else {
                    pending.splice(pending.indexOf(flgUrl), 1); // 删除记录
                }
            } else {
                if (f) {
                    pending.push(flgUrl);
                }
            }            
        }

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response) => {
                removePending(response.config);
                const res = response.data;
                console.log(res.code);
                
                if (!response.status.toString().startsWith("2") || res.code === -1) {
                    // 如果状态码不是2开头或者接口code返回-1 则是返回错误信息
                    ElNotification({
                        type: "warning",
                        message: "系统错误，请检查API是否正常！",
                    });
                    return;
                }
                if (res.code !== 0) {
                    if (res.code === -3) {
                        ElNotification({
                            type: "error",
                            message: "登录过期",
                        });
                        router.push("/login");
                        sessionStorage.clear();
                    } else {
                        if (res.msg) {
                            ElNotification({
                                type: "error",
                                message: res.msg,
                            });
                        }
                    }
                    return Promise.resolve(res);
                } else {
                    return res;
                }
            },
            (error) => {
                if (error.message === "Request failed with status code 500") {
                    ElNotification({
                        type: "error",
                        message: "系统错误，请检查API是否正常！",
                    });
                    return;
                }
                let code = -110;
                if (error && error.response && error.response.status) {
                    code = error.response.status;
                    // 登陆过期
                    if (code === 401 || code === -3) {
                        sessionStorage.clear();
                    }
                } else {
                    ElNotification({
                        type: "error",
                        message: error.message,
                    });
                }
                const err = { errCode: -110, errMsg: error.message || "Error" };
                return Promise.resolve(err);
            }
        );
    }
    // 返回一下
    getInterceptors() {
        return this.instance;
    }
}