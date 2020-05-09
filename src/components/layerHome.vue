<template>
  <div id="bodyContain">
    <div id="top">
      <span class="topSpan">图层编辑</span>
      <i class="el-icon-close" style="float:right;line-height:50px;margin-right:10px;color:#fff;font-size:24px;cursor:pointer" @click="closeHome"></i>
    </div>
    <div id="contain">
      <!-- <span style="line-height:20px">使用一个数值类型的字段值分类绘制</span> -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="图层名称">
          <el-input v-model="layerName" disabled style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="显示名称">
          <el-input v-model="showName" disabled style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="图层类型">
          <el-input v-model="layerType" disabled style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="共享范围">
          <el-input v-model="layerState" disabled style="width:60%"></el-input>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-form ref="form" label-width="80px">
        <el-form-item label="颜色">
          <el-color-picker v-model="color" @change="colorChange" style="position:absolute"></el-color-picker>
        </el-form-item>
        <el-form-item v-show="layerType=='polygon'" label="边框颜色">
          <el-color-picker v-model="outlineColor" @change="lineColorChange" style="position:absolute"></el-color-picker>
        </el-form-item>
        <el-form-item v-show="layerType!=='polygon'" label="宽度大小">
          <el-input-number v-model="width" @change="widthChange" :min="1" :max="30" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item v-show="layerType!=='point'" label="透明度">
          <el-input-number v-model="opacity" @change="opacityChange" :step="0.1" :min="0" :max="1" label="描述文字"></el-input-number>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <el-form ref="form" label-width="80px">
        <el-form-item label="注记">
          <el-switch v-model="isText" active-color="#13ce66" inactive-color="#DCDFE6" @change="openText">
          </el-switch>
        </el-form-item>
        <el-form-item label="注记字段">
          <el-select v-model="field" placeholder="请选择字段" @change="fieldChange">
            <el-option v-for="item in fields" :key="item.id" :label="item.CNname" :value="item.ENname"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注记大小">
          <el-input-number v-model="textFont" @change="fontChange" :min="1" :max="30" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="注记颜色">
          <el-color-picker v-model="color2" @change="color2Change"></el-color-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data () {
    return {
      field: "",
      fields: [],
      isText: false,
      layerName: "",
      showName: "",
      layerType: "",
      layerState: "",
      layerGeojson: "",
      textFont: 14,
      color2: "rgb(0,0,0)",
      color: "",
      outlineColor: "",
      width: "",
      opacity: ""
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

  },
  components: {
  },
  computed: {
    ...mapGetters({
      username: "username",
      usedIds: "usedIds",
      usedId: "usedId"
    })
  },
  methods: {
    ...mapActions(["getfields", "getlayersId"]),
    querylayer (id) {
      this.getfields({
        data: { layerId: id },
        callBack: res => {
          this.fields = res.data.user;
          this.field = this.fields[0].ENname
          this.getlayersId({
            data: { layerId: id },
            callBack: res => {
              this.layerGeojson = JSON.parse(res.data.user[0].layerGeojson);
              this.layerName = res.data.user[0].layerName;
              this.showName = res.data.user[0].showName;
              this.layerType = res.data.user[0].layerType;
              this.layerState = res.data.user[0].layerState == 0 ? "私有数据" : "公有数据";
              if (this.layerType == "point") {
                this.color = this.map.getPaintProperty(this.layerName, "circle-color");
                this.width = this.map.getPaintProperty(this.layerName, "circle-radius");
              } else if (this.layerType == "line") {
                this.color = this.map.getPaintProperty(this.layerName, "line-color");
                this.width = this.map.getPaintProperty(this.layerName, "line-width");
                this.opacity = this.map.getPaintProperty(this.layerName, "line-opacity");
              } else if (this.layerType == "polygon") {
                this.color = this.map.getPaintProperty(this.layerName, "fill-color");
                this.opacity = this.map.getPaintProperty(this.layerName, "fill-opacity");
                this.outlineColor = this.map.getPaintProperty(this.layerName, "fill-outline-color");
              }
              this.map.addLayer({
                'id': this.layerName + 'Symbol',
                'source': this.layerName,
                'type': 'symbol',
                'minzoom': 1,
                'maxzoom': 20,
                'layout': {
                  'text-size': this.textFont,
                  'symbol-placement': 'point',
                  'text-field': '{' + this.field + '}',
                  'text-offset': [0, 0.6],
                  'text-anchor': 'top',
                  'visibility': 'none'
                },
                'paint': {
                  'text-color': this.color2
                }
              })
            }
          })
        }
      });
    },
    widthChange () {
      if (this.layerType == "point") {
        this.map.setPaintProperty(this.layerName, "circle-radius", parseFloat(this.width));
      } else if (this.layerType == "line") {
        this.map.setPaintProperty(this.layerName, "line-width", parseFloat(this.width));
      } else if (this.layerType == "polygon") {
      }
    },
    colorChange () {
      if (this.layerType == "point") {
        this.map.setPaintProperty(this.layerName, "circle-color", this.color);
      } else if (this.layerType == "line") {
        this.map.setPaintProperty(this.layerName, "line-color", this.color);
      } else if (this.layerType == "polygon") {
        this.map.setPaintProperty(this.layerName, "fill-color", this.color);
      }
    },
    lineColorChange () {
      this.map.setPaintProperty(this.layerName, "fill-outline-color", this.outlineColor);
    },
    opacityChange () {
      if (this.layerType == "point") {
      } else if (this.layerType == "line") {
        this.map.setPaintProperty(this.layerName, "line-opacity", parseFloat(this.opacity));
      } else if (this.layerType == "polygon") {
        this.map.setPaintProperty(this.layerName, "fill-opacity", parseFloat(this.opacity));
      }
    },
    fieldChange () {
      this.map.setLayoutProperty(this.layerName + 'Symbol', "text-field", '{' + this.field + '}');
    },
    fontChange () {
      this.map.setLayoutProperty(this.layerName + 'Symbol', "text-size", this.textFont);
    },
    color2Change () {
      this.map.setPaintProperty(this.layerName + 'Symbol', "text-color", this.color2);
    },
    openText () {
      if (this.isText) {
        this.map.setLayoutProperty(this.layerName + 'Symbol', "visibility", "visible");
      } else {
        this.map.setLayoutProperty(this.layerName + 'Symbol', "visibility", "none");
      }
    },
    closeHome () {
      this.$emit('closeHome');
    }
  }
}
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
</style>

