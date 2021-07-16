<!--
 * @Author: liky
 * @Date: 2021-07-08 16:00:20
 * @LastEditTime: 2021-07-12 11:03:42
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\components\Crud\CRUD.operation.vue
-->
<template>
  <div class="crud-opts">
    <span class="crud-opts-left">
      <!--左侧插槽-->
      <slot name="left" />
      <el-button
        class="filter-item"
        type="primary"
        size="mini"
        v-permission="{ btns: btns, name: 'add' }"
        icon="el-icon-plus"
        @click="btn_click('add')"
      >
        新增
      </el-button>
      <el-button
        :disabled="multipleSelection && multipleSelection.length !== 1"
        class="filter-item"
        size="mini"
        v-permission="{ btns: btns, name: 'edit' }"
        type="success"
        icon="el-icon-edit"
        @click="btn_click('edit')"
      >
        修改
      </el-button>
      <el-button
        :disabled="multipleSelection && multipleSelection.length === 0"
        class="filter-item"
        type="danger"
        size="mini"
        v-permission="{ btns: btns, name: 'del' }"
        icon="el-icon-delete"
        @click="btn_click('del')"
        >删除
      </el-button>
      <el-button
        class="filter-item"
        type="warning"
        size="mini"
        icon="el-icon-download"
        v-permission="{ btns: btns, name: 'export' }"
        loading
        @click="btn_click('export')"
        >导出
      </el-button>
      <!--右侧-->
      <slot name="right" />
    </span>
    <el-button-group class="crud-opts-right">
      <el-button
        size="mini"
        icon="el-icon-search"
        v-permission="{ btns: btns, name: 'search' }"
        @click="btn_click('search')"
      />
      <el-button
        v-permission="{ btns: btns, name: 'refresh' }"
        size="mini"
        icon="el-icon-refresh"
        @click="btn_click('refresh')"
      />
      <el-popover placement="bottom-end" width="150" trigger="click">
        <template #reference>
          <el-button
            size="mini"
            icon="el-icon-s-grid"
            v-permission="{ btns: btns, name: 'popover' }"
          >
            <i class="fa fa-caret-down" />
          </el-button>
        </template>
        <el-checkbox @change="btn_click('check_all')">全选</el-checkbox>
      </el-popover>
    </el-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    btns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    multipleSelection: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    const btn_click = (type: string) => {
      emit("btn_click", type);
    };
    return {
      props,
      btn_click,
    };
  },
});
</script>

<style lang="scss" scoped>
.crud-opts {
  padding: 4px 0;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  .crud-opts-right {
    margin-left: auto;
    margin-bottom: 10px;
  }
}
</style>