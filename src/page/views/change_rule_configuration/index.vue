<!--
 * @Author: liky
 * @Date: 2021-07-06 16:20:45
 * @LastEditTime: 2021-07-12 16:18:18
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\page\views\change_rule_configuration\index.vue
-->
<template>
  <div class="head-container">
    <!-- 搜索 -->
    <crudOperation
      @btn_click="btn_click"
      :btns="btns"
      :multipleSelection="multipleSelection"
    />
  </div>
  <!-- table -->
  <el-table
    :data="tableData"
    v-loading="isLoading"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column
      prop="value1"
      label="异动规则类型"
      align="center"
      width="120"
    />
    <el-table-column
      prop="value2"
      label="异动规则名称"
      align="center"
      show-overflow-tooltip
    />
    <el-table-column
      prop="value3"
      label="备注"
      align="center"
      show-overflow-tooltip
    />
  </el-table>
  <!-- 分页 -->
  <pagination />

  <!-- 弹窗 -->
  <el-dialog
    :title="dialog_title"
    v-model="dialogFormVisible"
    destroy-on-close
    @close="dialogCancel"
  >
    <el-form
      ref="formRef"
      :model="editForm"
      :rules="editRules"
      size="mini"
      label-width="120px"
    >
      <el-form-item label="异动规则类型" prop="value1">
        <el-select v-model="editForm.value1" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="异动规则名称" prop="value2">
        <el-input
          type="textarea"
          placeholder="请输入异动规则名称"
          v-model="editForm.value2"
          maxlength="120"
          show-word-limit
        />
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          type="textarea"
          placeholder="请输入备注"
          v-model="editForm.value3"
          maxlength="520"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogCancel()">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogQuery()"
          :loading="dialogFormLoading"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
  computed,
  inject,
} from "vue";
import { configurationState, configuration } from "@/interface/index";

export default defineComponent({
  setup() {
    const formRef = ref();
    const $Message = (inject('$message') as any);
    const state = reactive<configurationState>({
      tableData: [],
      isLoading: true,
      dialogFormVisible: false,
      dialog_title: "新增",
      dialogFormLoading: false,
      multipleSelection: [],
      editForm: {
        value1: "",
        value2: "",
        value3: "",
      },
      editRules: {
        value1: [
          { required: true, message: "请选择异动规则类型", trigger: "change" },
        ],
        value2: [
          { required: true, message: "请输入异动规则名称", trigger: "blur" },
        ],
      },
    });
    const btns = computed(() => ["add", "edit", "del", "search", "refresh"]);
    const options = computed(() => [
      { value: "1", label: "完整性" },
      { value: "2", label: "准确性" },
      { value: "3", label: "一致性" },
    ]);
    onMounted(() => {
      for (let i = 0; i < 10; i++) {
        let arr: configuration = {
          id: i,
          value1: "2016-05-03",
          value2: "王小虎",
          value3: "上海市普陀区金沙江路 1518 弄",
        };
        state.tableData.push(arr);
        state.isLoading = false;
      }
    });
    // btn事件
    const btn_click = (type: string) => {
      switch (type) {
        case "add":
          state.dialog_title = "新增";
          state.dialogFormVisible = true;
          break;
        case "edit":
          state.dialog_title = "修改";
          state.editForm = Object.assign(
            state.editForm,
            state.multipleSelection[0]
          );
          state.dialogFormVisible = true;
          break;
        case "del":
          break;
        case "search":
          break;
        case "refresh":
          break;
        default:
          break;
      }
    };
    // table选择
    const handleSelectionChange = (rows: Array<configuration>) => {
      state.multipleSelection = rows;
    };
    // dialog取消
    const dialogCancel = () => {
      formRef.value.resetFields();
      state.editForm.value3 = "";
      state.dialogFormVisible = false;
    };
    // dialog确定
    const dialogQuery = () => {
      formRef.value
        .validate()
        .then(async () => {
          state.dialogFormLoading = true;
          setTimeout(() => {
            state.dialogFormLoading = false;
            $Message.success("inject");
            dialogCancel();  
          }, 2000);
        })
        .catch((error: Error) => {
          console.log("error", error);
        });
    };
    return {
      ...toRefs(state),
      formRef,
      btn_click,
      handleSelectionChange,
      dialogCancel,
      dialogQuery,
      btns,
      options,
    };
  },
});
</script>

<style scoped>
</style>