<template>
  <div id="mainMap">
    <div
      id="map"
      ref="map"
    ></div>
    <MousePostion
      v-if="mapbuild"
      :map="map"
    ></MousePostion>
    <div id="leftTable">
      <div class="titleDiv"><span>数据</span>
        <el-select
          v-model="selectlayerId"
          placeholder="请选择数据"
          @change="changeData"
        >
          <el-option
            v-for="item in layerlist"
            :key="item.value"
            :label="item.showName"
            :value="item.layerId"
          >
          </el-option>
        </el-select>
      </div>
      <div class="tableDiv">
        <div style="marginBottom:8px">
          <span style="lineHeight:36px">[共{{ tableData.length }}条数据]</span>
          <el-button
            style="float: right; marginRight:30px;"
            size="medium"
            v-show="isDelete"
            @click="deleteDialog"
          >
            批量删除
          </el-button>
          <el-button
            style="float: right; marginRight:16px;"
            size="medium"
            v-show="isEdit"
            @click="editDialog"
          >
            编辑
          </el-button>
        </div>
        <el-table
          :data="tableData"
          border
          style="width:370px"
          height="650"
          @row-click="rowClick"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="35"
          >
          </el-table-column>
          <el-table-column
            prop="id"
            label="编号"
            width="80"
          >
          </el-table-column>
          <el-table-column
            v-for="item in layerFields"
            :key="item.id"
            :prop="item.ENname"
            :label="item.CNname"
            width="130"
          >
            <template slot-scope="{row,$index}">
              <el-input
                v-model="row[item.ENname]"
                v-if="currentEdit === $index"
                @keyup.enter.native="finishEditClick()"
              ></el-input>
              <span v-else>{{row[item.ENname]}}</span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="layerType=='point'"
            prop="lnglat"
            label="经纬度"
            width="159"
          >
          </el-table-column>
          <el-table-column
            v-if="layerType=='line' || layerType=='polygon'"
            prop="pointNumber"
            label="折点数"
            width="130"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-button
      id="drawBtn"
      @click="drawData"
    ><i class="el-icon-location">标绘</i></el-button>
    <el-button
      id="allmapBtn"
      @click="allMap"
    ><i class="el-icon-crop">全图</i></el-button>
    <el-button
      id="saveBtn"
      @click="saveFeature"
    ><i class="el-icon-circle-check">保存</i></el-button>
    <div
      id="changeMap"
      @mouseenter="enter"
      @mouseleave="leave"
    >
      <div
        class="clickDiv"
        v-show="!isopen"
      ><i class="el-icon-arrow-left"></i></div>
      <div
        class="clickDiv"
        v-show="isopen"
      ><i class="el-icon-arrow-right"></i></div>
      <div
        class="childDiv"
        v-for="(item,index) in layers"
        :key="index"
        :class="{ active: layerIndex == index }"
        @click="clickMap(index)"
      >
        <img
          :src="item.url"
          width="80px"
          height="76px"
        />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div id="drawData">
      <el-dialog
        title="新增"
        :visible.sync="drawDataDialog"
        width="300px"
        :modal="false"
      >
        <el-form :model="form">
          <el-form-item
            v-for="(item,index) in layerFields"
            :key="index"
            :label="item.CNname+' : '"
            label-width="100px"
          >
            <el-input
              v-model="item.fieldValue"
              :ref="'input'+index"
              autocomplete="off"
              @input="change"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-if="layerType=='point'"
            label="经纬度:"
            label-width="100px"
          >
            <el-input
              v-model="form.lnglat"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-if="layerType=='line' || layerType=='polygon'"
            label="折点数:"
            label-width="100px"
          >
            <el-input
              v-model="form.pointNumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="cancel">取 消</el-button>
          <el-button
            type="primary"
            @click="addFeature"
          >确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="delDialogVisible"
      width="30%"
    >
      <span>是否确定删除数据?</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteFeature"
        >确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="editDialogVisible"
      width="300px"
      :modal="false"
    >
      <el-form>
        <el-form-item
          v-for="(item,index) in layerFields"
          :key="index"
          :label="item.CNname"
          label-width="80px"
        >
          <el-input
            v-model="item.fieldValue"
            autocomplete="off"
            @input="change"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editDialogVisible=false">取 消</el-button>
        <el-button
          type="primary"
          @click="editFeature"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
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
      layerFields: [],
      selectlayerId: '',
      tableData: [],
      layerlist: [],
      selectIds: [],
      isDelete: false,
      delDialogVisible: false,
      editDialogVisible: false,
      editFeatureData: {},
      isEdit: false,
      layerType: '',
      layerName: '',
      marker: null,
      dataURL: '',
      layerIndex: null,
      layers: CONFIG.tdtLayerObj,
      isopen: false,
      source: {
        'type': 'FeatureCollection',
        'features': []
      },
      currentEdit: ""
    };
  },
  created () {
  },
  mounted () {
    this.initMap()
    this.getlayerlist()
  },
  computed: {
    ...mapGetters({
      layerId: "layerId",
      addLayers: "addLayers",
      username: "username"
    })
  },
  components: {
    MousePostion
  },
  watch: {
    source: {
      handler: function (val, oldVal) {
        if (this.map.getSource('pointSource')) {
          this.map.getSource('pointSource').setData(val)
        } else {
          this.map.addSource('pointSource', { type: 'geojson', data: val })
        }
        if (this.map.getLayer('pointsLayer')) this.map.removeLayer('pointsLayer');
        if (this.map.getLayer('linesLayer')) this.map.removeLayer('linesLayer');
        if (this.map.getLayer('polygonsLayer')) this.map.removeLayer('polygonsLayer');
        if (this.layerType == "point") {
          this.map.addLayer({
            id: 'pointsLayer',
            type: 'circle',
            layout: {
              'visibility': 'visible'
            },
            source: 'pointSource',
            paint: {
              'circle-radius': 6,
              'circle-color': '#B42222'
            },
            filter: ['==', '$type', 'Point']
          })
          this.addLayers.push('pointsLayer')
          this.SET_ADDLAYERS(this.addLayers)
        } else if (this.layerType == "line") {
          this.map.addLayer({
            id: 'linesLayer',
            type: 'line',
            layout: {
              'visibility': 'visible',
              'line-join': 'round',
              'line-cap': 'round'
            },
            source: 'pointSource',
            paint: {
              'line-width': 6,
              'line-color': '#B42222'
            },
            filter: ['==', '$type', 'LineString']
          })
          this.addLayers.push('linesLayer')
          this.SET_ADDLAYERS(this.addLayers)
        } else if (this.layerType == "polygon") {
          this.map.addLayer({
            id: 'polygonsLayer',
            type: 'fill',
            layout: {
              'visibility': 'visible'
            },
            source: 'pointSource',
            paint: {
              'fill-color': '#B42222',
              'fill-opacity': 0.8
            },
            filter: ['==', '$type', 'Polygon']
          })
          this.addLayers.push('polygonsLayer')
          this.SET_ADDLAYERS(this.addLayers)
        }
      },
      deep: true,
      immediate: false
    },
    selectIds: {
      handler: function (val, oldVal) {
        if (val.length > 0) {
          this.isDelete = true
        } else {
          this.isDelete = false
        }
        if (val.length == 1) {
          this.isEdit = true
        } else {
          this.isEdit = false
        }
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    ...mapMutations(["SET_LAYERID", "SET_ADDLAYERS"]),
    ...mapActions(["getlayers", "getfields", "editLayer", "uploadIMG", "getlayersId"]),
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
        zoom: 3.6,
        epsg: "EPSG:4490",
        preserveDrawingBuffer: true
      });
      this.map.on("load", async () => {
        this.mapbuild = true;
        this.map.addSource("highPoint", {
          type: "geojson",
          data: null
        });
        this.map.addLayer({
          id: "highPoint",
          type: "circle",
          source: "highPoint",
          paint: {
            "circle-color": "#fa6305",
            "circle-radius": 6,
            "circle-opacity": 1
          }
        });
        this.initTable()
      });
      this.measureControl = new MeasureControlEdit({
        isDistance: true,
        isArea: true,
        map: this.map
      });
      window.map = this.map;
    },
    getlayerlist () {
      var that = this;
      this.getlayers({
        data: { layerUser: that.username },
        callBack: res => {
          that.layerlist = res.data.user;
        }
      });
    },
    changeData (val) {
      this.SET_LAYERID(val)
      this.initTable()
    },
    change () {
      this.$forceUpdate()
    },
    initTable () {
      this.getfields({
        data: { layerId: this.layerId },
        callBack: res => {
          this.layerFields = res.data.user;
        }
      });
      this.getlayersId({
        data: { layerId: this.layerId },
        callBack: res => {
          if (res.data.user.length > 0) {
            this.layerType = res.data.user[0].layerType;
            this.layerName = res.data.user[0].layerName;
            this.selectlayerId = res.data.user[0].layerId;
            if (res.data.user[0].layerGeojson) {
              this.source = JSON.parse(res.data.user[0].layerGeojson)
              this.tableData = []
              for (const key in this.source.features) {
                var lnglat = this.source.features[key].geometry.coordinates
                if (this.layerType == "point") {
                  var row = {
                    id: Number(key) + 1,
                    lnglat: lnglat[0] + "," + lnglat[1],
                    pointNumber: lnglat.length
                  }
                } else if (this.layerType == "line") {
                  var row = {
                    id: Number(key) + 1,
                    pointNumber: lnglat.length
                  }
                } else if (this.layerType == "polygon") {
                  var row = {
                    id: Number(key) + 1,
                    pointNumber: lnglat[0][0].length
                  }
                }
                var properties = this.source.features[key].properties
                for (var key2 in properties) {
                  row[key2] = properties[key2]
                }
                this.tableData.push(row)
              }
            }
          }
        }
      });
    },
    drawData () {
      this.map.getCanvas().style.cursor = "crosshair";
      // 点线面
      if (this.layerType == "point") {
        this.map.on("click", this.mouseClick);
      } else if (this.layerType == "line") {
        this.map.on("click", this.measureControl._onClick);
        this.map.on("dblclick", this.finish);
        this.map.on("mousemove", this.measureControl._onMousemove);
        this.measureControl._onMeasureStart();
      } else if (this.layerType == "polygon") {
        this.map.on("click", this.measureControl._onClick);
        this.map.on("dblclick", this.finish);
        this.map.on("mousemove", this.measureControl._onMousemove);
        this.measureControl._onMeasureAreaStart();
      }
    },
    mouseClick (e) {
      if (this.marker != null) {
        this.marker.remove();
      }
      this.map.flyTo({ center: e.lngLat, zoom: 16 })
      this.drawDataDialog = true
      this.form.lnglat = e.lngLat.lng.toFixed(4) + ',' + e.lngLat.lat.toFixed(4)
      this.marker = new mapboxgl.Marker({
        draggable: true
      })
        .setLngLat(e.lngLat)
        .addTo(this.map);
      this.marker.on('dragend', this.onDragEnd);
      this.map.getCanvas().style.cursor = "pointer";
      setTimeout(() => {
        this.$refs['input0'][0].$el.children[0].focus()
      }, 1)
    },
    onDragEnd () {
      var lngLat = this.marker.getLngLat();
      this.form.lnglat = lngLat.lng.toFixed(4) + ',' + lngLat.lat.toFixed(4)
    },
    allMap () {
      this.map.flyTo({ center: [100, 30], zoom: 3.6 })
    },
    handleSelectionChange (val) {
      this.selectIds = []
      for (const key in val) {
        this.selectIds.push(val[key].id)
      }
    },
    deleteDialog () {
      this.delDialogVisible = true
    },
    editDialog () {
      this.editFeatureData = this.source.features[this.selectIds[0] - 1].properties
      for (const key in this.layerFields) {
        for (const key2 in this.editFeatureData) {
          if (this.layerFields[key].ENname == key2) {
            this.layerFields[key].fieldValue = this.editFeatureData[key2]
          }
        }
      }
      this.editDialogVisible = true
    },
    editFeature () {
      for (const key in this.layerFields) {
        this.source.features[this.selectIds[0] - 1].properties[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
        this.tableData[this.selectIds[0] - 1][this.layerFields[key].ENname] = this.layerFields[key].fieldValue
      }
      var strJson = JSON.stringify(this.source);
      var time = new Date()
      this.editLayer({
        data: {
          layerId: this.layerId,
          layerGeojson: strJson,
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
      this.editDialogVisible = false
    },
    deleteFeature () {
      this.selectIds.sort(function (a, b) { return b - a });
      this.selectIds.forEach(element => {
        this.source.features.splice(element - 1, 1);
        this.tableData.splice(element - 1, 1);
      });
      var strJson = JSON.stringify(this.source);
      var time = new Date()
      this.editLayer({
        data: {
          layerId: this.layerId,
          layerGeojson: strJson,
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
      this.delDialogVisible = false
    },
    addFeature () {
      this.drawDataDialog = false
      this.measureControl._removeMeasure()
      if (this.layerType == "point") {
        var row = {
          id: this.tableData.length + 1,
          lnglat: this.form.lnglat
        }
        var feature = {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': this.form.lnglat.split(',')
          },
          'properties': {
            "layerName": this.layerName
          }
        }
        for (const key in this.layerFields) {
          row[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
          feature.properties[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
        }
        this.source.features.push(feature)
        this.tableData.push(row)
      } else if (this.layerType == "line") {
        var row = {
          id: this.tableData.length + 1,
          pointNumber: this.form.pointNumber
        }
        var feature = {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': window.line
          },
          'properties': {
            "layerName": this.layerName
          }
        }
        for (const key in this.layerFields) {
          row[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
          feature.properties[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
        }
        this.source.features.push(feature)
        this.tableData.push(row)
      } else if (this.layerType == "polygon") {
        var row = {
          id: this.tableData.length + 1,
          pointNumber: this.form.pointNumber
        }
        var geoPolygon = []
        geoPolygon.push(window.polygon)
        var feature = {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': geoPolygon
          },
          'properties': {
            "layerName": this.layerName
          }
        }
        for (const key in this.layerFields) {
          row[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
          feature.properties[this.layerFields[key].ENname] = this.layerFields[key].fieldValue
        }
        this.source.features.push(feature)
        this.tableData.push(row)
      }
      if (this.marker != null) {
        this.marker.remove();
      }
      for (const key in this.layerFields) {
        this.layerFields[key].fieldValue = ''
      }
    },
    saveFeature () {
      if (this.source.features.length > 0) {
        var that = this;
        that.$html2canvas(that.$refs.map, {
          backgroundColor: null,
        }).then(canvas => {
          let dataURL = canvas.toDataURL("image/png");
          var arr = dataURL.split(',')
          var mime = arr[0].match(/:(.*?);/)[1]
          var suffix = mime.split('/')[1]
          var bstr = atob(arr[1])
          var n = bstr.length
          var u8arr = new Uint8Array(n)
          var filename = that.layerId + "_img";
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
          }
          var file = new File([u8arr], `${filename}.${suffix}`, { type: mime });
          var formdata = new FormData();
          formdata.append("file", file)
            that.$axios.post('http://39.105.87.199:7001/upload', formdata, {
          // that.$axios.post('http://localhost:7001/upload', formdata, {
            'Content-Type': 'multipart/form-data'
          }).then(res => {
            var strJson = JSON.stringify(this.source);
            var time = new Date()
            that.editLayer({
              data: {
                layerId: that.layerId,
                layerGeojson: strJson,
                imgUrl: that.layerId + '_img.png',
                updateTime: this.$util.commonUtil.formatUTC(time, 'YYYY-MM-dd hh:mm:ss')
              },
              callBack: res => {
                that.$Notice.success({
                  title: "保存提示",
                  desc: "保存成功!",
                  duration: 1.5
                });
              }
            });
          })
        });
      } else {
        that.$Notice.error({
          title: "修改提示",
          desc: "无内容保存!",
          duration: 1.5
        });
      }
    },
    finishEditClick () {
      this.currentEdit = -1
    },
    rowClick (row, column) {
      this.currentEdit = row.id - 1;
    },
    finish () {
      this.measureControl._onDblClick()
      this.drawDataDialog = true
      if (this.layerType == "line") {
        this.form.pointNumber = window.line.length
      } else if (this.layerType == "polygon") {
        this.form.pointNumber = window.polygon.length
      }
    },
    cancel () {
      this.measureControl._removeMeasure()
      this.drawDataDialog = false
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
        if (this.map.getLayer('earthquakes-heat')) this.map.removeLayer('earthquakes-heat');
        if (this.map.getLayer('clusters')) this.map.removeLayer('clusters');
        if (this.map.getLayer('cluster-count')) this.map.removeLayer('cluster-count');
        if (this.map.getLayer('unclustered-point')) this.map.removeLayer('unclustered-point');
        if (this.map.getSource('pointCircleSource')) this.map.removeSource('pointCircleSource');
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
    }
  }
}
</script>
<style scoped>
#mainMap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#leftTable {
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  width: 420px;
  background-color: #fff;
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
#map {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 420px;
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
#saveBtn {
  position: absolute;
  top: 20px;
  right: 320px;
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
.active {
  color: #00ccff;
  /* border: 1px solid red; */
}
</style>
