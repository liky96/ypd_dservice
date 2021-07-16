<!--
 * @Author: liky
 * @Date: 2021-06-25 15:21:39
 * @LastEditTime: 2021-07-08 16:39:15
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\page\home.vue
-->
<template>
  <div class="head-container">
    <el-input
      clearable
      v-model="value1"
      placeholder="输入名称或者描述搜索"
      style="width: 200px"
      class="filter-item"
    />
    <el-date-picker
      type="daterange"
      class="date-item"
      v-model="value2"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
    <rrOperation />
    <crudOperation />
  </div>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期" align="center"></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="center"
    ></el-table-column>
  </el-table>
  <pagination/>
</template> 

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const item = {
      date: "2016-05-02",
      name: "测试数据",
      address: "湖北省武汉市信息数据基地",
    };
    const state = reactive({
      value1: "",
      value2: "",
    });
    return {
      ...toRefs(state),
      item,
      tableData: Array(20).fill(item),
    };
  },
});
</script>

<style scoped></style>
