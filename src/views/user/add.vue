<template>
  <div>
    <el-dialog :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm1">
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-radio disabled v-model="radio" label="选中且禁用">菜单</el-radio>
          <el-radio disabled v-model="radio" label="禁用">按钮</el-radio>
        </el-form-item>
        <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.name" autocomplete="off" placeholder="权限管理"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" prop="menu" :label-width="formLabelWidth">
          <el-select v-model="ruleForm.menu" placeholder="一级菜单">
            <el-option label="权限管理" value="authManagement"></el-option>
            <el-option label="系统设置" value="systemSet"></el-option>
            <el-option label="工作流程" value="workflow"></el-option>
            <el-option label="消息管理" value="msgManagement"></el-option>
            <el-option label="个人办公" value="personalOffice"></el-option>
            <el-option label="日志管理" value="logManagement"></el-option>
            <el-option label="系统监控" value="systemMonitoring"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="路由" prop="router" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.router" autocomplete="off" placeholder="路由"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort" :label-width="formLabelWidth">
          <el-input-number v-model="ruleForm.sort" controls-position="right" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="图标" prop="icon" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.icon" autocomplete="off" placeholder="权限管理"></el-input>
        </el-form-item>
        <el-form-item label="授权资源" prop="resoure" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.resoure" autocomplete="off" placeholder="添加一项"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm1')">确 定</el-button>
        <el-button @click="resetForm('ruleForm1')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      radio: '选中且禁用',
      ruleForm: {
        name: '',
        menu: '',
        router: '',
        sort: '',
        icon: '',
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        menu: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      dataForm: {
        id: 0,
        roleName: '',
        remark: ''
      }
    }
  },
  methods: {
    init (id) {
      this.dialogFormVisible = true
      this.dataForm.id = id || 0
      this.$nextTick(() => {
        this.$refs['ruleForm1'].resetFields()
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 重置
    resetForm (formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].resetFields()
    }
  }
}
</script>
