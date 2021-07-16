<!--
 * @Author: liky
 * @Date: 2021-07-02 18:01:45
 * @LastEditTime: 2021-07-07 14:31:33
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\menu\sub-menu.vue
-->
<template>
  <div>
    <el-submenu :index="subMenu.name">
      <template #title
        ><i class="el-icon-message"></i>{{ subMenu.meta.title }}</template
      >
      <template
        v-for="(children, j) in subMenu.children"
        :key="`children` + j"
      >
        <el-menu-item
          :index="children.name"
          v-if="children.meta.type === 'M'"
        >
          <template #title>{{ children.meta.title }}</template>
        </el-menu-item>
        <ItemGroup v-if="children.meta.type === 'T'" :group="children" />
        <SubMenu v-if="children.meta.type === 'D'" :subMenu="children" />
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemGroup from "./item-group.vue";

export default defineComponent({
  name: "SubMenu",
  props: ["subMenu"],
  components: { ItemGroup },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>