<template>
  <div class="map" id="map"></div>
</template>

<script>
import olms from 'ol-mapbox-style';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      olms('map', 'http://172.16.108.201:8099/api/v1/styles/1')
      // var styleJson = 'http://172.16.108.201:8099/api/v1/styles/1';
      // olms.apply('map', styleJson)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
