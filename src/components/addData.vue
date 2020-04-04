<template>
  <div id="addContain">
    <div id="top">
      <span class="topSpan">添加数据</span>
      <i class="el-icon-close" style="float:right;line-height:50px;margin-right:10px;color:#fff;font-size:24px;cursor:pointer" @click="closeAddData"></i>
    </div>
    <div id="systemData">
      <div class="queryDiv">
        <el-select v-model="layerState" @change="changeData">
          <el-option label="私有数据" value="0"></el-option>
          <el-option label="公有数据" value="1"></el-option>
        </el-select>
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input" style="width:200px;float:right" @keyup.enter.native="queryData"></el-input>
      </div>
      <el-table height="492" :data="layerlist" border :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize:'16px'}" :cell-style="{fontSize:'16px'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="36px">
        </el-table-column>
        <el-table-column prop="layerName" label="名称" width="315px" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="315px" align="center">
        </el-table-column>
        <el-table-column prop="type" label="图层类型" width="315px" align="center">
        </el-table-column>
        <el-table-column prop="state" label="使用状态" width="315px" align="center">
          <template slot-scope="scope">
            <div :style="{'color':scope.row.state=='已使用'?'#0000ff':'#000'}">{{ scope.row.state }}</div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="text-align:center;margin-top:20px;font-size:20px;dispaly:inline-table" background @current-change="handleCurrentChange" :page-size="8" layout="total, prev, pager, next" :total="layerLength">
      </el-pagination>
      <el-button style="float:right;margin-top:-30px;margin-right:20px" @click="addLayers">添加数据</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data () {
    return {
      layerlist: null,
      layerLength: 0,
      input: '',
      layerlist: [],
      haveLayerIds: [],
      layerGeojsons: [],
      layerNames: [],
      layerIds: [],
      layerLength: 0,
      layerState: '0'
    };
  },
  created () { },
  mounted () {
    this.getlayerlist()
  },
  watch: {
    usedIds: {
      handler: function (val, oldVal) {
        this.getlayerlist()
      },
      deep: true,
      immediate: false
    }
  },
  computed: {
    ...mapGetters({
      username: "username",
      usedIds: "usedIds"
    })
  },
  methods: {
    ...mapMutations(["SET_USEDIDS"]),
    ...mapActions(["getlayers", "getlayersState"]),
    getlayerlist () {
      var that = this;
      this.getlayers({
        data: { layerUser: 'zy' },
        callBack: res => {
          that.layerlist = res.data.user;
          that.layerLength = res.data.user.length;
          for (const key in that.layerlist) {
            if (that.layerlist[key].layerType == "point") {
              that.layerlist[key].type = "点图层"
            } else if (that.layerlist[key].layerType == "line") {
              that.layerlist[key].type = "线图层"
            } else if (that.layerlist[key].layerType == "polygon") {
              that.layerlist[key].type = "面图层"
            }
            if (that.usedIds.indexOf(that.layerlist[key].layerId) != -1) {
              that.layerlist[key].state = "已使用"
            } else {
              that.layerlist[key].state = "未使用"
            }
          }
        }
      });
    },
    getlayerlistPulice () {
      var that = this;
      console.log(that.layerState)
      this.getlayersState({
        data: { layerState: that.layerState },
        callBack: res => {
          that.layerlist = res.data.user;
          that.layerLength = res.data.user.length;
          for (const key in that.layerlist) {
            if (that.layerlist[key].layerType == "point") {
              that.layerlist[key].type = "点图层"
            } else if (that.layerlist[key].layerType == "line") {
              that.layerlist[key].type = "线图层"
            } else if (that.layerlist[key].layerType == "polygon") {
              that.layerlist[key].type = "面图层"
            }
            if (that.usedIds.indexOf(that.layerlist[key].layerId) != -1) {
              that.layerlist[key].state = "已使用"
            } else {
              that.layerlist[key].state = "未使用"
            }
          }
        }
      });
    },
    queryData () {
      if (this.input != "") {
        var that = this
        this.getlayers({
          data: { layerUser: 'zy' },
          callBack: res => {
            that.layerlist = res.data.user;
            for (let i = that.layerlist.length - 1; i >= 0; i--) {
              if (that.layerlist[i].layerName.indexOf(that.input) == -1) {
                that.layerlist.splice(i, 1);
              }
            }
            that.layerLength = that.layerlist.length;
            for (const key in that.layerlist) {
              if (that.layerlist[key].layerType == "point") {
                that.layerlist[key].type = "点图层"
              } else if (that.layerlist[key].layerType == "line") {
                that.layerlist[key].type = "线图层"
              } else if (that.layerlist[key].layerType == "polygon") {
                that.layerlist[key].type = "面图层"
              }
              if (that.usedIds.indexOf(that.layerlist[key].layerId) != -1) {
                that.layerlist[key].state = "已使用"
              } else {
                that.layerlist[key].state = "未使用"
              }
            }
          }
        });
      } else {
        this.getlayerlist()
      }
    },
    changeData (val) {
      if (val == '0') {
        this.getlayerlist()
      } else {
        this.getlayerlistPulice()
      }
    },
    closeAddData () {
      this.$emit('closeData');
    },
    handleSelectionChange (val) {
      this.layerGeojsons = [];
      this.layerNames = [];
      this.layerIds = [];
      for (const key in val) {
        this.layerGeojsons.push(val[key].layerGeojson)
        this.layerNames.push(val[key].layerName)
        this.layerIds.push(val[key].layerId)
      }
    },
    addLayers () {
      this.usedIds.push(...this.layerIds)
      console.log(this.usedIds)
      this.SET_USEDIDS(this.usedIds)
      this.$emit('layers', this.layerGeojsons, this.layerNames, this.layerIds)
      this.$emit('closeData');
    },
    handleCurrentChange (val) {
      var number = 8 * (val - 1)
      var that = this;
      that.getlayers({
        data: { layerUser: 'zy', limit: 8, offset: number },
        callBack: res => {
          that.layerlist = res.data.user;
          for (const key in that.layerlist) {
            if (that.layerlist[key].layerType == "point") {
              that.layerlist[key].type = "点图层"
            } else if (that.layerlist[key].layerType == "line") {
              that.layerlist[key].type = "线图层"
            } else if (that.layerlist[key].layerType == "polygon") {
              that.layerlist[key].type = "面图层"
            }
            if (that.usedIds.indexOf(that.layerlist[key].layerId) != -1) {
              that.layerlist[key].state = "已使用"
            } else {
              that.layerlist[key].state = "未使用"
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
#addContain {
  position: absolute;
  top: 70px;
  bottom: 0px;
  left: 539px;
  right: 0px;
  background-color: #fff;
  border-left: 1px solid #dddddd;
  z-index: 11;
}
#top {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: #3f8cee;
  text-align: left;
  border-left: 1px solid #dddddd;
}
#systemData {
  position: absolute;
  top: 60px;
  left: 41px;
  right: 41px;
  height: 50px;
  /* background-color: #3f8cee; */
  text-align: left;
  /* border-left: 1px solid #dddddd; */
}
.queryDiv {
  margin: 24px 0px;
}
.topSpan {
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
  line-height: 50px;
}
</style>

