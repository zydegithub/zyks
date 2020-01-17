<template>
  <el-container id="home">
    <el-aside width="240px">
      <div id="icon"></div>
      <el-menu
        :default-active="this.$router.path"
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        margin-top="30px"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>工具</span>
          </template>
          <el-menu-item index="1-1">图层管理</el-menu-item>
          <el-menu-item index="1-2">数据采集</el-menu-item>
          <el-menu-item index="1-3">数据展示</el-menu-item>
        </el-submenu>
        <el-menu-item index="/mainMap">
          <i class="el-icon-menu"></i>
          <span slot="title">地图出图</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>个人页</span>
          </template>
          <el-menu-item index="/personal">个人设置</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <div class="loginDiv">
            <span>{{ this.username }}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="update">个人中心</el-dropdown-item>
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item)
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters({
      username: "username"
    })
  },
  methods: {
    handleCommand(command) {
      if (command == "exit") {
        this.$router.push({
          name: "login"
        });
      } else {
      }
    }
  }
};
</script>

<style>
#home {
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 70px;
  box-shadow: 2px 2px 5px #888888;
  height: 70px !important;
}
#icon {
  height: 70px;
  /* width: 238px; */
}
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: left;
}
.loginDiv {
  height: 70px;
  padding: 0px 20px;
}
.loginDiv:hover {
  background-color: rgba(0, 0, 0, 0.025);
}
</style>

