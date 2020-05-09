<template>
  <div id="bodyContain">
    <div id="top">
      <span class="topSpan">唯一值渲染</span>
      <i
        class="el-icon-close"
        style="float:right;line-height:50px;margin-right:10px;color:#fff;font-size:24px;cursor:pointer"
        @click="closeUnique"
      ></i>
    </div>
    <div id="contain">
      <span style="line-height:20px">使用一个字段中的唯一值进行绘制</span>
      <el-form ref="form" label-width="80px">
        <el-form-item label="值字段">
          <el-select v-model="field" placeholder="请选择字段">
            <el-option
              v-for="item in fields"
              :key="item.id"
              :label="item.CNname"
              :value="item.ENname"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="style-item">
        样式
        <div style="float:right;margin-right:64px">
          <el-radio-group v-model="labelType" @change="typeChange">
            <el-radio label="1" size="mini">渐变色</el-radio>
            <el-radio label="2" size="mini">随机色</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="color-item" v-if="showColorBand">
        <div style="float:left;">渐变色</div>
        <div id="band-box">
          <colorBand
            ref="colorBand"
            @change="colorBandChange"
            :colorList="colorList"
          ></colorBand>
        </div>
      </div>
      <div class="tableContain">
        <el-table
          height="500"
          :data="fieldList"
          border
          :header-cell-style="{
            background: '#eef1f6',
            color: '#606266',
            fontSize: '16px'
          }"
          :cell-style="{ fontSize: '16px' }"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="36px"> </el-table-column>
          <el-table-column
            prop="color"
            label="符号"
            width="98px"
            align="center"
          >
            <template slot-scope="scope">
              <div
                class="colorDiv"
                :style="{ background: colorRandomArr[scope.$index] }"
              ></div>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="值" width="98px" align="center">
          </el-table-column>
          <el-table-column
            prop="number"
            label="个数"
            width="98px"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
      <div style="margin-top:10px;">
        <el-button @click="addAllValue">添加所有值</el-button>
        <el-button @click="removeAllValue">全部移除</el-button>
        <el-button @click="removeValue" :disabled="flag">移除</el-button>
      </div>
      <div style="margin-top:10px;text-align:center">
        <el-button @click="cancel" type="primary" plain style="width:120px"
          >取消</el-button
        >
        <el-button @click="isRender" type="primary" plain style="width:120px"
          >确定</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ColorBand from "./ColorBand";
