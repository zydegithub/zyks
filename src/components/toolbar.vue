<template>
  <div id="toolBody">
    <div class="toolBaritem" v-for="(item, i) in items" :title="item.label" :key="i" @click="btnClick({ $event, item })">
      <i :class="item.className"></i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      items: [
        { label: "放大", className: "el-icon-circle-plus-outline" },
        { label: "缩小", className: "el-icon-remove-outline" },
        { label: "平移", className: "el-icon-rank" },
        { label: "全图", className: "el-icon-monitor" },
        { label: "测距", className: "el-icon-watermelon" },
        { label: "测面", className: "el-icon-crop" },
        { label: "查看属性", className: "el-icon-info" },
        // { label: "添加数据", className: "el-icon-circle-plus" },
        { label: "地图出图", className: "el-icon-picture" }
      ],
      popup: null,
      //   fields: ["Name", "Address", "Tag"]
    };
  },
  props: {
    map: Object,
    dialogVisible: Boolean
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      addLayers: "addLayers"
    })
  },
  methods: {
    btnClick (obj) {
      console.log("label", obj.item.label);
      this.measureControl = new MeasureControl({
        isDistance: true,
        isArea: true,
        map: this.map
      });
      switch (obj.item.label) {
        case "放大":
          if (this.map.getZoom() < 19) {
            this.map.flyTo({ zoom: this.map.getZoom() + 1 })
          }
          break;
        case "缩小":
          if (this.map.getZoom() > 2.7) {
            this.map.flyTo({ zoom: this.map.getZoom() - 1 })
          }
          break;
        case "平移":
          this.finish();
          break;
        case "查看属性":
          this.map.getCanvas().style.cursor = "pointer";
          this.map.on("click", this._onClick);
          break;
        case "全图":
          this.map.flyTo({ center: [100, 30], zoom: 3.6 })
          break;
        case "添加数据":
          this.$parent.showDialog();
          break;
        case "地图出图":
          this.$parent.saveImage();
          break;
        case "测距":
          this.map.on("click", this.measureControl._onClick);
          this.map.on("dblclick", this.measureControl._onDblClick);
          this.map.on("mousemove", this.measureControl._onMousemove);
          this.measureControl._onMeasureStart();
          break;
        case "测面":
          this.map.on("click", this.measureControl._onClick);
          this.map.on("dblclick", this.measureControl._onDblClick);
          this.map.on("mousemove", this.measureControl._onMousemove);
          this.measureControl._onMeasureAreaStart();
          break;
      }
    },
    finish () {
      this.map.doubleClickZoom.isEnabled();
      this.map.getCanvas().className = "";
      this.map.getCanvas().style.cursor = "";
    },
    _onClick (e) {
      var bbox = [
        [e.point.x, e.point.y],
        [e.point.x, e.point.y]
      ];
      var features = this.map.queryRenderedFeatures(bbox, {
        layers: this.addLayers
      });
      debugger
      var layer_container = document.createElement("div");
      for (const key in features[0].properties) {
        if (key != "layerName") {
          var attr_box = document.createElement("div");
          attr_box.className = "popup_attr_property_box";
          // 属性名
          var attr_name = document.createElement("span");
          attr_name.className = "popup_attr_property_box";
          attr_name.innerText = key + " : ";
          attr_box.appendChild(attr_name);
          // 属性值
          var attr_value = document.createElement("span");
          attr_value.className = "popup_attr_property_box";
          attr_value.innerText = features[0].properties[key];
          attr_box.appendChild(attr_value);
          layer_container.appendChild(attr_box);
        }
      }
      if (this.popup) this.popup.remove();
      this.popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(e.lngLat)
        .setHTML(layer_container.innerHTML)
        .addTo(this.map);
    }
  }
};
</script>

<style scoped>
#toolBody {
  height: 35px;
  display: flex;
  border: 1px solid #dddddd;
  position: absolute;
  top: 100px;
  right: 25px;
  z-index: 10;
}
.toolBaritem {
  display: inline-block;
  width: 33px;
  height: 33px;
  border-right: 1px solid #dddddd;
  background-color: #fff !important;
  cursor: pointer;
}
.toolBaritem:last-child {
  border: none;
}
i {
  margin-top: 8px;
  font-size: 20px;
}
</style>
