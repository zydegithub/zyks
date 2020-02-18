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
      <ul class="layerUl">
        <li v-for="item in layerlist" :key="item.id" @click="querylayer(item.layerId)" :class="{
            active: layerId == item.layerId
          }">
          <el-image style="width: 20px; height: 20px" src="./static/img/point.png" v-if="item.layerType=='point'"></el-image>
          <el-image style="width: 20px; height: 20px" src="./static/img/line.png" v-if="item.layerType=='line'"></el-image>
          <el-image style="width: 20px; height: 20px" src="./static/img/polygon.png" v-if="item.layerType=='polygon'"></el-image>
          <div class="spanDiv">
            {{item.showName }} ({{item.layerName}})
          </div>
          <el-dropdown @command="handleCommand" placement="bottom">
            <i class="el-icon-more-outline" style="line-height:60px;font-size:20px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="update">编辑</el-dropdown-item>
              <el-dropdown-item command="exit">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </el-card>
    <el-card class="box-card-right">
      <div slot="header" class="clearfix">
        <span class="headerSpan">图层信息</span>
        <el-button style="float: right; padding: 3px 0" type="primary" plain @click="getData">数据采集</el-button>
        <el-button style="float: right; padding: 3px 0" type="success">
          <i class="el-icon-refresh"></i>刷新
        </el-button>
        <el-button style="float: right; padding: 3px 0" type="primary" @click="addfield">
          <i class="el-icon-plus"></i>添加
        </el-button>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="ENname" label="字段名称" width="180"></el-table-column>
        <el-table-column prop="CNname" label="显示名称" width="180"></el-table-column>
        <el-table-column prop="fieldType" label="字段类型" width="180"></el-table-column>
        <el-table-column prop="fieldSitua" label="字段描述" width="180"></el-table-column>
        <el-table-column prop="operation" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="添加图层" :visible.sync="layerVisible" width="24%">
      <el-form ref="form" :model="layerForm" label-width="80px">
        <el-form-item label="图层名称">
          <el-input v-model="layerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="显示名称">
          <el-input v-model="layerForm.showname"></el-input>
        </el-form-item>
        <el-form-item label="图层类型">
          <el-select v-model="layerForm.type" placeholder="请选择图层类型">
            <el-option label="点" value="point"></el-option>
            <el-option label="线" value="line"></el-option>
            <el-option label="面" value="polygon"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图层描述">
          <el-input type="textarea" v-model="layerForm.situation"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="layerVisible = false">取 消</el-button>
        <el-button type="primary" @click="apiAddLayer">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加字段" :visible.sync="fieldVisible" width="24%">
      <el-form ref="form" :model="fieldForm" label-width="80px">
        <el-form-item label="字段名称">
          <el-input v-model="fieldForm.ENname"></el-input>
        </el-form-item>
        <el-form-item label="显示名称">
          <el-input v-model="fieldForm.CNname"></el-input>
        </el-form-item>
        <el-form-item label="字段类型">
          <el-select v-model="fieldForm.type" placeholder="请选择图层类型">
            <el-option label="数字" value="number"></el-option>
            <el-option label="文本" value="string"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字段描述">
          <el-input type="textarea" v-model="fieldForm.situation"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fieldVisible = false">取 消</el-button>
        <el-button type="primary" @click="apiAddField">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data () {
    return {
      tableData: [
      ],
      layerVisible: false,
      fieldVisible: false,
      layerForm: {
        name: "",
        showname: "",
        type: "",
        situation: ""
      },
      fieldForm: {
        ENname: "",
        CNname: "",
        type: "",
        situation: ""
      },
      layerlist: [],
      fieldlist: [],
      layerId: ''
    };
  },
  computed: {
    ...mapGetters({
      username: "username"
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.getlayerlist();
    });
  },
  methods: {
    ...mapActions(["getlayers", "addlayers", "getfields", "addfields"]),
    getlayerlist () {
      var that = this;
      this.getlayers({
        data: { layerUser: 'zy' },
        callBack: res => {
          this.layerlist = res.data.user;
        }
      });
    },
    addlayer () {
      this.layerVisible = true;
    },
    addfield () {
      if (this.layerId == "") {
        this.$Notice.error({
          title: "提示",
          desc: "请选择某个图层!",
          duration: 2
        });
      } else {
        this.fieldVisible = true;
      }
    },
    getData () {
      if (this.layerId == "") {
        this.$Notice.error({
          title: "提示",
          desc: "请选择某个图层!",
          duration: 2
        });
      } else {
        this.$router.push({
          name: 'collectionData'
        });
      }
    },
    apiAddLayer () {
      var that = this;
      this.addlayers({
        data: {
          layerName: that.layerForm.name,
          showName: that.layerForm.showname,
          layerUser: that.username,
          layerType: that.layerForm.type,
          layerIntro: that.layerForm.situation
        },
        callBack: res => {
          that.getlayerlist();
          that.layerVisible = false;
        }
      });
    },
    handleCommand (command) {
      console.log(command)
    },
    querylayer (id) {
      this.layerId = id
      this.getfields({
        data: { layerId: id },
        callBack: res => {
          this.fieldlist = res.data.user;
          console.log(this.fieldlist)
          this.tableData = this.fieldlist
        }
      });
    },
    apiAddField () {
      var that = this;
      this.addfields({
        data: {
          layerId: that.layerId,
          ENname: that.fieldForm.ENname,
          CNname: that.fieldForm.CNname,
          fieldType: that.fieldForm.type,
          fieldSitua: that.fieldForm.situation
        },
        callBack: res => {
          that.querylayer(that.layerId);
          that.fieldVisible = false;
        }
      });
    },
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
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
  width: 980px;
  height: 800px;
}
.el-dialog__header {
  text-align: left !important;
}
.el-select {
  width: 100%;
}
.layerUl .el-dropdown {
  position: absolute;
  right: 40px;
}
.layerUl .active {
  background-color: #cbe5fe;
}
.spanDiv {
  display: inline-block;
}
</style>
