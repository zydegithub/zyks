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
  font-size: 16px;
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
.el-dialog__body {
  padding: 30px 20px 0px 20px;
}
.el-card__body {
  padding: 24px;
}
#drawData .el-dialog__wrapper {
  position: fixed !important;
  top: 0px !important;
  right: 20px !important;
  bottom: auto !important;
  left: auto !important;
}
#systemData .el-table__header-wrapper {
  background-color: #dddddd !important;
}
.el-table .hidden-columns {
  display: none !important;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #fff;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
.el-form-item__label {
  text-align: left !important;
  font-size: 16px;
}
.el-form-item {
  margin-top: 20px !important;
}
.el-menu {
  background-color: rgba(0, 0, 0, 0);
  border-right: 0px;
}
.el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

element.style {
    color: #fff;
}
.el-tabs--left .el-tabs__item.is-left {
    text-align: right;
}
.el-tabs--left .el-tabs__item.is-left, .el-tabs--left .el-tabs__item.is-right, .el-tabs--right .el-tabs__item.is-left, .el-tabs--right .el-tabs__item.is-right {
    display: block;
}
.el-tabs__item{
  color: #fff!important;
}
</style>
