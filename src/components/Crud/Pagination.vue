<!--
 * @Author: liky
 * @Date: 2021-07-08 16:22:18
 * @LastEditTime: 2021-07-09 11:30:04
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\components\Crud\Pagination.vue
-->
<!--     :page-sizes="[10, 20, 50, 100]" sizes-->
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    style="margin-top: 10px; float: right;"
    :page-size="10"
    layout="total, prev,  pager, next"
    :total="100"
  >
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const handleSizeChange = (val: number) => {
      console.log(`每页 ${val} 条`);
    };
    const handleCurrentChange = (val: number) => {
      console.log(`当前页: ${val}`);
    };
    return {
      currentPage: ref(4),
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style scoped>
</style>