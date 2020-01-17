<template>
  <div class="baseSet">
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
    <el-button type="primary" style="margin-top:40px;margin-left:160px" @click="updateBase">修改基本信息</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
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
    ...mapActions(["login"]),
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
    updateBase() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baseSet {
  text-align: left;
  margin-left: 160px;
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
