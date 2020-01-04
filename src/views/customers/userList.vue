<template>
  <div>
    <div>
      <!-- 判断alert是否有内容,有内容弹出 -->
      <Alert v-if="alert" :message="alert"></Alert>
      <!-- <el-button type="primary" class="btnAdd" route="/cs">添加用户</el-button> -->
      <router-link to="/addUser">
        <el-button class="btnAdd" route="/cs">添加用户</el-button>
      </router-link>
      <el-input
        type="text"
        v-model="filterInput"
        placeholder="根据姓名进行搜索">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filterBy(customers, filterInput)" :key="customer.id">
            <td>{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td>
              <!-- <el-button :route="'/userList/' + customer.id">详情</el-button> -->
              <router-link :to="'/userList/' + customer.id">
                <el-button>详情</el-button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Alert from './alert'

export default {
  name: 'userList',
  data () {
    return {
      customers: [],
      alert: '',
      filterInput: ''
    }
  },
  components: {
    Alert
  },
  methods: {
    fetchCustomers () {
      this.$http.get('http://localhost:3000/users')
        .then(function (response) {
          // console.log(response)
          this.customers = response.body
        })
    },
    filterBy (customers, value) {
      return customers.filter(function (customer) {
        return customer.name.match(value)
      })
    }
  },
  // 判断用户addUser页面的alert是否有内容,有则赋值给this.alert
  created () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
  updated () {
    this.fetchCustomers()
  }
}
</script>
<style scoped>
.btnAdd {
  margin: 20px;
}
.btnAdd {
  margin-bottom: 20px;
  background: #17b3a3;
  border-color: #17b3a3;
  color: #fff;
}
</style>
