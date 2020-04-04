<template>
  <div id="tree">
    <el-tree ref="tree" :data="data" show-checkbox node-key="id" :default-expanded-keys="leafArray" default-expand-all :expand-on-click-node="false" :render-content="renderContent" @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>
    <!-- <el-dialog title="编辑图层" :visible.sync="dialogVisible" width="24%" height="40%">
      <el-tabs>
        <div class="editDiv">
          <span style="line-height:46px">颜色:</span>
          <el-color-picker v-model="color" style="position:absolute"></el-color-picker>
        </div>
        <div v-show="clickLayerType=='fill'" class="editDiv">
          <span style="line-height:46px">边框颜色:</span>
          <el-color-picker v-model="outlineColor" style="position:absolute"></el-color-picker>
        </div>
        <div v-show="clickLayerType!=='fill'" class="editDiv">
          <span>宽度或大小:</span>
          <el-input v-model="width" style="width:30%"></el-input>
        </div>
        <div v-show="clickLayerType!=='circle'" class="editDiv">
          <span>透明度:</span>
          <el-input v-model="opacity" style="width:30%"></el-input>
        </div>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editLayer">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data () {
    return {
      layer: {
        id: 3,
        label: "",
        isLayer: false,
        children: []
      },
      data: [{
        id: 1,
        label: '图层',
        layerId: 0,
        isLayer: false,
        children: [{
          id: 2,
          label: '背景',
          layerId: 0,
          isLayer: false,
        }]
      }],
      layerId: 3,
      leafArray: [1, 2],
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
    layerNames: Array,
    shpNames: Array
  },
  watch: {
    layerNames: {
      handler: function (val, oldVal) {
        if (val.length != 0) {
          for (var i = 0; i < val.length; i++) {
            var layerCopy = JSON.parse(JSON.stringify(this.layer));
            if (val.length > 1) { layerCopy.isLayer = true }
            else if (val.length == 1 && this.shpNames.length == 0) { layerCopy.isLayer = true }
            else { layerCopy.isLayer = false }
            layerCopy.label = val[i].name;
            layerCopy.id = this.layerId;
            layerCopy.layerId = val[i].id;
            this.leafArray.push(this.layerId);
            this.layerId++;
            if (this.shpNames.length != 0) {
              for (var j = 0; j < this.shpNames.length; j++) {
                var shpCopy = JSON.parse(JSON.stringify(this.layer));
                shpCopy.label = this.shpNames[j];
                shpCopy.id = this.layerId;
                shpCopy.isLayer = true;
                this.leafArray.push(this.layerId);
                this.layerId++;
                layerCopy.children.push(shpCopy);
              }
            }
            this.data[0].children.push(layerCopy);
          }
        }
        console.log(this.data);
      },
      deep: true
    },
    leafArray: {
      handler: function (val, oldval) {
        this.$nextTick(() => {
          this.setCheckedKeys();
        });
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setCheckedKeys();
    });
  },
  computed: {
    ...mapGetters({
      usedIds: "usedIds"
    })
  },
  methods: {
    ...mapMutations(["SET_USEDID"]),
    remove (node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
      this.map.removeLayer(data.label);
    },
    leftBtn (node, data) {
      var top = event.clientY - 18;
      var bottom = document.body.clientHeight;
      bottom = bottom - top - 36;
      this.$emit('rightBtns', node, data, top, bottom);
      event.stopPropagation();
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.leftBtn(node, data)}
            >
              <i class="el-icon-more" style="font-size:22px"></i>
            </el-button>
          </span>
        </span>
      );
    },
    setCheckedKeys () {
      this.$refs.tree.setCheckedKeys(this.leafArray);
    },
    handleCheckChange (data, node, indeterminate) {
      if (data.isLayer) {
        if (node == false) {
          this.map.setLayoutProperty(data.label, "visibility", "none");
        } else {
          this.map.setLayoutProperty(data.label, "visibility", "visible");
        }
      }
      if (data.label == "背景") {
        for (let index = 1; index < 1030; index++) {
          if (node == false) {
            this.map.setLayoutProperty(index, "visibility", "none");
          } else {
            this.map.setLayoutProperty(index, "visibility", "visible");
          }
        }
      }
    },
    handleNodeClick (data) {
      this.SET_USEDID(data.layerId)
      this.$parent.showHomePanel = !this.$parent.showHomePanel
    },
  }
};
</script>

<style scoped>
#tree {
  position: absolute;
  top: 120px;
  bottom: 0px;
  left: 239px;
  width: 300px;
  background-color: #fff;
}
.editDiv {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
