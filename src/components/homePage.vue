<template>
  <el-container id="homeContain">
    <div class="contain">
      <el-row :gutter="0">
        <el-col
          :span="5"
          v-for="o in layerlist"
          :key="o.layerId"
          :offset="1"
        >
          <el-card
            :body-style="{ padding: '20px' }"
            shadow="hover"
            style="marginBottom:40px;cursor:pointer"
            @click.native="cliLayer(o.layerId)"
          >
            <img
              v-show="o.imgUrl"
              :src="'http://39.105.87.199:7001/public/'+o.imgUrl"
              class="image"
            >
            <img
              v-show="!o.imgUrl"
              :src="'http://39.105.87.199:7001/public/1_img.png'"
              class="image"
            >
            <div style="padding: 2px;">
              <span>{{ o.layerName}}</span><span>({{ o.showName}})</span>
            </div>
            <div style="padding: 2px;">
              <span>创建时间: {{ o.startTime}}</span>
            </div>
            <div style="padding: 2px;">
              <span>修改时间: {{ o.updateTime}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next, jumper"
        :page-size="8"
        :total="layerLength"
      >
      </el-pagination>
    </div>
  </el-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data () {
    return {
      layerlist: null,
      layerLength: 0
    };
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      this.getlayerlist();
    });
  },
  computed: {
    ...mapGetters({
      username: "username",
      usedIds: "usedIds"
    })
  },
  methods: {
    ...mapMutations(["SET_USEDID", "SET_USEDIDS"]),
    ...mapActions(["getlayers"]),
    getlayerlist () {
      var that = this;
      that.getlayers({
        data: { layerUser: that.username, limit: 8, offset: 0 },
        callBack: res => {
          that.layerlist = res.data.user;
        }
      });
      that.getlayers({
        data: { layerUser: that.username },
        callBack: res => {
          that.layerLength = res.data.user.length;
        }
      });
    },
    handleCurrentChange (val) {
      var number = 8 * (val - 1)
      var that = this;
      that.getlayers({
        data: { layerUser: that.username, limit: 8, offset: number },
        callBack: res => {
          that.layerlist = res.data.user;
        }
      });
    },
    cliLayer (val) {
      this.usedIds.push(val)
      this.SET_USEDIDS(this.usedIds)
      this.SET_USEDID(val)
      this.$router.push({
        name: 'mainMap'
      });
    }
  }
};
</script>

<style scoped>
#homeContain {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px 60px 60px 0px;
  background-color: rgba(255, 255, 255, 0.9);
}
.image {
  width: 100%;
  height: 190px;
}
.contain {
  position: absolute;
  right: 60px;
  left: 0px;
  top: 50px;
  height: 700px;
  text-align: left;
  font-size: 18px;
}
.footer {
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 50px;
}

.clearfix:after {
  clear: both;
}
</style>

