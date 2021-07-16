<!--
 * @Author: liky
 * @Date: 2021-06-25 15:28:18
 * @LastEditTime: 2021-07-07 16:32:30
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\elSide.vue
-->
<template>
  <el-menu uniqueOpened :default-active="activeIndex" router>
    <template v-for="(menu, i) in menuList" :key="`menu` + i">
      <el-menu-item :index="menu.name" v-if="menu.meta.type === 'M'">
        <i class="el-icon-menu"></i>
        <template #title>{{ menu.meta.title }}</template>
      </el-menu-item>
      <ItemGroup v-if="menu.meta.type === 'T'" :group="menu" />
      <SubMenu v-if="menu.meta.type === 'D'" :subMenu="menu" />
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import ItemGroup from "./menu/item-group.vue";
import SubMenu from "./menu/sub-menu.vue";

export default defineComponent({
  name: "elSide",
  props: ["menuList"],
  components: { ItemGroup, SubMenu },
  setup(props) {
    const router = useRouter();
    const activeIndex = computed(() => {
      const { name } = router.currentRoute.value;      
      return name;
    });
    return {
      props,
      activeIndex,
    };
  },
});
</script>
<style lang="scss">
.el-aside {
  .el-submenu__title {
    font-size: 13px;
  }
  .el-menu-item {
    font-size: 13px;
  }
}
</style>
