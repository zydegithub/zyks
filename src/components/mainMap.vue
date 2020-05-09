<template>
  <div id="mainMap">
    <div id="map" ref="map"></div>
    <MousePostion v-if="mapbuild" :map="map"></MousePostion>
    <toolbar :map="map" :dialogVisible="dialogVisible"></toolbar>
    <treeLayer :map="map" @rightBtns="rightBtns" :layerNames="layerNames" :shpNames="shpNames"></treeLayer>
    <addData v-if="isAddLayer" @closeData="closeData" @layers="getLayers"></addData>
    <uniqueValue :map="map" v-if="showUniquePanel" @closeUnique="closeUnique"></uniqueValue>
    <classifyValue :map="map" v-if="showClassifyPanel" @closeClassify="closeClassify"></classifyValue>
    <layerHome :map="map" v-if="showHomePanel" @closeHome="closeHome"></layerHome>
    <div id="rightbar">
      <div v-if="rightMenusShow">
        <div v-for="(item, index) in rightMenus" :key="index" id="ebs" @click="clickRightBtn(item.click)">
          <i :class="item.icon"></i>
          {{ item.label }}
        </div>
      </div>
    </div>
    <div id="top">
      <span class="topSpan">图层列表</span>
      <i class="el-icon-circle-plus-outline" style="float:right;line-height:50px;margin-right:10px;color:#fff;font-size:24px;cursor:pointer" @click="addData"></i>
    </div>
    <div id="changeMap" @mouseenter="enter" @mouseleave="leave">
      <div class="clickDiv" v-show="!isopen"><i class="el-icon-arrow-left"></i></div>
      <div class="clickDiv" v-show="isopen"><i class="el-icon-arrow-right"></i></div>
      <div class="childDiv" v-for="(item,index) in layers" :key="index" :class="{ active: layerIndex == index }" @click="clickMap(index)">
        <img :src="item.url" width="80px" height="76px" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <el-dialog title="地图出图" :visible.sync="imagedialogVisible" width="30%" :modal="false" :before-close="handleClose" id="dialog">
      <div class="imgname">
        <span>出图名称:</span>
        <el-input v-model="imgName" placeholder="请输入内容" style="width:300px;margin-left:10px"></el-input>
      </div>
      <img style="width: 500px" :src="this.dataURL" v-show="this.dataURL" alt preview="index" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downs">导出图片</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import MousePostion from "./MousePosition";
