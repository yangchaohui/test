<template>
  <div>
<!--    :message="alert" 中的alert是data中定义的alert；如果当前的alert有值的话才会显示（默认是空） -->
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="add container">添加用户</h1>
    <h4>用户信息</h4>
    <el-form :model="customer" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="name" v-model="customer.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input placeholder="phone" v-model="customer.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input placeholder="email" v-model="customer.email"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-input  placeholder="education" v-model="customer.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业学校" prop="graduationshool">
          <el-input placeholder="graduationschool" v-model="customer.graduationschool"></el-input>
        </el-form-item>
        <el-form-item label="职业" prop="profession">
          <el-input placeholder="profession" v-model="customer.profession"></el-input>
        </el-form-item>
        <el-form-item label="个人简历" prop="profile">
          <el-input type="textarea" v-model="customer.profile"></el-input>
        </el-form-item>
        <el-button @click="addCustomer()" type="submit" class="btn btn-primary">添加</el-button>
    </el-form>
  </div>
</template>
<script>
import Alert from './alert'

export default {
  name: 'addUser',
  data () {
    return {
      customer: {},
      alert: '',
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的电话号码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 添加用户
    addCustomer (e) {
      // console.log(e)
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        // console.log('请添加对应的信息')
        this.alert = '请添加对应的信息！'
      } else {
        // 对应表格中的 placeholder
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        }
        this.$http.post('http://localhost:3000/users', newCustomer)
          .then(function (response) {
            // console.log(response)
            // 添加用户信息后,将信息传给userList(/根目录)
            this.$router.push({
              path: '/',
              query: {alert: '用户信息添加成功!'}
            })
          })
      }
      // 阻止表单提交的时候 重新加载页面
      // e.preventDefault()
    }
  },
  components: {
    Alert
  }
}
</script>
