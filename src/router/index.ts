/*
 * @Author: liky
 * @Date: 2021-06-30 09:50:52
 * @LastEditTime: 2021-07-08 09:41:44
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\router\index.ts
 */
import { RouteRecordRaw } from 'vue-router'
import router from './routers';
import store from '@/store';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { ElNotification } from 'element-plus';
const whiteList: string[] = ['/login']// no redirect whitelist

router.beforeEach(to => {
    NProgress.start();
    if (sessionStorage.getItem("token")) {
        if (to.path == "/login") {
            return true;
        } else if (to.path == "/home") {
            if (!store.getters.menuList || store.getters.menuList.length === 0) {
                store.dispatch('setMenuIndex');
            }
        } else {
            // 判断是否已经存在路由        
            if (!router.hasRoute(to.name || "")) {
                if (!store.getters.menuList || store.getters.menuList.length === 0) {
                    store.dispatch('setMenuIndex');
                }
                const fmtRouters: Array<RouteRecordRaw> = [];
                const { route, flag } = generateRoute(to, formatRouters(fmtRouters, store.getters.menuList));
                // result.flag 判断是否有匹配到的路由, false则跳转到404页面
                if (flag) {
                    router.addRoute('Layout', route);
                    return to.fullPath;
                } else {
                    return "/error";
                }
            } else {
                return true;
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            return true;
        } else {
            // ElNotification({
            //     type: 'error',
            //     title: '登录失效',
            //     message: '账号验证过期, 请重新登录'
            // })
            return "/login";
        }
    }
})

router.afterEach(() => {
    NProgress.done();
});

// 返回当前需要跳转的路由对象
const generateRoute = (to: any, list: Array<any>) => {
    let flag: boolean = false;
    let _router: any = {};
    list.forEach((item: any, i: number) => {
        let { path, children } = item;
        if (path == to.path) {
            flag = true;
            _router = item;
        } else {
            if (children) generateRoute(to, children)
        }
    });
    return { route: _router, flag };
};

// 格式化路由信息
const formatRouters = (fmtRouters: Array<RouteRecordRaw>, routers: any) => {
    routers.forEach((router: any) => {
        const { path, name, meta, component, children } = router;
        const { type } = meta;
        if (children && children.length > 0) {
            formatRouters(fmtRouters, children);
        } else {
            if (type === "M") {
                let fmRouter: any = {
                    path: path,
                    name: name,
                    meta: meta,
                    component: () => import(/* @vite-ignore */`../page/views/${component}.vue`)
                };
                fmtRouters.push(fmRouter)
            }
        }
    });
    return fmtRouters
};