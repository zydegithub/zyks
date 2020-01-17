<template>
  <div id="tree">
    <el-tree
      ref="tree"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="leafArray"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
      @check-change="handleCheckChange"
      @node-click="handleNodeClick"
    ></el-tree>
    <el-dialog title="编辑图层" :visible.sync="dialogVisible" width="24%" height="40%">
      <el-tabs>
        <div class="editDiv">
          <span style="line-height:46px">颜色:</span>
          <el-color-picker v-model="color" style="position:absolute"></el-color-picker>
        </div>
        <div v-show="this.clickLayerType='fill'" class="editDiv">
          <span style="line-height:46px">边框颜色:</span>
          <el-color-picker v-model="outlineColor" style="position:absolute"></el-color-picker>
        </div>
        <div v-show="this.clickLayerType!='fill'" class="editDiv">
          <span>宽度或大小:</span>
          <el-input v-model="width"></el-input>
        </div>
        <div v-show="this.clickLayerType!='circle'" class="editDiv">
          <span>透明度:</span>
          <el-input v-model="opacity" style="width:30%"></el-input>
        </div>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editLayer">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layer: {
        id: 1,
        label: "",
        children: []
      },
      data: [],
      layerId: 1,
      leafArray: [],
      clickLayerName: "",
      clickLayerType: "",
      dialogVisible: false,
      color: "",
      outlineColor: "",
      width: 0,
      opacity: 0
    };
  },
  props: {
    map: Object,
    layerName: String,
    shpNames: Array
  },
  watch: {
    layerName: {
      handler: function(val, oldVal) {
        var layerCopy = JSON.parse(JSON.stringify(this.layer));
        layerCopy.label = val;
        layerCopy.id = this.layerId;
        this.leafArray.push(this.layerId);
        this.layerId++;
        if (this.shpNames.length != 0) {
          for (var i = 0; i < this.shpNames.length; i++) {
            var shpCopy = JSON.parse(JSON.stringify(this.layer));
            shpCopy.label = this.shpNames[i];
            shpCopy.id = this.layerId;
            this.leafArray.push(this.layerId);
            this.layerId++;
            layerCopy.children.push(this.shpCopy);
          }
        }
        this.data.push(layerCopy);
        console.log(this.data);
      },
      deep: true
    },
    leafArray: {
      handler: function(val, oldval) {
        this.$nextTick(() => {
          this.setCheckedKeys();
        });
      },
      deep: true
    }
  },
  mounted() {},
  methods: {
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
      this.map.removeLayer(data.label);
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </span>
        </span>
      );
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys(this.leafArray);
    },
    handleCheckChange(data, node, indeterminate) {
      if (node == false) {
        this.map.setLayoutProperty(data.label, "visibility", "none");
      } else {
        this.map.setLayoutProperty(data.label, "visibility", "visible");
      }
    },
    handleNodeClick(data) {
      var layer = this.map.getLayer(data.label);
      this.clickLayerName = layer.id;
      this.clickLayerType = layer.type;
      if (this.clickLayerType == "circle") {
        this.color = this.map.getPaintProperty(
          this.clickLayerName,
          "circle-color"
        );
        this.width = this.map.getPaintProperty(
          this.clickLayerName,
          "circle-radius"
        );
      } else if (this.clickLayerType == "line") {
        this.color = this.map.getPaintProperty(
          this.clickLayerName,
          "line-color"
        );
        this.width = this.map.getPaintProperty(
          this.clickLayerName,
          "line-width"
        );
        this.opacity = this.map.getPaintProperty(
          this.clickLayerName,
          "line-opacity"
        );
      } else if (this.clickLayerType == "fill") {
        this.color = this.map.getPaintProperty(
          this.clickLayerName,
          "fill-color"
        );
        this.opacity = this.map.getPaintProperty(
          this.clickLayerName,
          "fill-opacity"
        );
        this.outlineColor = this.map.getPaintProperty(
          this.clickLayerName,
          "fill-outline-color"
        );
      }
      this.dialogVisible = true;
    },
    editLayer() {
      if (this.clickLayerType == "circle") {
        this.map.setPaintProperty(
          this.clickLayerName,
          "circle-color",
          this.color
        );
        this.map.setPaintProperty(
          this.clickLayerName,
          "circle-radius",
          parseFloat(this.width)
        );
      } else if (this.clickLayerType == "line") {
        this.map.setPaintProperty(
          this.clickLayerName,
          "line-color",
          this.color
        );
        this.map.setPaintProperty(
          this.clickLayerName,
          "line-width",
          parseFloat(this.width)
        );
        this.map.setPaintProperty(
          this.clickLayerName,
          "line-opacity",
          parseFloat(this.opacity)
        );
      } else if (this.clickLayerType == "fill") {
        this.map.setPaintProperty(
          this.clickLayerName,
          "fill-color",
          this.color
        );
        this.map.setPaintProperty(
          this.clickLayerName,
          "fill-outline-color",
          this.outlineColor
        );
        this.map.setPaintProperty(
          this.clickLayerName,
          "fill-opacity",
          parseFloat(this.opacity)
        );
      }
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
#tree {
  position: absolute;
  top: 70px;
  bottom: 0px;
  left: 240px;
  width: 300px;
  background-color: #fff;
}
.editDiv {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
