/*
 * @Author: liky
 * @Date: 2021-07-05 16:18:37
 * @LastEditTime: 2021-07-06 15:09:15
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\lib\index.ts
 */
import { useRouter } from "vue-router";
import { StateTag } from '@/store/modules/tag'
const router = useRouter();
/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = (list: Array<any>) => {
    sessionStorage.setItem('tagNaveList', JSON.stringify(list))
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
    const list = sessionStorage.getItem('tagNaveList');
    return list ? JSON.parse(list) : []
}
/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1: SimpleKeyValueObject, route2: SimpleKeyValueObject) => {
    return (route1.name === route2.name) //&& (route1.path === route2.path)
}
// 关闭主页Tags，并清除持久化操作
export const closePage = (state: StateTag, route: SimpleKeyValueObject) => {
    const nextRoute = getNextRoute(state.tagNavList, route)
    state.tagNavList = state.tagNavList.filter(item => {
        return !routeEqual(item, route)
    })
    router.push(nextRoute)
}
/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list: Array<any>, route: SimpleKeyValueObject) => {
    let res = {}
    const index = list.findIndex(item => routeEqual(item, route))
    if (index === list.length - 1) res = list[list.length - 2]
    else res = list[index + 1]
    return res
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList: Array<any>, routeItem: SimpleKeyValueObject) => {
    let len = tagNavList.length
    let res = false
    doCustomTimes(len, (index: number) => {
        if (routeEqual(tagNavList[index], routeItem)) res = true
    })
    return res
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times: number, callback: { (index: number): void; (arg0: number): void; }) => {
    let i = -1
    while (++i < times) {
        callback(i)
    }
}