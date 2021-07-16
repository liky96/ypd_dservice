<!--
 * @Author: liky
 * @Date: 2021-07-07 16:22:28
 * @LastEditTime: 2021-07-12 16:03:58
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\elBread.vue
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="isBread" :to="{ path: toPath }">{{
      title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const isBread = computed(() => {
      return router.currentRoute.value.name != store.getters.homeName;
    });
    const toPath = router.currentRoute.value.path;
    const title = router.currentRoute.value.meta.title;
    return { isBread, toPath, title };
  },
});
</script>

<style scoped>
.el-breadcrumb {
  padding: 13px;
}
</style>