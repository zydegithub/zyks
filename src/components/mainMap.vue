<template>
  <div id="mainMap">
    <div id="map"></div>
    <MousePostion v-if="mapbuild" :map="map"></MousePostion>
    <toolbar :map="map" :dialogVisible="dialogVisible"></toolbar>
    <treeLayer :map="map" :layerName="layerName" :shpNames="shpNames"></treeLayer>
    <div id="top">
      <span class="topSpan">图层列表</span>
    </div>
    <!-- <div class="calculation-box" @click="draw">
      <p>Draw a polygon using the draw tools.</p>
      <div id="calculated-area"></div>
    </div>-->
    <el-dialog title="添加数据" :visible.sync="dialogVisible" width="30%" height="40%">
      <el-tabs v-model="activeName">
        <el-tab-pane label="添加矢量服务" name="first">
          <div>
            <span>文件名称:</span>
            <el-input v-model="shpinput" placeholder="请输入内容" style="width:300px;margin-left:10px"></el-input>
          </div>
          <div style="margin-top:10px">
            <span>上传数据:</span>
            <el-upload ref="upload" class="itembtn el-button" :action="uploadShp" :on-success="uploadShpSuccess">
              <div class="el-upload__text">
                <span class="text">添加shp(zip)</span>
              </div>
              <div class="el-upload__tip" slot="tip"></div>
            </el-upload>
          </div>
        </el-tab-pane>
        <el-tab-pane label="添加栅格服务" name="second">
          <div>
            <span>服务名称:</span>
            <el-input v-model="imginput" placeholder="请输入内容" style="width:300px;margin-left:10px"></el-input>
          </div>
          <div style="margin-top:10px">
            <span>服务地址:</span>
            <el-input v-model="imgurl" placeholder="请输入内容" style="width:300px;margin-left:10px"></el-input>
          </div>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGeoJson(geojson)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MousePostion from './MousePosition';
