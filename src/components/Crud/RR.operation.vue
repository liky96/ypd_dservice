<!--
 * @Author: liky
 * @Date: 2021-07-08 15:56:37
 * @LastEditTime: 2021-07-08 15:58:03
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\components\Crud\RR.operation.vue
-->
<template>
  <span>
    <el-button
      class="filter-item"
      size="mini"
      type="success"
      icon="el-icon-search"
      @click="toQuery()"
      >搜索</el-button
    >
    <el-button
      class="filter-item"
      size="mini"
      type="warning"
      icon="el-icon-refresh-left"
      @click="resetQuery()"
      >重置</el-button
    >
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const toQuery = () => {};
    const resetQuery = () => {};
    return {
      toQuery,
      resetQuery,
    };
  },
});
</script>

<style scoped>
</style>