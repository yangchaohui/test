<template>
  <div class="myForm">
    <el-button @click="addOrUpdateHandle()" type="success" class="add">新增</el-button>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column prop="name" label="名称" header-align="center"></el-table-column>
      <el-table-column prop="icon" label="图标" header-align="center" align="center">
        <template>
          <i class="el-icon-time"></i>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" header-align="center" align="center">
        <template slot-scope="scope">
          <el-tag type="success" size="small" class="typeTags">{{scope.row.type}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" header-align="center" align="center"></el-table-column>
      <el-table-column prop="router" label="路由" header-align="center" align="center"></el-table-column>
      <el-table-column prop="auth" label="授权标识" header-align="center"></el-table-column>
      <el-table-column
        prop="businessType"
        header-align="center"
        align="center"
        label="预警类型"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.businessType===1" type="success">OCR预警</el-tag>
          <el-tag v-if="scope.row.businessType===2" type="success">财务预警</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="addOrUpdateHandle(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate"></add-or-update>
  </div>
</template>

<script>
import AddOrUpdate from './add'
export default {
  name: 'HelloWorld',
  methods: {
    // 删除
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    // 新增 / 修改
    addOrUpdateHandle (id) {
      // debugger
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
      })
    }
  },
  components: {
    AddOrUpdate
  },
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: '权限管理1',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 1
        },
        {
          id: 2,
          name: '权限管理2',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 2
        },
        {
          id: 3,
          name: '权限管理3',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 1,
          children: [
            {
              id: 31,
              name: '权限管理3-1',
              type: '菜单',
              sort: '0',
              router: '',
              auth: '',
              businessType: 1
            },
            {
              id: 32,
              name: '权限管理3-2',
              type: '菜单',
              sort: '0',
              router: '',
              auth: '',
              businessType: 1
            }
          ]
        },
        {
          id: 4,
          name: '权限管理4',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 2
        },
        {
          id: 5,
          name: '权限管理5',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 2
        },
        {
          id: 6,
          name: '权限管理6',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 2
        },
        {
          id: 7,
          name: '权限管理7',
          type: '菜单',
          sort: '0',
          router: '',
          auth: '',
          businessType: 2
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      addOrUpdateVisible: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myForm {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 3px #ddd;
  margin: 15px;
}
.add {
  margin-bottom: 20px;
  background: #17b3a3;
  border-color: #17b3a3;
}
.typeTags {
  background: #e8f7f6;
  border-color: #d1f0ed;
  color: #17b3a3;
}
</style>
