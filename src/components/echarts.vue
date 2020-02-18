<template>
  <div style="background:blue">
    <div id="myChart"></div>
    <button @click="stop">暂停</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      option: '',
      myChart: null
    };
  },
  created () {
  },
  mounted () {
    this.drawLine()
  },
  computed: {
    ...mapGetters({
      asideBarData: 'GET_ASIDEBAR'
    })
  },
  methods: {
    ...mapActions(['getAsideBar']),
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('myChart'));
      this.option = this.organizeOption()
      this.myChart.setOption(this.option);
      this.myChart.on("timelinechanged", function (timeLineIndex) {
        console.log(timeLineIndex)
      });
    },
    organizeOption () {
      var option = {
        baseOption: {
          timeline: {
            data: ["2000", "2010", "2010", "2010", "2010"],
            top: 2,
            left: 20,
            right: 20,
            axisType: "category",

            autoPlay: true,
            lineStyle: {
              color: "#fff"
            },
            label: {
              color: "#fff",
              formatter: function (s) {
                return new Date(s).getFullYear();
              }
            },
            controlStyle: {
              color: "#fff",
              borderColor: "#fff",
              showPlayBtn: true
            },
            currentIndex: 1,
            playInterval: 1000,
            controlPosition: 'left',
          },
          tooltip: {},
          legend: {
            textStyle: {
              color: "#fff"
            },
            data: []
          },
          calculable: true,
          grid: {
            top: 100,
            left: 70
          },
          xAxis: [{
            type: "category",
            axisLabel: {
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              },
              nameTextStyle: {
                fontSize: 10
              }
            },
            data: [],
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#ffffff00"
              }
            }
          }],
          series: []
        },
        options: []
      };
      return option;
    },
    stop () {
      this.option.baseOption.timeline.autoPlay = false;
      this.myChart.setOption(this.option);
    }
  }
};
</script>
<style scoped>
#myChart {
  width: 300px;
  height: 100px;
}
</style>
