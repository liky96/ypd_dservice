/*
 * @Author: liky
 * @Date: 2021-07-12 11:26:22
 * @LastEditTime: 2021-07-12 14:44:15
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\lib\prompt.ts
 */
import { ElMessage } from 'element-plus';
import { MessageParams } from 'element-plus/lib/el-message/src/types';

export const message = (options: MessageParams ) => {
    ElMessage(options)
}