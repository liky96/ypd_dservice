/*
 * @Author: liky
 * @Date: 2021-06-25 15:11:56
 * @LastEditTime: 2021-07-13 09:44:12
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\router\routers.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [{
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/page/login.vue'),
  },{
    path: "/",
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('@/page/home.vue')
    }]
},
// 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
{
    path: '/error',
    name: 'NotFound',
    component: () => import('@/page/404.vue')
}];

export default createRouter({
    history: createWebHashHistory(),
    routes
})