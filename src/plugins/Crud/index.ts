/*
 * @Author: liky
 * @Date: 2021-07-08 16:21:02
 * @LastEditTime: 2021-07-08 16:31:19
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\plugins\Crud\index.ts
 */
import rrOperation from "@/components/Crud/RR.operation.vue";
import crudOperation from "@/components/Crud/CRUD.operation.vue";
import pagination from "@/components/Crud/Pagination.vue"

export const curd_modules = [
    { 'name':'rrOperation', 'component': rrOperation },
    { 'name':'crudOperation', 'component': crudOperation },
    { 'name':'pagination', 'component': pagination },
];