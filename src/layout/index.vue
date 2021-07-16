<!--
 * @Author: liky
 * @Date: 2021-06-25 15:21:03
 * @LastEditTime: 2021-07-12 15:55:28
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\index.vue
-->
<template>
  <el-container class="layout">
    <el-header class="my-header"><ElHeade /></el-header>
    <el-container class="content">
      <el-aside width="200px"><ElSide :menuList="menuList" /></el-aside>
      <el-container>
        <el-header class="tag-nav-wrapper"><ElBread/></el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
        <el-footer><ElFoote /></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import ElSide from "./elSide.vue";
import ElHeade from "./elHeade.vue";
import ElFoote from "./elFoote.vue";
import ElBread from "./elBread.vue";
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/index";

export default defineComponent({
  components: { ElSide, ElHeade, ElFoote, ElBread },
  setup() {
    const store = useStore();
    const menuList = computed(() => store.getters.menuList);
    const tagNavList = computed(() => store.getters.tagNavList);
    return {
      menuList,
      tagNavList,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .content {
    height: calc(100% - 60px);
    .el-aside {
      background-color: rgb(238, 241, 246);
      .el-menu {
        height: 100%;
      }
    }
    .tag-nav-wrapper {
      padding: 0;
      height: 40px !important;
      border-bottom: 1px solid #d8dce5;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    }
  }
  .my-header {
    text-align: right;
    font-size: 12px;
    line-height: 60px;
    background-color: #50af9e;
    overflow: hidden;
  }
  .el-footer {
    text-align: center;
    height: 40px !important;
    line-height: 40px;
    border-top: 1px solid #e7eaec;
  }
}
</style>
