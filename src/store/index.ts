/*
 * @Author: liky
 * @Date: 2021-07-01 10:22:38
 * @LastEditTime: 2021-07-06 11:23:43
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\store\index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes from './interface'

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

const modulesFiles = import.meta.globEager('./modules/**/*.ts')
const modules: SimpleKeyValueObject = Object.keys(modulesFiles).reduce((modules: SimpleKeyValueObject, modulePath: string) => {
    const moduleName: string = modulePath.replace(/(\.\/modules\/|\.ts)/g, '')
    const value = modulesFiles[modulePath]
    modules[moduleName] = value.default
    return modules
}, {})

export default createStore<RootStateTypes>({
    modules
})

export function useStore() {
    return baseUseStore(key)
}