import toolbar from "./toolbar";
import treeLayer from "./treeLayer";
import addData from "./addData";
import uniqueValue from "./uniqueValue";
import classifyValue from "./classifyValue";
import layerHome from "./layerHome";
export default {
  data () {
    return {
      mapbuild: false,
      map: null,
      measureControl: null,
      dialogVisible: false,
      imagedialogVisible: false,
      //   activeName: "first",
      //   shpinput: "6666",
      //   imginput: "",
      //   imgurl: "",
      //   uploadShp: CONFIG.processServiceURL + "file/uploadShp",
      isopen: false,
      layerIndex: null,
      layers: CONFIG.tdtLayerObj,
      newgeojson: "",
      geojson: "",
      xmin: "",
      xmax: "",
      ymin: "",
      ymax: "",
      layerNames: [],
      shpNames: [],
      haveLayerIds: [],
      dataURL: "",
      imgName: "",
      isAddLayer: false,
      layerGeojson: [],
      layerName: [],
      layerId: [],
      rightMenusShow: false,
      layerData: "",
      layerNode: "",
      showUniquePanel: false,
      showClassifyPanel: false,
      showHomePanel: false,
      rightMenus: [
        {
          label: '唯一值渲染',
          icon: 'el-icon-star-off',
          click: () => {
            this.panelShow('unique');
          }
        },
        {
          label: '分类渲染',
          icon: 'el-icon-star-off',
          click: () => {
            this.panelShow('classify');
          }
        },
        {
          label: '缩放至图层',
          icon: 'el-icon-edit-outline',
          click: () => {
            this.fitMapLayer();
          }
        },
        {
          label: '复制图层',
          icon: 'el-icon-copy-document',
          click: () => {
            this.panelShow('copy');
          }
        },
        {
          label: '删除图层',
          icon: 'el-icon-folder-remove',
          click: () => {
            this.panelShow('delete');
          }
        }
      ],
    };
  },
  mounted () {
    this.initMap();
  },
  destroyed () {
    this.SET_USEDIDS([])
  },
  computed: {
    ...mapGetters({
      usedId: "usedId",
      addLayers: "addLayers"
    })
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
    },
    pointcolor: function (val, old) {
      this.map.setPaintProperty("drawpointlayer", "circle-color", val);
    },
    linecolor: function (val, old) { },
    polygoncolor: function (val, old) {
      this.map.setPaintProperty("drawpolygonlayer", "fill-color", val);
    }
  },
  components: {
    MousePostion,
    toolbar,
    treeLayer,
    addData,
    uniqueValue,
    classifyValue,
    layerHome
  },
  methods: {
    ...mapMutations(["SET_USEDID", "SET_USEDIDS", "SET_ADDLAYERS"]),
    ...mapActions(["getlayersId"]),
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
        style: style,
        center: [100, 30],
        zoom: 3,
        epsg: "EPSG:4490",
        preserveDrawingBuffer: true
      });
      this.$previewRefresh();
      this.map.on("load", async () => {
        this.mapbuild = true;
        if (this.usedId != "" && this.usedId != undefined) {
          this.getlayersId({
            data: { layerId: this.usedId },
            callBack: res => {
              this.layerGeojson.push(res.data.user[0].layerGeojson);
              this.layerName.push(res.data.user[0].layerName);
              this.layerId.push(res.data.user[0].layerId)
              this.getLayers(this.layerGeojson, this.layerName, this.layerId)
              this.SET_USEDID("")
            }
          })
        }
      });
      this.measureControl = new MeasureControl({
        isDistance: true,
        isArea: true,
        map: this.map
      });
      window.map = this.map;
    },
    draw () {
      this.map.on("click", this.measureControl._onClick);
      this.map.on("dblclick", this.measureControl._onDblClick);
      this.map.on("mousemove", this.measureControl._onMousemove);
      this.measureControl._onMeasureAreaStart();
    },
    // 点击右侧菜单
    clickRightBtn (click) {
      this.rightMenusShow = false;
      click();
    },
    // 右侧按钮
    rightBtns (node, data, top, bottom) {
      if (this.layerData == "" || this.layerData == data) {
        this.rightMenusShow = !this.rightMenusShow
      }
      this.layerData = data
      this.SET_USEDID(data.layerId)
      this.layerNode = node
      var btnsHeight = document.getElementById('rightbar').offsetHeight;
      if (btnsHeight < bottom) {
        document.getElementById('rightbar').style.top = '';
        document.getElementById('rightbar').style.bottom = 0 + 'px';
      } else {
        document.getElementById('rightbar').style.bottom = '';
        document.getElementById('rightbar').style.top = top + 'px';
      }
    },
    fitMapLayer () {
      this.getlayersId({
        data: { layerId: this.usedId },
        callBack: res => {
          this.layerGeojson = JSON.parse(res.data.user[0].layerGeojson);
          this.getbounds(this.layerGeojson)
          this.map.fitBounds(
            [
              [this.xmin, this.ymax],
              [this.xmax, this.ymin]
            ],
            {
              padding: 50
            }
          );
        }
      })
    },
    panelShow (type, isChangeSource) {
      switch (type) {
        case 'unique':
          this.showUniquePanel = true;
          break;
        case 'classify':
          this.showClassifyPanel = true;
          break;
        case 'notation':
          this.notationPanel = true;
          break;
        case 'delete':
          this.dellayers();
          break;
        case 'copy':
          this.coplayers();
          break;
        case 'new':
          this.isChangeSource = isChangeSource;
          this.createLayerShow = true;
          break;
      }
    },
    dellayers () {
      const parent = this.layerNode.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === this.layerData.id);
      children.splice(index, 1);
      this.map.removeLayer(this.layerData.label);
      this.map.removeSource(this.layerData.label);
    },
    getLayers (geojson, name, id) {
      this.layerNames = []
      if (geojson.length > 0) {
        for (const key in geojson) {
          this.layerNames.push({ 'name': name[key], 'id': id[key] })
          if (geojson[key] != "") {
            var json = JSON.parse(geojson[key]);
            this.map.addSource(name[key], {
              type: "geojson",
              data: json
            });
            var properties = json.features[0].properties
            if (json.features[0].geometry.type.indexOf("Point") != -1) {
              this.map.addLayer({
                id: properties.layerName,
                type: "circle",
                layout: {
                  visibility: "visible"
                },
                source: name[key],
                paint: {
                  "circle-radius": 6,
                  "circle-color": "#B42222"
                },
                filter: ["==", "layerName", properties.layerName]
              });
              this.addLayers.push(properties.layerName)
              this.SET_ADDLAYERS(this.addLayers)
            }
            if (json.features[0].geometry.type.indexOf("Line") != -1) {
              this.map.addLayer({
                id: properties.layerName,
                type: "line",
                source: name[key],
                layout: {
                  visibility: "visible"
                },
                paint: {
                  "line-width": 6,
                  "line-color": "#B42222",
                  "line-opacity": 0.8
                },
                filter: ["==", "layerName", properties.layerName]
              });
              this.addLayers.push(properties.layerName)
              this.SET_ADDLAYERS(this.addLayers)
            }
            if (json.features[0].geometry.type.indexOf("Polygon") != -1) {
              this.map.addLayer({
                id: properties.layerName,
                layout: {
                  visibility: "visible"
                },
                type: "fill",
                source: name[key],
                paint: {
                  "fill-color": "#888888",
                  "fill-opacity": 0.4,
                  "fill-outline-color": "#888888"
                },
                filter: ["==", "layerName", properties.layerName]
              });
              this.addLayers.push(properties.layerName)
              this.SET_ADDLAYERS(this.addLayers)
            }
          } else {
            this.$message.error("未完善信息！");
          }
        }
      }
    },
    getbounds (json) {
      var array = [];
      var x = [];
      var y = [];
      for (var i = 0; i < json.features.length; i++) {
        if (typeof json.features[i].geometry.coordinates[0] == "number" || typeof parseFloat(json.features[i].geometry.coordinates[0]) == "number") {
          array.push([
            json.features[i].geometry.coordinates[0],
            json.features[i].geometry.coordinates[1]
          ]);
        } else {
          if (typeof json.features[i].geometry.coordinates[0][0][0] == "number" || typeof parseFloat(json.features[i].geometry.coordinates[0][0][0]) == "number") {
            for (var q = 0; q < json.features[i].geometry.coordinates[0].length; q++) {
              array.push([
                json.features[i].geometry.coordinates[0][q][0],
                json.features[i].geometry.coordinates[0][q][1]
              ]);
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
      x.sort(function (a, b) {
        return a - b;
      });
      this.xmin = x[0];
      this.xmax = x[x.length - 1];
      y.sort(function (a, b) {
        return a - b;
      });
      this.ymin = y[0];
      this.ymax = y[y.length - 1];
    },
    addRasterLayer ({
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
        type: "raster",
        source: {
          type: "raster",
          tiles: [url],
          tileSize: 256,
          zoomOffset: 1
        },
        layout: {
          visibility: visible ? "visible" : "none"
        },
        minzoom,
        maxzoom
      });
    },
    saveImage () {
      this.imagedialogVisible = true;
      this.$html2canvas(this.$refs.map, {
        backgroundColor: null
      }).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        this.dataURL = dataURL;
      });
    },
    downs () {
      if (this.imgName != "") {
        this.imagedialogVisible = false;
        var alink = document.createElement("a");
        alink.href = this.dataURL;
        alink.download = this.imgName; // 图片名
        alink.click();
        this.dataURL = "";
        this.imgName = "";
      } else {
        this.$message({
          message: "名称不能为空！",
          type: "warning"
        });
      }
    },
    enter () {
      var changeMap = document.getElementById("changeMap");
      changeMap.style.right = "0px";
      changeMap.style.transition = "all 0.75s ease";
      this.isopen = true;
    },
    leave () {
      var changeMap = document.getElementById("changeMap");
      changeMap.style.right = "-276px";
      changeMap.style.transition = "all 0.75s ease";
      this.isopen = false;
    },
    clickMap (index) {
      if (this.layerIndex == index) {
        if (this.layerIndex == 'heat') {
          this.map.removeLayer('earthquakes-heat');
          this.layerIndex = ""
        } else if (this.layerIndex == 'cricle') {
          this.map.removeLayer('clusters');
          this.map.removeLayer('cluster-count');
          this.map.removeLayer('unclustered-point');
          this.map.removeSource('pointCircleSource')
          this.layerIndex = ""
        }
      } else {
        this.layerIndex = index
        if (index == 'heat') {
          this.map.addLayer({
            'id': 'earthquakes-heat',
            'type': 'heatmap',
            'source': 'pointSource',
            'maxzoom': 14,
            'paint': {
              'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                1,
                14,
                3
              ],
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)'
              ],
              'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                2,
                14,
                20
              ]
            }
          })
        } else if (index == 'cricle') {
          var that = this;
          this.map.addSource('pointCircleSource', {
            type: 'geojson',
            data: that.source,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
          });
          this.map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'pointCircleSource',
            filter: ['has', 'point_count'],
            paint: {
              'circle-color': [
                'step',
                ['get', 'point_count'],
                '#51bbd6',
                100,
                '#f1f075',
                750,
                '#f28cb1'
              ],
              'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40
              ]
            }
          });
          this.map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'pointCircleSource',
            filter: ['has', 'point_count'],
            layout: {
              'text-field': '{point_count_abbreviated}',
              'text-font': ['Times New Roman Regular'],
              'text-size': 14,
            }
          });
          this.map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'pointCircleSource',
            filter: ['!', ['has', 'point_count']],
            paint: {
              'circle-color': '#11b4da',
              'circle-radius': 4,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
          });
        }
      }
    },
    handleClose () {
      this.dataURL = "";
      this.imagedialogVisible = false;
    },
    addData () {
      this.isAddLayer = true
      var that = this
    },
    closeData () {
      this.isAddLayer = false
    },
    closeUnique () {
      this.showUniquePanel = false
    },
    closeClassify () {
      this.showClassifyPanel = false
    },
    closeHome () {
      this.showHomePanel = false
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
  top: 70px;
  bottom: 0px;
  left: 240px;
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
  top: 70px;
  left: 239px;
  width: 301px;
  height: 50px;
  background-color: #3f8cee;
  text-align: left;
}
#bottom {
  position: absolute;
  bottom: 0px;
  left: 240px;
  width: 300px;
  height: 40px;
  background-color: #3f8cee;
}
.topSpan {
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
  line-height: 50px;
}
.imgname {
  float: left;
  margin-bottom: 10px;
  span {
    font-size: 16px;
    margin-left: 16px;
  }
}
#dialog {
  z-index: 50 !important;
}
#rightbar {
  z-index: 2;
  position: absolute;
  left: 538px;
  width: 130px;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  user-select: none;
}
#changeMap {
  position: absolute;
  bottom: 20px;
  right: -276px;
  width: 313px;
  height: 111px;
  border: 1px solid #fff;
  display: inline-block;
  background: rgba(90, 96, 108, 0.6);
  cursor: pointer;
}
.childDiv {
  display: inline-block;
  height: 110px;
  width: 90px;
  padding-top: 8px;
  text-align: center;
  color: #fff;
  position: relative;
  border-radius: 5px;
}
.clickDiv {
  display: inline-block;
  height: 110px;
  width: 30px;
  /* border: 1px solid #fff; */
  text-align: center;
  color: #fff;
  position: relative;
  line-height: 110px;
  vertical-align: top;
}
.clickDiv i {
  padding-top: 40px;
  padding-bottom: 40px;
}
#ebs {
  z-index: 2;
  width: 130px;
  height: 30px;
  display: block;
  padding-top: 3px;
  border: 1px solid #dddddd;
  border-bottom: 0px;
  text-align: left;
}
#ebs:last-child {
  border-bottom: 1px solid #dddddd;
}
i {
  float: left;
  margin-left: 6px;
  margin-right: 8px;
  margin-top: 3px;
}
</style>
