<template>
  <div id="mainMap">
    <div id="map" ref="map"></div>
    <MousePostion v-if="mapbuild" :map="map"></MousePostion>
    <div id="leftTable">
      <div class="titleDiv"><span>数据[ {{ layerName }} ]</span></div>
      <div class="tableDiv">
        <span>[共{{ featuresLength }}条数据]</span>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="120">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-button id="drawBtn" @click="drawData"><i class="el-icon-location">标绘</i></el-button>
    <el-button id="allmapBtn" @click="allMap"><i class="el-icon-crop">全图</i></el-button>
    <el-dialog title="新增" :visible.sync="drawDataDialog" width="300px">
      <el-form :model="form">
        <el-form-item label="名称:" label-width="60px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经纬度:" label-width="60px">
          <el-input v-model="form.lnglat" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="drawDataDialog = false">取 消</el-button>
        <el-button type="primary" @click="drawDataDialog = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import MousePostion from "./MousePosition";
export default {
  name: 'HelloWorld',
  data () {
    return {
      mapbuild: false,
      map: null,
      drawDataDialog: false,
      form: {
        name: '',
        lnglat: '',
      },
      layerName: '测试图层',
      featuresLength: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市'
      }]
    };
  },
  created () {
  },
  mounted () {
    this.initMap()
  },
  computed: {
  },
  components: {
    MousePostion
  },
  methods: {
    initMap () {
      if (!mapboxgl.supported()) {
        this.$Message.warning({
          content: "您的浏览器不支持WebGL,请升级到最新版本。",
          duration: 0
        });
        return;
      }
      this.map = new mapboxgl.Map({
        container: "map",
        style: "http://yjqz.geo-compass.com/api/v1/styles/1",
        center: [100, 30],
        zoom: 3.6,
        epsg: "EPSG:4490",
        preserveDrawingBuffer: true
      });
      this.$previewRefresh();
      this.map.on("load", async () => {
        this.mapbuild = true;
      });
      this.measureControl = new MeasureControl({
        isDistance: true,
        isArea: true,
        map: this.map
      });
      window.map = this.map;
    },
    drawData () {
      this.map.getCanvas().style.cursor = "crosshair";
      this.map.on("click", this.mouseClick);
    },
    mouseClick (e) {
      console.log(e.lngLat)
      this.map.setZoom(16)
      this.map.setCenter(e.lngLat)
      this.drawDataDialog = true
      this.form.lnglat = e.lngLat.lng.toFixed(4) + ',' + e.lngLat.lat.toFixed(4)
      //   console.log(e.lngLat.lng + ',' + e.lngLat.lat)
      this.map.getCanvas().style.cursor = "pointer";
    },
    allMap () {
      this.map.setZoom(3.6)
      this.map.setCenter([100, 30])
    }
  }
}
</script>
<style scoped>
#mainMap {
  position: relative;
  width: 100%;
  height: 100%;
}
#leftTable {
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  width: 420px;
  background-color: #fff;
}
#map {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
#drawBtn {
  position: absolute;
  top: 20px;
  right: 200px;
}
#allmapBtn {
  position: absolute;
  top: 20px;
  right: 80px;
}
.titleDiv {
  text-align: left;
  margin: 10px 0px 10px 20px;
  font-size: 18px;
}
.tableDiv {
  text-align: left;
  margin: 10px 0px 10px 20px;
  font-size: 16px;
}
</style>
