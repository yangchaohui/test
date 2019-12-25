<template>
  <div class="rightCon">
    <breadcrumb class="breadcrumb"></breadcrumb>
    <!-- 右侧内容组件 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb'
import MyForm from '@/views/user/myForm'

export default {
  components: {
    MyForm,
    Breadcrumb
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.rightCon {
  background: #f5f5f5;
  float: left;
  flex: 1;
}
.breadcrumb {
    background: #fff;
    -moz-box-shadow:0px 1px 1px #ddd;
    -webkit-box-shadow:0px 1px 1px #ddd;
    box-shadow:0px 1px 1px #ddd;
    padding: 10px;
}
</style>
