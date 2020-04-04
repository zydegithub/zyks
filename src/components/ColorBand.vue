<template>
  <div id="colorBand">
    <div class="gradient-select" @click="showColor">
      <div v-for="(color, index) in colorList" :key="index">
        <div v-if="index == colorBandIndex">
          <div class="gradient-colorband" v-bind:style="{
              background:
                'linear-gradient(to right,' +
                color[0] +
                ',' +
                color[1] +
                ')'
            }"></div>
          <span class="gradient-index">{{ index }}</span>
        </div>
      </div>
      <div class="gradient-arrow"></div>
    </div>
    <div class="gradient-plus" @click="showAdd">+</div>
    <div id="gradient-menu" v-if="gradient_isShow">
      <div class="gradient-colorbox" v-for="(color, index1) in colorList" @click="chooseColor(index1)" :key="index1">
        <div class="gradient-text">{{ index1 }}</div>
        <div class="gradient-color" v-bind:style="{
            background:
              'linear-gradient(to right,' +
              color[0] +
              ',' +
              color[1] +
              ')'
          }"></div>
      </div>
    </div>
    <div id="add-menu" v-if="add_show">
      <div style="text-align:center">
        <span>开始颜色</span><input v-model="start_color" /></div>
      <div style="text-align:center">
        <span>结束颜色</span><input v-model="end_color" /></div>
      <div id="class-footer">
        <span class="color-btn" @click="add_show = false">取消</span>
        <span class="color-btn" @click="addColor">添加</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'colorBand',
  data () {
    return {
      colorBandIndex: 0,
      gradient_isShow: false,
      add_show: false,
      start_color: '',
      end_color: ''
    };
  },
  computed: {
    ...mapGetters(['styleJson'])
  },
  props: {
    // data: Object,
    // layerIdx: Number,
    colorList: Array
  },
  mounted () {
    // if (this.data.colorList) {
    //   this.colorList = this.data.colorList;
    // }
    if (localStorage.getItem('list_color')) {
      let list_store = localStorage.getItem('list_color').split(',');
      if (list_store.length != 0) {
        let arr = [];
        for (let i = 0, len = list_store.length; i < len; i += 2) {
          let cc = [list_store[i], list_store[i + 1]];
          arr.push(cc);
        }
        this.colorList = this.colorList.concat(arr);
      }
    }
  },
  methods: {
    // 色带 显示下拉框
    showColor () {
      this.add_show = false;
      this.gradient_isShow = !this.gradient_isShow;
    },
    // 色带 点击色带
    chooseColor (index) {
      this.colorBandIndex = index;
      this.gradient_isShow = false;
    },
    showAdd () {
      this.gradient_isShow = false;
      this.add_show = true;
      this.start_color = '';
      this.end_color = '';
    },
    addColor () {
      let start = this.isColor(this.start_color);
      if (!start) {
        this.$message({
          message: '请输入正确的开始颜色值',
          duration: 3000,
          type: 'error'
        });
        return;
      }
      let end = this.isColor(this.end_color);
      if (!end) {
        this.$message({
          message: '请输入正确的结束颜色值',
          duration: 3000,
          type: 'error'
        });
        return;
      }
      this.colorList.push([this.start_color, this.end_color]);
      let list_store = [];
      if (localStorage.getItem('list_color')) {
        list_store = localStorage.getItem('list_color').split(',');
      }

      if (list_store.length != 0) {
        let arr = [];
        for (let i = 0, len = list_store.length; i < len; i += 2) {
          let cc = [list_store[i], list_store[i + 1]];
          arr.push(cc);
        }
        arr.push([this.start_color, this.end_color]);
        localStorage.setItem('list_color', arr);
      } else {
        localStorage.setItem('list_color', [
          [this.start_color, this.end_color]
        ]);
      }
      this.add_show = false;
    },
    isColor (str) {
      let myRe = /^rgb\(|(^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$)/g;
      let myArray = myRe.exec(str);
      if (!myArray) {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    colorBandIndex: function (val) {
      this.$emit('change', val);
    }
  }
};
</script>
<style scoped>
#colorBand {
  position: relative;
  width: 190px;
  margin-right: 40px;
}

/* 色带显示框 */

.gradient-select {
  width: 170px;
  height: 34px;
  line-height: 34px;
  background-color: white;
  border: 1px solid #a9a9a9;
  border-radius: 1px;
  display: inline-block;
  vertical-align: middle;
}

.gradient-select:hover {
  border: 1px solid #7f7f7f;
}

/* 色带显示框-下拉箭头 */

.gradient-arrow {
  font-size: 16px;
  float: right;
  margin: 12px 6px 4px 8px;
  border-color: black transparent transparent transparent;
  border-style: solid dashed dashed dashed;
  border-width: 8px 4px 8px 4px;
}

/* 色带显示框-色带 */

.gradient-colorband {
  height: 24px;
  width: 120px;
  margin: 4px 3px;
  border: 1px solid black;
  float: left;
}

/* 色带显示框-序号 */

.gradient-index {
  height: 34px;
  line-height: 34px;
  width: 16px;
  float: left;
  text-align: center;
}

/* 色带下拉框-总框 */

#gradient-menu {
  /* height: 320px; */
  width: 170px;
  background-color: white;
  position: fixed;
  margin-left: 0px;
  margin-top: -1px;
  border: 1px solid #aaa;
  z-index: 10000;
}
#add-menu {
  padding: 0 10px;
  width: 170px;
  background-color: white;
  position: fixed;
  margin-left: 0px;
  margin-top: -1px;
  border: 1px solid #aaa;
  z-index: 10000;
}
#add-menu input {
  width: 100px;
}

/* 色带下拉框-单框 */

.gradient-colorbox {
  height: 34px;
  line-height: 34px;
  padding: 2px;
}

.gradient-colorbox:hover {
  background-color: #1e90ff;
  border: 1px dashed black;
  color: white;
}

/* 色带下拉框-单框-色带 */

.gradient-color {
  height: 24px;
  width: 120px;
  margin: 2px;
  border: 1px solid black;
}

/* 色带下拉框-单框-序号 */

.gradient-text {
  width: 40px;
  height: 15px;
  text-align: right;
  margin-right: 10px;
  /* margin-top: -10px; */
  float: right;
}
.gradient-plus {
  font-size: 18px;
  cursor: pointer;
  float: right;
}
#class-footer {
  margin: 10px;
  text-align: center;
}
#class-footer .color-btn:last-child {
  margin-left: 10px;
}
.color-btn {
  display: inline-block;
  width: 40px;
  height: 34px;
  background-color: #0099ff;
  color: #fff;
  text-align: center;
  line-height: 34px;
  border-radius: 2px;
  cursor: pointer;
}
</style>
