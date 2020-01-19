<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-dialog__header {
  background-color: darkturquoise !important;
}
.el-tabs__content {
  text-align: left !important;
}
.el-button {
  padding: 8px 16px !important;
  margin-left: 10px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-left: 8px;
  font-size: 16px;
}
.el-tree-node__content {
  height: 40px;
}
i {
  font-size: 20px;
}
.popup_attr_property_box {
  font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
  margin: 2px;
  font-size: 16px;
  color: gray;
}
.el-input-group__prepend {
  padding: 0 14px !important;
}
.el-tabs__content {
  padding-left: 40px !important;
}
</style>
