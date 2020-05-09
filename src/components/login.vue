<template>
  <div class="login">
    <div id="titleDiv">
      <h2>一站式地图服务应用平台</h2>
    </div>
    <div class="contain">
      <h1>用户登录</h1>
      <div class="user">
        <el-input placeholder="用户名" v-model="username">
          <template slot="prepend">
            <i class="el-icon-user"></i>
          </template>
        </el-input>
      </div>
      <div class="pwd">
        <el-input
          placeholder="密码"
          v-model="password"
          @keyup.enter.native="userLogin"
          type="password"
        >
          <template slot="prepend">
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </div>
      <Button size="large" class="btn" type="primary" @click="userLogin"
        >登录</Button
      >
      <br />
      <div style="float:left;margin-left:80px;margin-top:10px;font-size:16px;">
        <a @click="addUserDialog">注册用户</a>
      </div>
      <el-dialog title="用户注册" :visible.sync="layerVisible" width="24%">
        <el-form ref="form" :model="layerForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="layerForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="layerForm.userPwd"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="layerForm.userEmail"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="layerForm.userPhone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button style="width:200px" type="primary" @click="apiAddUser"
            >注册</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: "",
      layerForm: {
        username: "",
        userPwd: "",
        userEmail: "",
        userPhone: ""
      },
      layerVisible: false
    };
  },
  methods: {
    ...mapMutations(["SET_USERNAME"]),
    ...mapActions(["login", "addUser"]),
    userLogin() {
      var that = this;
      this.login({
        data: { username: this.username, password: this.password },
        callBack: res => {
          console.log(res);
          if (res && res.data.user !== null) {
            that.$Notice.success({
              title: "登录提示",
              desc: "账号 " + that.username + " 登录成功!",
              duration: 1.5
            });
            that.$router.push({
              name: "homePage"
            });
            that.SET_USERNAME(that.username);
          } else {
            that.$Notice.error({
              title: "登录提示",
              desc: "账号 " + that.username + " 登录失败!",
              duration: 1.5
            });
          }
        }
      });
    },
    addUserDialog() {
      this.layerVisible = true;
    },
    apiAddUser() {
      var that = this;
      this.addUser({
        data: {
          username: that.layerForm.username,
          password: that.layerForm.userPwd,
          email: that.layerForm.userEmail,
          phone: that.layerForm.userPhone
        },
        callBack: res => {
          that.layerVisible = false;
          that.$Notice.success({
            title: "添加提示",
            desc: "注册成功!",
            duration: 1.5
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#titleDiv {
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  font-size: 34px;
  color: #fff;
}
.login {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: url("/static/img/login3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.contain {
  width: 420px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 8px;
  margin-bottom: 80px;
  background-color: rgba(255, 255, 255, 0.2);
}
/* .contain:hover {
  background-color: rgba(255, 255, 255, 0.5);
} */
h1 {
  margin-top: 30px;
  color: #2d8cf0;
}
span {
  color: #2d8cf0;
  width: 100px;
}
.user {
  width: 260px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  /* background-color: antiquewhite; */
}
.pwd {
  width: 260px;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  /* background-color: antiquewhite; */
}
.btn {
  margin-top: 20px;
  width: 260px;
}
</style>
