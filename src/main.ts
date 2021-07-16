/*
 * @Author: liky
 * @Date: 2021-07-07 15:28:51
 * @LastEditTime: 2021-07-12 18:05:45
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers'
import store, { key } from './store/index'
import { components, plugins } from './plugins/element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
// 设置语言
locale.use(lang)

console.log(import.meta.env);


import { curd_modules } from './plugins/Crud'
import "./assets/css/index.scss";
import './router/index'
import { ElMessage } from 'element-plus';
import { axiosPlugin } from './plugins/axios';

const app = createApp(App)
app.directive('permission', {
    // 当被绑定的元素挂载到 DOM 中时被调用
    mounted(el, binding) {
        let { btns, name } = binding.value;
        if (btns && btns instanceof Array) {
            if (btns.indexOf(name) === -1) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(`使用方式： v-permission="{ btns: btns, name: name }`)
        }
    }
})
// 按需导入组件和插件
components.forEach((component) => {
    app.component(component.name, component)
})

curd_modules.forEach((curd_module) => {
    app.component(curd_module.name, curd_module.component)
})

plugins.forEach((plugin) => {
    app.use(plugin)
})
// 全局设置组件参数
app.config.globalProperties.$ELEMENT = { 'z-index': 3000, 'size': 'small' };
// 使用自定义字符串方式
app.provide('$message', ElMessage)
app.use(router)
app.use(store, key)
app.use(axiosPlugin)
app.mount('#app')