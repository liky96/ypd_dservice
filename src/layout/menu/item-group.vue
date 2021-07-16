<!--
 * @Author: liky
 * @Date: 2021-07-02 18:01:45
 * @LastEditTime: 2021-07-12 15:59:41
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\menu\item-group.vue
-->
<template>
  <div>
    <el-menu-item-group>
      <template #title>{{ group.meta.title }}</template>
        <el-menu-item v-for="(menu, index2) in group.children" :key="index2" :index="menu.name">{{
            menu.meta.title
        }}</el-menu-item>
    </el-menu-item-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemGroup",
  props: ["group"],
  setup(props) {     
    return {
      props,
    };
  },
});
</script>

<style scoped>
</style>