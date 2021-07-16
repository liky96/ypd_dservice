<!--
 * @Author: liky
 * @Date: 2021-06-25 15:28:04
 * @LastEditTime: 2021-07-07 16:09:35
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\layout\elHeade.vue
-->
<template>
  <div class="header-bar">
    <div class="header-logo"></div>
    <div class="header-sets">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="item in HeadMenu"
          :key="item.path"
          :index="item.path"
          >{{ item.title }}</el-menu-item
        >
        <el-dropdown style="vertical-align: middle" @command="handleCommand">
          <div class="user-avatar">
            <el-avatar :size="30" :src="Avat"></el-avatar>
            <div style="margin-left: 15px">name</div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import Avat from "@/assets/images/avatar.png";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

export default defineComponent({
  name: "ElHeade",
  props: ["mlist"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const activeIndex = computed(() => store.getters.menuIndex);
    const HeadMenu = computed(() => store.getters.HeadMenu);
    // onMounted(() => {
    //   console.log("1111111");

    //   store.dispatch("setMenuIndex");
    // });

    const handleCommand = (command: string) => {
      if (command === "logout") {
        router.push("/login");
        sessionStorage.clear();
        ElNotification({
          type: "success",
          message: "退出登录成功",
        });
      }
    };
    const handleSelect = (key: string) => {
      if (key !== activeIndex.value) store.dispatch("setMenuIndex", key);
    };
    return {
      Avat,
      props,
      activeIndex,
      HeadMenu,
      handleCommand,
      handleSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-bar {
  background: url(../assets/images/map.png) no-repeat;
  display: flex;
  justify-content: space-between;
  .header-logo {
    background: url(../assets/images/logo1.png) no-repeat;
    background-size: contain;
    background-position: center;
    width: 410px;
    height: 60px;
  }
  .header-sets {
    flex: 1;
    .el-menu {
      background-color: transparent;
      float: right;
      .el-menu-item {
        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.5);
        }
        color: #fff;
      }
      .is-active {
        background-color: rgba($color: #000000, $alpha: 0.5);
        // color: #303133;
        border-bottom: none;
      }
      .user-avatar {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 58px;
        padding: 0 12px;
      }
    }
  }
}
</style>
