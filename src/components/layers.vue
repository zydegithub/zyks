<template>
  <div class="layerManager">
    <el-card class="box-card-left">
      <div slot="header" class="clearfix">
        <span class="headerSpan">图层管理</span>
        <el-button style="float: right; padding: 3px 0" type="success">
          <i class="el-icon-refresh"></i>刷新
        </el-button>
        <el-button style="float: right; padding: 3px 0" type="primary" @click="addlayer">
          <i class="el-icon-plus"></i>添加
        </el-button>
      </div>
      <ul>
        <li v-for="item in layerlist" :key="item.id">
          <el-image
            style="width: 20px; height: 20px"
            src="./static/img/point.png"
            v-if="item.layerType=='point'"
          ></el-image>
          <el-image
            style="width: 20px; height: 20px"
            src="./static/img/line.png"
            v-if="item.layerType=='line'"
          ></el-image>
          <el-image
            style="width: 20px; height: 20px"
            src="./static/img/polygon.png"
            v-if="item.layerType=='polygon'"
          ></el-image>
          {{item.showName }} ({{item.layerName}})
        </li>
      </ul>
    </el-card>
    <el-card class="box-card-right">
      <div slot="header" class="clearfix">
        <span class="headerSpan">图层信息</span>
        <el-button style="float: right; padding: 3px 0" type="primary" plain>数据采集</el-button>
        <el-button style="float: right; padding: 3px 0" type="success">
          <i class="el-icon-refresh"></i>刷新
        </el-button>
        <el-button style="float: right; padding: 3px 0" type="primary" @click="addfield">
          <i class="el-icon-plus"></i>添加
        </el-button>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="字段名称" width="180"></el-table-column>
        <el-table-column prop="name" label="字段类型" width="180"></el-table-column>
        <el-table-column prop="address" label="字段描述" width="280"></el-table-column>
        <el-table-column prop="name" label="操作" width="80"></el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="添加图层" :visible.sync="layerVisible" width="24%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="图层名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="图层类型">
          <el-select v-model="form.region" placeholder="请选择图层类型">
            <el-option label="点" value="point"></el-option>
            <el-option label="线" value="line"></el-option>
            <el-option label="面" value="polygon"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图层描述">
          <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="layerVisible = false">取 消</el-button>
        <el-button type="primary" @click="layerVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加字段" :visible.sync="fieldVisible" width="24%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="字段名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="字段类型">
          <el-select v-model="form.region" placeholder="请选择图层类型">
            <el-option label="字符串" value="point"></el-option>
            <el-option label="数字" value="line"></el-option>
            <el-option label="文本" value="polygon"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字段描述">
          <el-input type="textarea" v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fieldVisible = false">取 消</el-button>
        <el-button type="primary" @click="fieldVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      layerVisible: false,
      fieldVisible: false,
      form: {
        name: "",
        region: "",
        resource: ""
      },
      layerlist: []
    };
  },
  computed: {
    ...mapGetters({
      username: "username"
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.getlayerlist();
    });
  },
  methods: {
    ...mapActions(["getlayers"]),
    getlayerlist() {
      var that = this;
      this.getlayers({
        data: { layerUser: that.username },
        callBack: res => {
          this.layerlist = res.data.user;
        }
      });
    },
    addlayer() {
      this.layerVisible = true;
    },
    addfield() {
      this.fieldVisible = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card-left {
  position: absolute;
  left: 300px;
  top: 100px;
  width: 520px;
  height: 800px;
}
.headerSpan {
  float: left;
  font-size: 18px;
}
i {
  font-size: 14px;
  margin-right: 2px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  clear: both;
  border: 1px solid #e6e7e9;
  border-radius: 5px;
}
.box-card-left ul li {
  height: 60px;
  display: list-item;
  cursor: pointer;
  text-align: left;
  line-height: 60px;
  font-size: 14px;
  padding: 0 20px;
  /* border: 1px solid #e6e7e9; */
  border-bottom: 1px solid #e6e7e9;
}
li:last-child {
  border-bottom: 0px solid #e6e7e9;
}
li:hover {
  /* background: #eee; */
  background-color: #cbe5fe;
}
.box-card-right {
  position: absolute;
  left: 840px;
  top: 100px;
  width: 780px;
  height: 800px;
}
.el-dialog__header {
  text-align: left !important;
}
.el-select {
  width: 100%;
}
</style>
