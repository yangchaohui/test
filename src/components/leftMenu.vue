<template>
  <div class="leftMenu">
    <!-- 左侧导航组件 -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="false"
      background-color="#263238"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span slot="title">权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/myForm">用户管理</el-menu-item>
          <el-menu-item index="1-2" route="/cs">部门管理</el-menu-item>
          <el-menu-item index="1-3" route="/addUser">角色管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">系统设置</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
      <el-menu-item index="3">
        <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">工作流程</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="3-1">用户管理</el-menu-item>
          <el-menu-item index="3-2">部门管理</el-menu-item>
          <el-menu-item index="3-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
      <el-menu-item index="4">
        <template slot="title">
        <i class="el-icon-message-solid"></i>
        <span slot="title">消息管理</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="4-1">用户管理</el-menu-item>
          <el-menu-item index="4-2">部门管理</el-menu-item>
          <el-menu-item index="4-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
      <el-menu-item index="5">
        <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">个人办公</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="4-1">用户管理</el-menu-item>
          <el-menu-item index="4-2">部门管理</el-menu-item>
          <el-menu-item index="4-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
      <el-menu-item index="6">
        <template slot="title">
        <i class="el-icon-tickets"></i>
        <span slot="title">日志管理</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="4-1">用户管理</el-menu-item>
          <el-menu-item index="4-2">部门管理</el-menu-item>
          <el-menu-item index="4-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
      <el-menu-item index="7">
        <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span slot="title">系统监控</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="4-1">用户管理</el-menu-item>
          <el-menu-item index="4-2">部门管理</el-menu-item>
          <el-menu-item index="4-3">角色管理</el-menu-item>
        </el-menu-item-group> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Msg from './msg.js'

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    menu1: function () {
      Msg.$emit('val', '1')
    },
    menu2: function () {
      Msg.$emit('val', '2')
    },
    menu3: function () {
      Msg.$emit('val', '3')
    }
  }
}
</script>
<style>
.leftMenu {
  min-width: 230px;
  background: #263238;
}
.el-submenu span, .el-menu-item span {
  color: #8a979e;
}
</style>
