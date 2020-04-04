<template>
  <div class="login">
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
        <el-input placeholder="密码" v-model="password" @keyup.enter.native="userLogin" type="password">
          <template slot="prepend">
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </div>
      <Button size="large" class="btn" type="primary" @click="userLogin">登录</Button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data () {
    return {
      username: "zy",
      password: "123456"
    };
  },
  methods: {
    ...mapMutations(["SET_USERNAME"]),
    ...mapActions(["login"]),
    userLogin () {
      var that = this;
      this.login({
        data: { username: this.username, password: this.password },
        callBack: res => {
          console.log(res);
          if (res) {
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: url("/static/img/timg1.jpg");
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
  background-color: rgba(255, 255, 255, 0.1);
}
.contain:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
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
