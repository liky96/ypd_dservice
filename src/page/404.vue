<!--
 * @Author: liky
 * @Date: 2021-06-25 15:21:39
 * @LastEditTime: 2021-06-29 17:10:57
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\page\404.vue
-->
<template>
  <div class="ivu-exception">
    <div class="ivu-exception-img">
      <div class="ivu-exception-img-element"></div>
    </div>
    <div class="ivu-exception-content">
      <h1>404</h1>
      <div class="ivu-exception-content-desc">抱歉，你访问的页面不存在</div>
      <div class="ivu-exception-content-actions">
        <a href="/" target="_self"
          class="el-button el-button--primary el-button--small">
          <span>返回首页</span></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "page404",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.ivu-exception {
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  height: 80%;
  min-height: 500px;
  .ivu-exception-img {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1;
    &:after,
    &:before {
      content: " ";
      display: table;
    }
    .ivu-exception-img-element {
      background-image: url(../assets/images/404.svg);
      float: right;
      width: 100%;
      max-width: 430px;
      height: 360px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
  }
  .ivu-exception-content {
    flex: auto;
    h1 {
      margin-bottom: 24px;
      color: #515a6e;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }
    .ivu-exception-content-desc {
      margin-bottom: 16px;
      color: #808695;
      font-size: 20px;
      line-height: 28px;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
