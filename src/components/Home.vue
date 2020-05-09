<template>
  <el-container id="home">
    <el-aside width="240px">
      <div id="icon">
        <img
          src="static/img/earth2.png"
          width="50px"
        />
      </div>
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        margin-top="30px"
        text-color="#fff"
        font-size="26px"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/homePage">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item index="/layers">图层管理</el-menu-item>
          <el-menu-item index="/collectionData">数据采集</el-menu-item>
        </el-submenu>
        <el-menu-item index="/mainMap">
          <i class="el-icon-menu"></i>
          <span slot="title">数据展示</span>
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
        <div class="titleDiv">
          <span>一站式地图服务应用平台</span>
        </div>
        <el-dropdown
          @command="handleCommand"
          placement="bottom"
        >
          <!-- <div class="headerDiv">
            <img
              src="static/img/header.jpg"
              style="width:40px;border-radius:50%;"
            />
          </div> -->
          <div class="loginDiv">
            <img
              src="static/img/header.jpg"
              style="width:40px;border-radius:50%;vertical-align:middle;margin-right:10px"
            />
            <span>你好 {{ this.username }}</span>
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
  data () {
    return {
    };
  },
  created () { },
  mounted () { },
  computed: {
    ...mapGetters({
      username: "username"
    })
  },
  methods: {
    handleCommand (command) {
      if (command == "exit") {
        this.$router.push({
          name: "login"
        });
      } else {
        this.$router.push({
          name: "personal"
        });
      }
    }
  }
};
</script>

<style scoped>
#home {
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-image: url("/static/img/bg.jpg");
}
.el-header {
  /* background-color: #545c64; */
  color: #fff;
  line-height: 70px;
  box-shadow: 2px 2px 5px #888888;
  height: 70px !important;
}
#icon {
  height: 70px;
  text-align: left;
  margin-left: 40px;
  line-height: 114px;
  /* width: 238px; */
}
.el-aside {
  /* background-color: #545c64; */
  color: #333;
  text-align: left;
}
.titleDiv {
  text-align: left;
  font-size: 12px;
  float: left;
  font-size: 22px;
  margin-left: 40px;
}
.loginDiv {
  padding: 0px 20px;
  text-align: right;
  font-size: 18px;
  color: #fff;
  display: inline;
  line-height: 70px;
}
/* .headerDiv {
  line-height: 100px;
  display: inline;
} */
.loginDiv:hover {
  background-color: rgba(0, 0, 0, 0.025);
}
.el-main {
  padding: 0px;
}
</style>

