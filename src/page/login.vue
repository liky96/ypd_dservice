<!--
 * @Author: liky
 * @Date: 2021-07-02 15:22:30
 * @LastEditTime: 2021-07-13 10:48:23
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\page\login.vue
-->
<template>
  <div class="login">
    <div class="login-card">
      <div class="card-left"></div>
      <el-form
        ref="formRef"
        :model="loginForm"
        :rules="loginRules"
        label-position="left"
        label-width="0px"
        class="login-form"
      >
        <h2 class="title">
          <img :src="mlogo" class="sidebar-logo" />
          <div>营配调数据核查工具</div>
        </h2>
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="账号"
            prefix-icon="el-icon-user input-icon"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
            prefix-icon="el-icon-lock input-icon"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            size="large"
            :loading="loading"
            @click="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import mlogo from "@/assets/images/logo-guowang.png";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { reactive, toRefs, ref } from "vue";
import { loginState } from "@/interface/index";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const formRef = ref();
    const state = reactive<loginState>({
      loginForm: {
        userName: "",
        password: "",
      },
      loginRules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      loading: false,
    });
    const handleLogin = () => {
      formRef.value
        .validate()
        .then(async () => {
          try {
            state.loading = true;
            store
              .dispatch("login", state.loginForm)
              .then((res) => {
                sessionStorage.setItem("token", res.result.token);
                state.loading = false;
                router.push("/");
              })
              .catch(() => {
                state.loading = false;
              });
          } catch (error) {}
        })
        .catch((error: Error) => {
          console.log("error", error);
        });
    };
    return {
      mlogo,
      ...toRefs(state),
      formRef,
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
  background-image: url("../assets/images/bg.png");
  .login-card {
    width: 750px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 25px rgba(153, 153, 153, 0.5);
    display: flex;
    align-items: center;
    .card-left {
      width: 375px;
      height: 400px;
      background-size: cover;
      background-image: url("../assets/images/zuocepeitu.png");
    }
    .login-form {
      width: 385px;
      padding: 25px 25px 5px 25px;
      .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #707070;
        line-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 45px;
          height: 45px;
          margin-right: 5px;
        }
      }
      .login-btn {
        margin-top: 20px;
        width: 100%;
        background-color: #00ada6 !important;
        color: #fff;
      }
    }
  }
}
</style>