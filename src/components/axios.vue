<template>
  <div>
    <el-button @click="addUser">添加</el-button>
    <el-button @click="queryUser">查询</el-button>
    <el-button @click="updateUser">更新</el-button>
    <el-button @click="deleteUser">删除</el-button>
    <span>{{user.username}}</span>
    <el-dialog title="添加" :visible.sync="addDialog" width="30%">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="pwd" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addhandle">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="更新" :visible.sync="updateDialog" width="30%">
      <el-form :model="form">
        <el-form-item label="编号" :label-width="formLabelWidth">
          <el-input v-model="user.id" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="user.username" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="user.password" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updateDialog = false">取 消</el-button>
        <el-button type="primary" @click="updatehandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      addDialog: false,
      updateDialog: false,
      formLabelWidth: '80px',
      name: '',
      pwd: '',
      user: {
        id: '',
        username: '',
        password: ''
      }
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    // 查询
    queryUser() {
      var that = this;
      this.$axios({
        method: 'get',
        url: 'http://localhost:7001/home',
        params: {
          username: 'zy'
        }
      })
        .then(function(response) {
          that.user = response.data.user;
          debugger;
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 删除
    deleteUser() {
      var that = this;
      this.$axios({
        method: 'delete',
        url: 'http://localhost:7001/home',
        params: {
          user_id: 140
        }
      })
        .then(function(response) {
          that.user = response.data.user;
          console.log(that.user);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateUser() {
      this.updateDialog = true;
    },
    // 更新
    updatehandle() {
      var that = this;
      this.$axios({
        method: 'patch',
        url: 'http://localhost:7001/home',
        params: that.user
      })
        .then(function(response) {
          that.user = response.data.user;
          console.log(that.user);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.updateDialog = false;
    },
    addUser() {
      this.addDialog = true;
    },
    // 添加
    addhandle() {
      var that = this;
      this.$axios({
        method: 'post',
        url: 'http://localhost:7001/home',
        params: {
          username: that.name,
          password: that.pwd
        }
      })
        .then(function(response) {
          that.user = response.data.user;
          console.log(that.user);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.addDialog = false;
    }
  }
};
</script>
<style scoped>
#myChart {
  width: 200px;
  height: 200px;
}
</style>
