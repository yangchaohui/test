<template>
  <div>
    <h1 class="edit container">修改</h1>
    <form @submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简历</label>
          <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
          <textarea rows="4" class="form-control" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确定</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'addUser',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
    fetchCustome (id) {
      this.$http.get('http://localhost:3000/users/' + id)
        .then(function (response) {
          // console.log(response)
          this.customer = response.body
        })
    },
    // 添加用户
    updateCustomer (e) {
      // console.log(e)
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        console.log('请添加对应的信息')
      } else {
        // 对应表格中的 placeholder
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        }
        // put 更新时使用
        // console.log(this.$route)
        this.$http.put('http://localhost:3000/users/' + this.$route.params.id, updateCustomer)
          .then(function (response) {
            // console.log(response)
            // 添加用户信息后,将信息传给userList(/根目录)
            this.$router.push({
              path: '/',
              query: {alert: '用户信息更新成功!'}
            })
          })
      }
      // 阻止表单提交的时候 重新加载页面
      e.preventDefault()
    }
  },
  created () {
    this.fetchCustome(this.$route.params.id)
  }
}
</script>