import { GradientColor } from "@/utils/color";
export default {
  data() {
    return {
      fieldList: [],
      field: "",
      layerGeojson: "",
      layerType: "",
      layerName: "",
      fields: [],
      flag: true,
      fieldValues: [],
      colorRandomArr: [],
      selectIds: [],
      showColorBand: true,
      labelType: "1",
      colorList: [
        // 色带颜色数组
        ["#000100", "#007d00"],
        ["#000001", "#00007d"],
        ["#ffe9d4", "#7d0000"],
        ["#000200", "#00f900"],
        ["#000002", "#0000f9"],
        ["#810000", "#fc0000"],
        ["#027f00", "#f90300"],
        ["#eeeeee", "#050505"],
        ["#ff0200", "#fff900"],
        ["#02fd00", "#f90600"],
        ["#f0efa2", "#0c22ac"]
      ]
    };
  },
  created() {},
  mounted() {
    this.querylayer(this.usedId);
  },
  props: {
    map: Object
  },
  watch: {
    newgeojson: {
      handler: function(val, oldVal) {
        try {
          this.geojson = JSON.parse(val);
        } catch (e) {
          console.log("请输入正确的geojson");
        }
      },
      deep: true,
      immediate: false
    }
  },
  components: {
    ColorBand
  },
  computed: {
    ...mapGetters({
      username: "username",
      usedIds: "usedIds",
      usedId: "usedId"
    })
  },
  methods: {
    ...mapMutations(["SET_USEDIDS"]),
    ...mapActions(["getfields", "getlayersId"]),
    querylayer(id) {
      this.getfields({
        data: { layerId: id },
        callBack: res => {
          this.fields = res.data.user;
          this.field = this.fields[0].CNname;
        }
      });
      this.getlayersId({
        data: { layerId: id },
        callBack: res => {
          this.layerGeojson = JSON.parse(res.data.user[0].layerGeojson);
          this.layerName = res.data.user[0].layerName;
          this.layerType = res.data.user[0].layerType;
        }
      });
    },
    addAllValue() {
      this.fieldValues = [];
      this.fieldList = [];
      this.layerGeojson.features.forEach(element => {
        this.fieldValues.push(element.properties[this.field]);
      });
      debugger;
      for (const key in this.statisticalFieldNumber(this.fieldValues)) {
        var row = {
          value: key,
          number: this.statisticalFieldNumber(this.fieldValues)[key]
        };
        this.fieldList.push(row);
      }
      if (this.labelType == "1") {
        this.createRandomColor(
          this.fieldList.length,
          this.$refs.colorBand.colorBandIndex
        );
      } else {
        this.colorRandomArr = this.getRandomColor(this.fieldList.length);
      }
    },
    removeAllValue() {
      this.fieldList = [];
    },
    createRandomColor(step, number) {
      var color_star = this.colorList[number][0];
      var color_end = this.colorList[number][1];
      this.colorRandomArr = new GradientColor(color_star, color_end, step);
    },
    getRandomColor(step) {
      var colorArr = [];
      for (var i = 0; i < step; i++) {
        var hex =
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")";
        colorArr.push(hex);
      }
      return colorArr;
    },
    colorBandChange(val) {
      this.createRandomColor(this.fieldList.length, val);
    },
    statisticalFieldNumber(arr) {
      return arr.reduce(function(prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
      }, {});
    },
    isRender() {
      var expression = this.getUniqueExpression(this.field);
      if (this.layerType == "point") {
        this.map.setPaintProperty(this.layerName, "circle-color", expression);
      } else if (this.layerType == "line") {
        this.map.setPaintProperty(this.layerName, "line-color", expression);
      } else if (this.layerType == "polygon") {
        this.map.setPaintProperty(this.layerName, "fill-color", expression);
      }
    },
    cancel() {
      this.$emit("closeUnique");
    },
    // 唯一值渲染
    getUniqueExpression(field) {
      var expression = ["match", ["get", field]];
      for (let i = 0; i < this.colorRandomArr.length; i++) {
        expression.push(this.fieldList[i].value, this.colorRandomArr[i]);
      }
      expression.push("rgba(0,0,0,0)");
      return expression;
    },
    typeChange(val) {
      if (val == "2") {
        this.showColorBand = false;
      } else {
        this.showColorBand = true;
      }
    },
    removeValue() {
      this.selectIds.forEach(element => {
        for (const key in this.fieldList) {
          if (this.fieldList[key].value == element) {
            this.fieldList.splice(key, 1);
          }
          if (this.fieldValues[key] == element) {
            this.fieldValues.splice(key, 1);
          }
        }
        this.colorRandomArr.splice(0, 1);
      });
    },
    handleSelectionChange(val) {
      if (val.length != 0) {
        this.flag = false;
        this.selectIds = [];
        for (const key in val) {
          this.selectIds.push(val[key].value);
        }
      } else {
        this.flag = true;
      }
    },
    closeUnique() {
      this.$emit("closeUnique");
    }
  }
};
</script>

<style scoped>
#bodyContain {
  position: absolute;
  top: 70px;
  bottom: 0px;
  left: 539px;
  width: 400px;
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
.topSpan {
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
  line-height: 50px;
}
#contain {
  position: absolute;
  top: 70px;
  left: 30px;
  right: 30px;
  font-size: 16px;
  text-align: left;
}
.color-item {
  height: 54px;
  line-height: 30px;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.style-item {
  padding-bottom: 14px;
  /* border-bottom: 1px solid #ddd; */
}
#band-box {
  float: right;
}
.colorDiv {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 auto;
}
</style>

