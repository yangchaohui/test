<template>
  <div class="home">
    <Antv></Antv>
    <UserList></UserList>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Antv from './antv/antv'
import UserList from './customers/userList'

export default {
  data () {
    return {
    }
  },
  components: {
    UserList,
    Antv
  }
}
</script>
<style scoped>
  .home {
    padding: 20px;
  }
</style>
