<template>
  <div class="myNav">
    <!-- 顶部导航组件 -->
    <div class="logo">人人微服务平台</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#17b3a3"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item clas1s="site-navbar__avatar" index="2">
        <el-dropdown :show-timeout="0" placement="bottom">
          <span class="el-button el-button--mini">
            简体中文
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>简体中文</el-dropdown-item>
            <el-dropdown-item>繁体中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item class="site-navbar__avatar" index="3">
        <el-dropdown :show-timeout="0" placement="bottom">
          <span class="el-dropdown-link navUser">Yang</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.myNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #17b3a3;
  padding: 0 20px;
}
.logo {
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
}
.navUser {
  color: #fff;
}
</style>
