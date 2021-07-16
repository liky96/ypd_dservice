<!--
 * @Author: liky
 * @Date: 2021-07-07 15:28:51
 * @LastEditTime: 2021-07-12 16:07:14
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  setup() {
    return {};
  },
  created() {
    const elem : HTMLElement = document.getElementById('Loading') as HTMLElement;
    document.body.removeChild(elem);
  },
});
</script>

<style scoped>
</style>