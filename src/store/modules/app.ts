/*
 * @Author: liky
 * @Date: 2021-07-01 16:32:41
 * @LastEditTime: 2021-07-13 10:48:12
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\store\modules\app.ts
 */
import { Commit } from "vuex";
import { userLogin } from '@/api/login'
import { userState } from '@/interface/index'

export interface StateUser {

}
const state: StateUser = {

}
const getters = {

}
const mutations = {

}
const actions = {
    login(context: { commit: Commit }, params: userState) {
        return userLogin(params.userName, params.password)
    },
}
export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}