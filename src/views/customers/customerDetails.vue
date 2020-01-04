<template>
  <div class="details container">
    <router-link to="/"><el-button>返回</el-button></router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link :to="'/edit/' + customer.id" class="btn btn-primary">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="el-icon-phone"> {{customer.phone}}</span></li>
      <li class="list-group-item"><span class="el-icon-message"> {{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="el-icon-phone"> {{customer.education}}</span></li>
      <li class="list-group-item"><span class="el-icon-message"> {{customer.graduationschool}}</span></li>
      <li class="list-group-item"><span class="el-icon-phone"> {{customer.profession}}</span></li>
      <li class="list-group-item"><span class="el-icon-message"> {{customer.profile}}</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  // name: 'customerdetails',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
    fetchCustomers (id) {
      this.$http.get('http://localhost:3000/users/' + id)
        .then(function (response) {
          console.log(response)
          this.customer = response.body
        })
    },
    deleteCustomer (id) {
      // console.log(id)
      this.$http.delete('http://localhost:3000/users/' + id)
        .then(function (response) {
          this.$router.push({
            path: '/',
            query: {alert: '用户删除成功!'}
          })
        })
    }
  },
  created () {
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>
