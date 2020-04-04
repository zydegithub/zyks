<template>
  <div id="bodyContain">
    <div id="top">
      <span class="topSpan">分级渲染</span>
      <i class="el-icon-close" style="float:right;line-height:50px;margin-right:10px;color:#fff;font-size:24px;cursor:pointer" @click="closeUnique"></i>
    </div>
    <div id="contain">
      <span style="line-height:20px">使用一个数值类型的字段值分类绘制</span>
      <el-form ref="form" label-width="80px">
        <el-form-item label="值字段">
          <el-select v-model="field" placeholder="请选择字段">
            <el-option v-for="item in fields" :key="item.id" :label="item.CNname" :value="item.CNname"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类">
          <el-select v-model="classNumber" placeholder="请选择字段">
            <el-option v-for="item in numbers" :key="item.id" :label="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="style-item">样式
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
          <colorBand ref="colorBand" @change="colorBandChange" :colorList="colorList"></colorBand>
        </div>
      </div>
      <div class="tableContain">
        <el-table height="420" :data="fieldList" border :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize:'16px'}" :cell-style="{fontSize:'16px'}" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="36px">
          </el-table-column>
          <el-table-column prop="color" label="符号" width="80px" align="center">
            <template slot-scope="scope">
              <div class="colorDiv" :style="{background:colorRandomArr[scope.$index]}"></div>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="范围" width="134px" align="center">
            <template slot-scope="{row,$index}">
              <el-input v-model="row.value" v-if="currentEdit === $index" @keyup.enter.native="finishEditClick()"></el-input>
              <span v-else @click="EditClick($index)">{{row.value}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="number" label="个数" width="80px" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div style="margin-top:10px;">
        <el-button @click="addAllValue">添加所有值</el-button>
        <el-button @click="removeAllValue">全部移除</el-button>
        <el-button @click="removeValue" :disabled="flag">移除</el-button>
      </div>
      <div style="margin-top:10px;text-align:center">
        <el-button @click="cancel" type="primary" plain style="width:120px">取消</el-button>
        <el-button @click="isRender" type="primary" plain style="width:120px">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ColorBand from "./ColorBand";
import { GradientColor } from '@/utils/color';
export default {
  data () {
    return {
      fieldList: [],
      field: "",
      classNumber: 5,
      layerGeojson: "",
      layerType: "",
      layerName: "",
      fields: [],
      flag: true,
      fieldValues: [],
      colorRandomArr: [],
      selectIds: [],
      classifyArr: [],
      showColorBand: true,
      labelType: '1',
      currentEdit: -1,
      isEdit: false,
      numbers: [{
        value: 1
      }, {
        value: 2
      }, {
        value: 3
      }, {
        value: 4
      }, {
        value: 5
      }, {
        value: 6
      }, {
        value: 7
      }, {
        value: 8
      }, {
        value: 9
      }, {
        value: 10
      },],
      colorList: [
        // 色带颜色数组
        ['#000100', '#007d00'],
        ['#000001', '#00007d'],
        ['#ffe9d4', '#7d0000'],
        ['#000200', '#00f900'],
        ['#000002', '#0000f9'],
        ['#810000', '#fc0000'],
        ['#027f00', '#f90300'],
        ['#eeeeee', '#050505'],
        ['#ff0200', '#fff900'],
        ['#02fd00', '#f90600'],
        ['#f0efa2', '#0c22ac']
      ]
    };
  },
  created () { },
  mounted () {
    this.querylayer(this.usedId)
  },
  props: {
    map: Object,
  },
  watch: {
    newgeojson: {
      handler: function (val, oldVal) {
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
    querylayer (id) {
      var that = this
      this.getfields({
        data: { layerId: id },
        callBack: res => {
          res.data.user.forEach(element => {
            if (element.fieldType == "number") {
              that.fields.push(element)
            }
          });
          that.field = that.fields[0].CNname
        }
      });
      this.getlayersId({
        data: { layerId: id },
        callBack: res => {
          that.layerGeojson = JSON.parse(res.data.user[0].layerGeojson);
          that.layerName = res.data.user[0].layerName;
          that.layerType = res.data.user[0].layerType;
        }
      })
    },
    addAllValue () {
      this.fieldValues = []
      this.fieldList = []
      this.layerGeojson.features.forEach(element => {
        this.fieldValues.push(element.properties[this.field])
      });
      if (!this.isEdit) this.statisticalFieldNumber(this.fieldValues)
      for (let index = 0; index < this.classNumber; index++) {
        var i = 0
        for (let index2 = 0; index2 < this.fieldValues.length; index2++) {
          if (index == this.classNumber - 1) {
            if (this.fieldValues[index2] >= this.classifyArr[(index * 2)] && this.fieldValues[index2] <= this.classifyArr[(index * 2) + 1]) {
              i++
            }
          } else {
            if (this.fieldValues[index2] >= this.classifyArr[(index * 2)] && this.fieldValues[index2] < this.classifyArr[(index * 2) + 1]) {
              i++
            }
          }
        }
        var row = {
          value: this.classifyArr[(index * 2)].toFixed(2) + " - " + this.classifyArr[(index * 2) + 1].toFixed(2),
          number: i
        }
        this.fieldList.push(row)
      }
      if (this.labelType == '1') {
        this.createRandomColor(this.classNumber, this.$refs.colorBand.colorBandIndex)
      } else {
        this.colorRandomArr = this.getRandomColor(this.classNumber)
      }
    },
    removeAllValue () {
      this.fieldList = []
    },
    createRandomColor (step, number) {
      var color_star = this.colorList[number][0];
      var color_end = this.colorList[number][1];
      this.colorRandomArr = new GradientColor(color_star, color_end, step);
    },
    getRandomColor (step) {
      var colorArr = [];
      for (var i = 0; i < step; i++) {
        var hex = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        colorArr.push(hex);
      }
      return colorArr;
    },
    colorBandChange (val) {
      this.createRandomColor(this.fieldList.length, val)
    },
    statisticalFieldNumber (arr) {
      var number = []
      this.classifyArr = []
      arr.forEach(element => {
        number.push(parseFloat(element))
      });
      var max = Math.max.apply(Math, number);
      var min = Math.min.apply(Math, number);
      var rowNumber = (max - min) / this.classNumber
      for (let index = 1; index <= this.classNumber; index++) {
        if (index == 1) {
          this.classifyArr.push(min)
          this.classifyArr.push(min + rowNumber * index)
        } else if (index == this.classNumber) {
          this.classifyArr.push((min + rowNumber * (index - 1)) + 1)
          this.classifyArr.push(max)
        } else {
          this.classifyArr.push((min + rowNumber * (index - 1)) + 1)
          this.classifyArr.push(min + rowNumber * index)
        }
      }
    },
    isRender () {
      var expression = this.getUniqueExpression(this.field)
      if (this.layerType == "point") {
        this.map.setPaintProperty(this.layerName, 'circle-color', expression);
      } else if (this.layerType == "line") {
        this.map.setPaintProperty(this.layerName, 'line-color', expression);
      } else if (this.layerType == "polygon") {
        this.map.setPaintProperty(this.layerName, 'fill-color', expression);
      }
    },
    cancel () {
      this.$emit('closeClassify');
    },
    // 唯一值渲染
    getUniqueExpression (field) {
      var temp = this.unique(this.fieldValues)
      var expression = ['match', ['get', field]]
      for (let i = 0; i < this.colorRandomArr.length; i++) {
        for (let index = 0; index < temp.length; index++) {
          if (this.colorRandomArr.length - 1 == i) {
            if (temp[index] >= this.classifyArr[i * 2] && temp[index] <= this.classifyArr[(i * 2) + 1]) {
              expression.push(temp[index], this.colorRandomArr[i])
            }
          } else {
            if (temp[index] >= this.classifyArr[i * 2] && temp[index] < this.classifyArr[(i * 2) + 1]) {
              expression.push(temp[index], this.colorRandomArr[i])
            }
          }
        }
      }
      expression.push('rgba(0,0,0,0)')
      return expression
    },
    unique (array) {
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    },
    typeChange (val) {
      if (val == '2') {
        this.showColorBand = false
      } else {
        this.showColorBand = true
      }
    },
    removeValue () {
      this.selectIds.forEach(element => {
        for (const key in this.fieldList) {
          if (this.fieldList[key].value == element) {
            this.fieldList.splice(key, 1)
          }
          if (this.fieldValues[key] == element) {
            this.fieldValues.splice(key, 1)
          }
        }
        this.colorRandomArr.splice(0, 1)
      });
    },
    handleSelectionChange (val) {
      if (val.length != 0) {
        this.flag = false
        this.selectIds = []
        for (const key in val) {
          this.selectIds.push(val[key].value)
        }
      } else {
        this.flag = true
      }
    },
    EditClick (scope) {
      this.currentEdit = scope;
    },
    // 完成
    finishEditClick () {
      this.isEdit = true
      var number = this.fieldList[this.currentEdit].value.indexOf('-')
      var number1 = parseFloat(this.fieldList[this.currentEdit].value.substring(0, number - 1))
      var number2 = parseFloat(this.fieldList[this.currentEdit].value.substring(number + 1))
      this.classifyArr[this.currentEdit * 2] = number1
      this.classifyArr[(this.currentEdit * 2) + 1] = number2
      this.classifyArr[(this.currentEdit + 1) * 2] = number2 + 0.01
      this.addAllValue()
      this.currentEdit = -1
      this.isEdit = false
    },
    closeUnique () {
      this.$emit('closeClassify');
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

