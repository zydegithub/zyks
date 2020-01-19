<template>
  <div class="baseSet">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="基本设置">
        <div>
          <span class="title">基本设置</span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <div class="stitle">
          <span>昵称</span>
          <el-input v-model="data.username" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>邮箱</span>
          <el-input v-model="data.email" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>电话</span>
          <el-input v-model="data.phone" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>地址</span>
          <el-input v-model="data.address" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>简介</span>
          <el-input v-model="data.introduction" size="medium" type="textarea" placeholder="请输入内容"></el-input>
        </div>
        <el-button
          type="primary"
          style="margin-top:40px;margin-left:160px"
          @click="updateBase"
        >修改基本信息</el-button>
      </el-tab-pane>
      <el-tab-pane label="安全设置">
        <div>
          <span class="title">安全设置</span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <div class="stitle">
          <span>原始密码</span>
          <el-input v-model="data.updatepassword" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>新密码</span>
          <el-input v-model="data.newpassword" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <div class="stitle">
          <span>确定密码</span>
          <el-input v-model="data.confirmpassword" size="medium" placeholder="请输入内容"></el-input>
        </div>
        <el-button
          type="primary"
          style="margin-top:40px;margin-left:160px"
          @click="updateSafe"
        >修改安全信息</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      tabPosition: "left",
      data: []
    };
  },
  computed: {
    ...mapGetters({
      username: "username"
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.userLogin();
    });
  },
  methods: {
    ...mapActions(["login", "editUser"]),
    userLogin() {
      if (this.username) {
        var that = this;
        this.login({
          data: { username: that.username },
          callBack: res => {
            that.data = res.data.user;
          }
        });
      }
    },
    updateBase() {
      if (this.data.username != "") {
        var that = this;
        that.editUser({
          data: {
            id: that.data.id,
            username: that.data.username,
            email: that.data.email,
            phone: that.data.phone,
            address: that.data.address,
            introduction: that.data.introduction
          },
          callBack: res => {
            that.$Notice.success({
              title: "修改提示",
              desc: "账号 " + that.username + " 信息修改成功!",
              duration: 1.5
            });
          }
        });
      } else {
        that.$Notice.error({
          title: "修改提示",
          desc: "昵称不能为空!",
          duration: 1.5
        });
      }
    },
    updateSafe() {
      if (
        this.data.updatepassword != "" &&
        this.data.newpassword != "" &&
        this.data.confirmpassword != ""
      ) {
        var that = this;
        this.login({
          data: { username: that.username, password: that.data.updatepassword },
          callBack: res => {
            if (res.data.user) {
              if (that.data.newpassword == that.data.confirmpassword) {
                that.editUser({
                  data: {
                    id: that.data.id,
                    username: that.username,
                    password: that.data.newpassword
                  },
                  callBack: res => {
                    that.$Notice.success({
                      title: "修改提示",
                      desc: "账号 " + that.username + " 密码修改成功!",
                      duration: 1.5
                    });
                    that.data.updatepassword = "";
                    that.data.newpassword = "";
                    that.data.confirmpassword = "";
                  }
                });
              } else {
                that.$Notice.error({
                  title: "修改提示",
                  desc: "两次密码不一致!",
                  duration: 1.5
                });
              }
            } else {
              that.$Notice.error({
                title: "修改提示",
                desc: "账号密码错误!",
                duration: 1.5
              });
            }
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baseSet {
  text-align: left;
  margin-left: 80px;
  margin-top: 40px;
}
.title {
  margin-top: 20px;
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 10px;
}
.el-divider--vertical {
  height: 3em;
  margin: 0px 18px;
}
.stitle {
  margin-top: 20px;
  font-size: 14px;
}
.el-input--medium {
  width: 280px !important;
  display: block;
  margin-top: 10px;
}
</style>
