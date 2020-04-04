<template>
  <div class="layerManager">
    <el-card class="box-card-left">
      <div slot="header" class="clearfix">
        <span class="headerSpan">图层管理</span>
        <el-divider direction="vertical"></el-divider>
        <el-button style="float: right; marginRight:4px" type="success" @click="refreshLayer">
          <i class="el-icon-refresh"></i>刷新
        </el-button>
        <el-button style="float: right; marginRight:4px" type="primary" @click="addlayer">
          <i class="el-icon-plus"></i>添加
        </el-button>
      </div>
      <ul class="layerUl">
        <li v-for="(item,index) in layerlist" :key="item.id" @click="querylayer(item.layerId)">
          <el-image style="width: 18px; height: 18px" src="./static/img/point.png" v-if="item.layerType=='point'"></el-image>
          <el-image style="width: 22px; height: 22px" src="./static/img/line.png" v-if="item.layerType=='line'"></el-image>
          <el-image style="width: 22px; height: 22px" src="./static/img/polygon.png" v-if="item.layerType=='polygon'"></el-image>
          <div class="spanDiv">
            {{item.showName }} ({{item.layerName}})
          </div>
          <el-dropdown @command="handleCommand" placement="bottom" style="height:50px">
            <i class="el-icon-s-operation" style="line-height:70px;font-size:26px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="beforeHandleCommand(index,item.layerId,'edit')">编辑图层</el-dropdown-item>
              <el-dropdown-item :command="beforeHandleCommand(index,item.layerId,'delete')">删除图层</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <el-pagination style="font-size:20px;position:absolute;bottom:40px;right:0px;left:0px" :current-page.sync="currentPage" background @current-change="handleCurrentChange" :page-size="8" layout="total, prev, pager, next" :total="layerLength">
      </el-pagination>
    </el-card>
    <el-card class="box-card-right">
      <div slot="header" class="clearfix">
        <span class="headerSpan">图层信息</span>
        <el-divider direction="vertical"></el-divider>
        <el-button style="float: right; marginRight:4px" type="primary" plain @click="uploadData">上传数据</el-button>
        <el-button style="float: right; marginRight:4px" type="primary" plain @click="getData">数据采集</el-button>
        <el-button style="float: right; marginRight:4px" type="success" @click="refreshField">
          <i class="el-icon-refresh"></i>刷新
        </el-button>
        <el-button style="float: right; marginRight:4px" type="primary" @click="addfield">
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
          <el-input v-model="layerForm.layerName"></el-input>
        </el-form-item>
        <el-form-item label="显示名称">
          <el-input v-model="layerForm.showName"></el-input>
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
          <el-select v-model="fieldForm.fieldType" placeholder="请选择图层类型">
            <el-option label="数字" value="number"></el-option>
            <el-option label="文本" value="string"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字段描述">
          <el-input type="textarea" v-model="fieldForm.fieldSitua"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fieldVisible = false">取 消</el-button>
        <el-button type="primary" @click="apiAddField">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="editDialogVisible" width="400px" :modal="false">
      <el-form>
        <el-form-item label="字段名称:" label-width="100px">
          <el-input v-model="fieldForm.ENname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称:" label-width="100px">
          <el-input v-model="fieldForm.CNname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="字段类型" label-width="100px">
          <el-select v-model="fieldForm.fieldType">
            <el-option label="数字" value="number"></el-option>
            <el-option label="文本" value="string"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字段描述:" label-width="100px">
          <el-input v-model="fieldForm.fieldSitua" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="apiEditField">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="editLayerDialogVisible" width="400px" :modal="false">
      <el-form>
        <el-form-item label="图层名称:" label-width="100px">
          <el-input v-model="layerForm.layerName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示名称:" label-width="100px">
          <el-input v-model="layerForm.showName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="共享范围:" label-width="100px">
          <el-select v-model="layerForm.layerState">
            <el-option label="私有数据" value="0"></el-option>
            <el-option label="公有数据" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editLayerDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="apiEditLayer">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加数据" :visible.sync="dialogVisible" width="400px">
      <el-form>
        <!-- <el-form-item label="文件名称:" label-width="100px">
          <el-input v-model="shpinput" placeholder="请输入内容" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="上传数据:" label-width="100px" style="text-align:left">
          <el-upload ref="upload" class="itembtn el-button" :action="uploadShp" :on-success="uploadShpSuccess">
            <div class="el-upload__text">
              <span class="text">添加shp(zip)</span>
            </div>
            <div class="el-upload__tip" slot="tip"></div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGeoJson">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data () {
    return {
      tableData: [
      ],
      layerVisible: false,
      fieldVisible: false,
      layerForm: {
        layerName: "",
        showName: "",
        type: "",
        situation: "",
        layerState: ""
      },
      fieldForm: {
        ENname: "",
        CNname: "",
        fieldType: "",
        fieldSitua: ""
      },
      layerlist: [],
      fieldlist: [],
      fieldId: '',
      clilayerId: '',
      layerName: "",
      layerLength: 0,
      editDialogVisible: false,
      editLayerDialogVisible: false,
      currentPage: null,
      shpinput: "",
      geojson: "",
      newgeojson: "",
      dialogVisible: false,
      uploadShp: CONFIG.processServiceURL + "file/uploadShp",
    };
  },
  computed: {
    ...mapGetters({
      username: "username",
      layerId: "layerId"
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.getlayerlist();
    });
  },
  methods: {
    ...mapMutations(["SET_LAYERID"]),
    ...mapActions(["getlayers", "getlayersId", "addlayers", "dellayer", "getfields", "addfields", "delfields", "editfields", "editLayer", "editLayerName"]),
    getlayerlist () {
      var that = this;
      this.getlayers({
        data: { layerUser: 'zy', limit: 8, offset: 0 },
        callBack: res => {
          this.layerlist = res.data.user;
        }
      });
      that.getlayers({
        data: { layerUser: 'zy' },
        callBack: res => {
          that.layerLength = res.data.user.length;
        }
      });
    },
    beforeHandleCommand (index, row, command) {
      return {
        'index': index,
        'row': row,
        'command': command
      }
    },
    refreshLayer () {
      this.getlayerlist()
      this.currentPage = 1
    },
    refreshField () {
      this.querylayer(this.clilayerId)
    },
    addlayer () {
      this.layerVisible = true;
    },
    addfield () {
      if (this.clilayerId == "") {
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
      if (this.clilayerId == "") {
        this.$Notice.error({
          title: "提示",
          desc: "请选择某个图层!",
          duration: 2
        });
      } else {
        this.$router.push({
          name: 'collectionData'
        });
        this.SET_LAYERID(this.clilayerId)
      }
    },
    uploadData () {
      if (this.clilayerId == "") {
        this.$Notice.error({
          title: "提示",
          desc: "请选择某个图层!",
          duration: 2
        });
      } else {
        this.dialogVisible = true
      }
    },
    // 上传成功事件
    uploadShpSuccess (res) {
      let data = JSON.parse(res.data);
      this.newgeojson = data.geojson;
      this.getlayersId({
        data: { layerId: this.clilayerId },
        callBack: res => {
          this.layerName = res.data.user[0].layerName;
        }
      })
    },
    addGeoJson () {
      if (this.newgeojson != "") {
        this.geojson = JSON.parse(this.newgeojson)
        this.geojson.features.forEach(element => {
          element.properties['layerName'] = this.layerName
        });
        for (const key in this.geojson.features[0].properties) {
          if (this.$util.commonUtil.isNumber(this.geojson.features[0].properties[key])) {
            var fieldType = "number"
          } else {
            fieldType = "string"
          }
          var that = this;
          this.addfields({
            data: {
              layerId: that.clilayerId,
              CNname: key,
              ENname: key,
              fieldType: fieldType
            },
            callBack: res => {
            }
          });
        }
        this.dialogVisible = false
        this.$router.push({
          name: 'collectionData'
        });
        this.SET_LAYERID(this.clilayerId)
        var time = new Date()
        this.editLayer({
          data: {
            layerId: this.clilayerId,
            layerGeojson: JSON.stringify(this.geojson),
            updateTime: this.$util.commonUtil.formatUTC(time, 'YYYY-MM-dd hh:mm:ss')
          },
          callBack: res => {
            this.$Notice.success({
              title: "保存提示",
              desc: "保存成功!",
              duration: 1.5
            });
          }
        });
      }
    },
    apiAddLayer () {
      var that = this;
      var time = new Date()
      this.addlayers({
        data: {
          layerName: that.layerForm.layerName,
          showName: that.layerForm.showName,
          layerUser: that.username,
          layerType: that.layerForm.type,
          layerState: that.layerForm.layerState,
          layerIntro: that.layerForm.layerIntro,
          startTime: this.$util.commonUtil.formatUTC(time, 'YYYY-MM-dd hh:mm:ss')
        },
        callBack: res => {
          that.getlayerlist();
          that.layerVisible = false;
          that.$Notice.success({
            title: "添加提示",
            desc: "添加成功!",
            duration: 1.5
          });
        }
      });
    },
    handleCommand (command) {
      if (command.command == 'edit') {
        for (const key in this.layerlist[command.index]) {
          this.layerForm[key] = this.layerlist[command.index][key]
        }
        // this.SET_LAYERID(this.layerForm.layerId)
        this.editLayerDialogVisible = true
      } else {
        this.dellayer({
          data: {
            layerId: command.row,
          },
          callBack: res => {
            this.getlayerlist();
            this.$Notice.success({
              title: "删除提示",
              desc: "删除成功!",
              duration: 1.5
            });
          }
        });
        this.delfields({
          data: {
            layerId: command.row,
          },
          callBack: res => {
            this.querylayer(command.row);
          }
        });
      }
    },
    apiEditLayer () {
      var time = new Date()
      this.editLayerName({
        data: {
          layerId: this.clilayerId,
          layerName: this.layerForm.layerName,
          showName: this.layerForm.showName,
          layerState: this.layerForm.layerState,
          updateTime: this.$util.commonUtil.formatUTC(time, 'YYYY-MM-dd hh:mm:ss')
        },
        callBack: res => {
          this.getlayerlist();
          this.editLayerDialogVisible = false;
          this.$Notice.success({
            title: "编辑提示",
            desc: "编辑成功!",
            duration: 1.5
          });
        }
      });
    },
    querylayer (id) {
      this.clilayerId = id
      this.getfields({
        data: { layerId: id },
        callBack: res => {
          this.fieldlist = res.data.user;
          this.tableData = this.fieldlist
        }
      });
    },
    apiAddField () {
      var that = this;
      this.addfields({
        data: {
          layerId: that.clilayerId,
          ENname: that.fieldForm.ENname,
          CNname: that.fieldForm.CNname,
          fieldType: that.fieldForm.fieldType,
          fieldSitua: that.fieldForm.fieldSitua
        },
        callBack: res => {
          that.querylayer(that.clilayerId);
          that.fieldVisible = false;
          that.$Notice.success({
            title: "添加提示",
            desc: "添加成功!",
            duration: 1.5
          });
        }
      });
    },
    handleEdit (index, row) {
      this.fieldId = row.fieldId
      this.editDialogVisible = true
      for (const key in row) {
        this.fieldForm[key] = row[key]
      }
    },
    apiEditField () {
      this.editfields({
        data: {
          fieldId: this.fieldId,
          ENname: this.fieldForm.ENname,
          CNname: this.fieldForm.CNname,
          fieldType: this.fieldForm.fieldType,
          fieldSitua: this.fieldForm.fieldSitua
        },
        callBack: res => {
          this.querylayer(this.clilayerId);
          this.$Notice.success({
            title: "编辑提示",
            desc: "编辑成功!",
            duration: 1.5
          });
        }
      });
      this.editDialogVisible = false
    },
    handleDelete (index, row) {
      this.delfields({
        data: {
          fieldId: row.fieldId
        },
        callBack: res => {
          this.querylayer(this.clilayerId);
          this.$Notice.success({
            title: "删除提示",
            desc: "删除成功!",
            duration: 1.5
          });
        }
      });
      this.source = JSON.parse(this.layerlist[this.clilayerId - 1].layerGeojson)
      for (const key in this.source.features) {
        var properties = this.source.features[key].properties
        for (var key in properties) {
          delete properties[row.ENname]
        }
      }
      var strJson = JSON.stringify(this.source);
      var time = new Date()
      this.editLayer({
        data: {
          layerId: this.clilayerId,
          layerGeojson: strJson,
          updateTime: this.$util.commonUtil.formatUTC(time, 'YYYY-MM-dd hh:mm:ss')
        },
        callBack: res => { }
      });
    },
    handleCurrentChange (val) {
      var number = 8 * (val - 1)
      var that = this;
      that.getlayers({
        data: { layerUser: 'zy', limit: 8, offset: number },
        callBack: res => {
          that.layerlist = res.data.user;
        }
      });
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
  top: 120px;
  width: 520px;
  height: 760px;
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
  height: 70px;
  display: list-item;
  cursor: pointer;
  text-align: left;
  line-height: 70px;
  font-size: 17px;
  padding: 0 24px;
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
  left: 860px;
  top: 120px;
  width: 980px;
  height: 760px;
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
.el-divider--vertical {
  float: left;
  height: 2.4em;
  margin: 0px 18px;
}
</style>
