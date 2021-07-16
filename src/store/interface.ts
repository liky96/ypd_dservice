/*
 * @Author: liky
 * @Date: 2021-07-02 10:19:25
 * @LastEditTime: 2021-07-12 16:27:22
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\store\interface.ts
 */
import { StateUser } from './modules/app'
import { StateHome } from './modules/home'
export default interface RootStateTypes {
    app: StateUser,
    home: StateHome,
}