import toolbar from './toolbar';
import treeLayer from './treeLayer';
export default {
  data() {
    return {
      mapbuild: false,
      map: null,
      measureControl: null,
      dialogVisible: false,
      activeName: 'first',
      shpinput: '6666',
      imginput: '',
      imgurl: '',
      uploadShp: CONFIG.processServiceURL + 'file/uploadShp',
      newgeojson: '',
      geojson: '',
      xmin: '',
      xmax: '',
      ymin: '',
      ymax: '',
      layerName: '',
      shpNames: []
    };
  },
  mounted() {
    this.initMap();
  },
  watch: {
    newgeojson: {
      handler: function(val, oldVal) {
        try {
          this.geojson = JSON.parse(val);
        } catch (e) {
          console.log('请输入正确的geojson');
        }
      },
      deep: true,
      immediate: false
    },
    pointcolor: function(val, old) {
      debugger;
      this.map.setPaintProperty('drawpointlayer', 'circle-color', val);
    },
    linecolor: function(val, old) { },
    polygoncolor: function(val, old) {
      debugger;
      this.map.setPaintProperty('drawpolygonlayer', 'fill-color', val);
    }
  },
  components: {
    MousePostion,
    toolbar,
    treeLayer
  },
  methods: {
    ...mapActions(['getAsideBar']),
    initMap() {
      if (!mapboxgl.supported()) {
        this.$Message.warning({
          content: '您的浏览器不支持WebGL,请升级到最新版本。',
          duration: 0
        });
        return;
      }
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'http://yjqz.geo-compass.com/api/v1/styles/1',
        center: [100, 30],
        zoom: 3,
        epsg: 'EPSG:4490',
        preserveDrawingBuffer: true
      });
      this.map.on('load', async() => {
        this.mapbuild = true;
      });
      this.measureControl = new MeasureControl({
        isDistance: true,
        isArea: true,
        map: this.map
      });

      window.map = this.map;
    },
    draw() {
      this.map.on('click', this.measureControl._onClick);
      this.map.on('dblclick', this.measureControl._onDblClick);
      this.map.on('mousemove', this.measureControl._onMousemove);
      this.measureControl._onMeasureAreaStart();
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    // 上传成功事件
    uploadShpSuccess(res) {
      let data = JSON.parse(res.data);
      this.geojsonEditShow = true;
      this.newgeojson = data.geojson; // 触发加载geojson事件
    },
    addGeoJson(json) {
      // 加载矢量
      if (json != '') {
        this.getbounds(json);
        if (this.shpinput != '' && this.geojson != '') {
          var shp = this.map.getLayer(this.shpinput);
          if (shp != undefined) {
            this.shpinput = this.shpinput + '1';
          }
          this.dialogVisible = false;
          if (this.map.getSource('national-park') != null) {
            this.map.getSource('national-park').setData(json);
          } else {
            this.map.addSource('national-park', {
              type: 'geojson',
              data: json
            });
          }
          this.map.addLayer({
            id: this.shpinput,
            layout: {
              visibility: 'visible'
            },
            type: 'fill',
            source: 'national-park',
            paint: {
              'fill-color': '#888888',
              'fill-opacity': 0.4
            },
            filter: ['==', '$type', 'Polygon']
          });
          this.map.addLayer({
            id: 'drawpointlayer',
            type: 'circle',
            layout: {
              visibility: 'visible'
            },
            source: 'national-park',
            paint: {
              'circle-radius': 6,
              'circle-color': '#B42222'
            },
            filter: ['==', '$type', 'Point']
          });
          this.map.addLayer({
            id: 'drawlinelayer',
            type: 'line',
            source: 'national-park',
            layout: {
              visibility: 'visible'
            },
            paint: {
              'line-width': 6,
              'line-color': '#B42222',
              'line-opacity': 0.8
            },
            filter: ['==', '$type', 'LineString']
          });
          this.layerName = this.shpinput;
          this.map.fitBounds([[this.xmin, this.ymax], [this.xmax, this.ymin]], {
            padding: 200
          });
          this.imgurl = this.imginput = this.shpinput = '';
          this.$refs.upload.clearFiles();
        } else {
          this.$message.error('未完善信息！');
        }
      } else {
        // 加载栅格
        if (this.imginput != '' && this.imgurl != '') {
          this.dialogVisible = false;
          this.layerName = this.imginput;
          this.addRasterLayer({
            map: this.map,
            url: this.imgurl,
            id: this.imginput
          });
          this.imgurl = this.imginput = this.shpinput = '';
          this.$refs.upload.clearFiles();
        } else {
          this.$message.error('未完善信息！');
        }
      }
    },
    getbounds(json) {
      var array = [];
      var x = [];
      var y = [];
      for (var i = 0; i < json.features.length; i++) {
        if (typeof json.features[i].geometry.coordinates[0] == 'number') {
          array.push([json.features[i].geometry.coordinates[0], json.features[i].geometry.coordinates[1]]);
        } else {
          if (typeof json.features[i].geometry.coordinates[0][0][0] == 'number') {
            for (var q = 0; q < json.features[i].geometry.coordinates[0].length; q++) {
              array.push([json.features[i].geometry.coordinates[0][q][0], json.features[i].geometry.coordinates[0][q][1]]);
            }
          } else {
            for (var k = 0; k < json.features[i].geometry.coordinates[0][0].length; k++) {
              array.push(json.features[i].geometry.coordinates[0][0][k]);
            }
          }
        }
      }
      for (var j = 0; j < array.length; j++) {
        x.push(array[j][0]);
        y.push(array[j][1]);
      }
      x.sort(function(a, b) {
        return a - b;
      });
      this.xmin = x[0];
      this.xmax = x[x.length - 1];
      y.sort(function(a, b) {
        return a - b;
      });
      this.ymin = y[0];
      this.ymax = y[y.length - 1];
    },
    addRasterLayer({
      map,
      url,
      id,
      minzoom = 0,
      maxzoom = 22,
      visible = true
    }) {
      if (map.getLayer(id)) return;
      map.addLayer({
        id: id,
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [url],
          tileSize: 256,
          zoomOffset: 1
        },
        layout: {
          visibility: visible ? 'visible' : 'none'
        },
        minzoom,
        maxzoom
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#mainMap {
  width: 100%;
  height: 100%;
}
#map {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.calculation-box {
  height: 75px;
  width: 150px;
  position: absolute;
  bottom: 40px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  text-align: center;
}
.text {
  color: #20a0ff;
  font-style: normal;
}
#top {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 40px;
  background-color: #3f8cee;
  text-align: left;
}
#bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 300px;
  height: 40px;
  background-color: #3f8cee;
}
.topSpan {
  font-size: 18px;
  margin-left: 20px;
  line-height: 40px;
}
</style>
