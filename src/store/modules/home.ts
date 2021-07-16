/*
 * @Author: liky
 * @Date: 2021-07-02 17:10:19
 * @LastEditTime: 2021-07-07 16:09:58
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\store\modules\home.ts
 */
import { Commit } from "vuex";
import { MenuObj, HeadMenu } from '@/plugins/menu/index'
export interface StateHome {
    menuList: Array<any>,
    menuIndex: string,
    HeadMenu: Array<{ path: string, title: string }>
}

const state: StateHome = {
    menuList: [],
    menuIndex: '',
    HeadMenu: HeadMenu
}
const getters = {
    menuList: (state: StateHome) => state.menuList,
    menuIndex: (state: StateHome) => state.menuIndex,
    HeadMenu: (state: StateHome) => state.HeadMenu
}
const mutations = {
    SET_MENU_LIST(state: StateHome, list: Array<any>) {
        state.menuList = list;
    },
    SET_MENU_INDEX(state: StateHome, menuIndex: string) {
        state.menuIndex = menuIndex;
        sessionStorage.setItem('menuIndex', menuIndex);
    }
}
const actions = {
    setMenu(context: { commit: Commit }) {
        context.commit('SET_MENU_LIST', MenuObj[state.menuIndex]);
    },
    setMenuIndex(context: { commit: Commit }, menuIndex: string) {
        let mindex: string = "";
        if (menuIndex) {
            mindex = menuIndex;
        } else {
            mindex = sessionStorage.getItem('menuIndex') || "";
        }
        if (!mindex) mindex = Object.keys(MenuObj)[0];        
        context.commit('SET_MENU_INDEX', mindex);
        context.commit('SET_MENU_LIST', MenuObj[mindex]);
    }
}
export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}