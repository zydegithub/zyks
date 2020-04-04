/*
 *
 * @Description: mapbox 测距插件
 * @Author: charlotte.wangchao
 * @Date: 2017-02-16 13:42:45
 * @Last Modified by: charlotte.wangchao
 * @Last Modified time: 2017-03-08 15:47:24
 */

function MeasureControl(options) {
  this.options = Object.assign({}, MeasureControl.DEFAULTS, options);

  this.options.isDistance = options && options.isDistance !== undefined ? options.isDistance : true;
  this.options.isArea = options && options.isArea !== undefined ? options.isArea : true;
  if (options.map) {
    this._map = options.map;

    this.state = "off";

    // 所有测距geojson
    this.geojsonList = {};

    // 储存可能冲突的事件
    this.events = {};
    if (this.options.isDistance) {
      this._measureOnButton = this._createNode("button", "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-off", "", this._container, "measure-off", this._onMeasureStart);
    }
    if (this.options.isArea) {
      this._measureAreaOnButton = this._createNode("button", "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-area-off", "", this._container, "measure-area-off", this._onMeasureAreaStart);
    }
  }
  // 不能删除 不然会报错的
  this._onClick = this._onClick.bind(this);
  this._onDblClick = this._onDblClick.bind(this);
  this._onMousemove = this._onMousemove.bind(this);
  this._onAddSourceLayer = this._onAddSourceLayer.bind(this);
  this._toggleState = this._toggleState.bind(this);
  this._onAddMouseTips = this._onAddMouseTips.bind(this);
  this._toggleCursor = this._toggleCursor.bind(this);
  this._onMeasureStart = this._onMeasureStart.bind(this);
  this._onMeasureAreaStart = this._onMeasureAreaStart.bind(this);
  this._getPointsList = this._getPointsList.bind(this);
  this._getLineDistance = this._getLineDistance.bind(this);
  this._bindPointPopup = this._bindPointPopup.bind(this);
  this._removeMeasure = this._removeMeasure.bind(this);
  this._removeCurPopups = this._removeCurPopups.bind(this);
  this._toggleEvents = this._toggleEvents.bind(this);
}
/**
 * @description 加载Measure组件
 * @param {any} map
 * @returns
 */
MeasureControl.prototype.onAdd = function (map) {
  this._map = map;
  this._container = document.createElement("div");
  this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group measure-ctrl-group";
  this._container.title = "测量面积";
  this.state = "off";

  // 所有测距geojson
  this.geojsonList = {};

  // 储存可能冲突的事件
  this.events = {};

  this._map.on("click", this._onClick);
  this._map.on("dblclick", this._onDblClick);
  this._map.on("mousemove", this._onMousemove);
  // wzy-添加侧面模块
  if (this.options.isDistance) {
    this._measureOnButton = this._createNode("button", "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-off", "", this._container, "measure-off", this._onMeasureStart);
  }
  if (this.options.isArea) {
    this._measureAreaOnButton = this._createNode("button", "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-area-off", "", this._container, "measure-area-off", this._onMeasureAreaStart);
  }
  return this._container;
};

MeasureControl.DEFAULTS = {
  linestring: {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    }
  },
  circleRadius: 3.5,
  circleColor: "#fff",
  lineColor: "#EC5050",
  lineWidth: 3,
  lineCap: "round",
  lineJoin: "round"
};

/**
 * @description 卸载Measure组件
 */
MeasureControl.prototype.onRemove = function () {
  this._container.parentNode.removeChild(this._container);
  this._map.off("click", this._onClick);
  this._map.off("dblclick", this._onDblClick);
  this._map.off("mousemove", this._onMousemove);
  this._map = undefined;
};

/**
 * @description 获取控件的默认位置
 * ['top-left','top-right','bottom-left','bottom-right']
 * @returns
 */
MeasureControl.prototype.getDefaultPosition = function () {
  return "top-left";
};

/**
 * @description 创建button，绑定button到对应父级，并返回button的引用
 * @param {string} className button的类名
 * @param {node} container button绑定的父级node
 * @param {string} ariaLabel button的aria-label属性值
 * @param {func} fn click事件触发的方法
 * @returns {node}
 */
MeasureControl.prototype._createNode = function (node, className, textContent, container, ariaLabel, fn) {
  var a = document.createElement(node);
  a.className = className;
  a.textContent = textContent;
  a.setAttribute("aria-label", ariaLabel);
  if (fn) a.addEventListener("click", fn);
  if (container) {
    container.appendChild(a);
  }
  // container.appendChild(a);

  return a;
};

MeasureControl.prototype._removeNode = function (node, fn) {
  node.remove();
  if (fn) node.removeEventListener("click", fn);
};

/**
 * @description map的click事件
 * @param {any} e
 */
MeasureControl.prototype._onClick = function (e) {
  if (this.state == "distanceOn") {
    this.drawLine(e);
  } else if (this.state == "areaOn") {
    this.drawPolygon(e);
  }
};
// 测距模式下点击地图画线
MeasureControl.prototype.drawLine = function (e) {
  if (this.state === "off") return;

  var map = this._map;
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["measure-points-" + this._name]
  });

  // 更新tips的文字
  this.tips.textContent = "单击继续，双击结束测距";

  // 画点
  var point = this.point = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [e.lngLat.lng, e.lngLat.lat]
    },
    "properties": {
      "id": String(new Date().getTime()),
      "curDistance": 0.0,
      "prevDistance": 0.0
    }
  };

  this.curGeojson.features.push(point);

  // 画线
  var PointList = this._getPointsList();
  if (PointList.length >= 2) {
    this.lineString.geometry.coordinates = PointList.map(function (point) {
      return point.geometry.coordinates;
    });

    // 计算距离
    this.prevDis = this.curDis || 0.0;
    this.curDis = this._getLineDistance(this.lineString, {
      unit: "kilometers"
    });
    this.curDis = this.curDis >= 1000 ? (this.curDis / 1000).toFixed(3).toLocaleString() + "千米" : this.curDis.toLocaleString() + "米";
    // 将距离放到每个点的properties里
    var last = this.curGeojson.features.length - 1;
    this.curGeojson.features[last].properties.curDistance = this.curDis;
    this.curGeojson.features[last].properties.prevDistance = this.prevDis;

    this.curGeojson.features.push(this.lineString);
  }

  // 设置map的dataSource
  map.getSource("measure-geojson-" + this._name).setData(this.curGeojson);

  // 每个point绑定popup
  this._bindPointPopup(PointList);
};
// 测面模式下点击地图画面
MeasureControl.prototype.drawPolygon = function (e) {
  if (this.state === "off") return;

  var map = this._map;
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["measure-points-" + this._name]
  });

  // 更新tips的文字
  this.tips.textContent = "单击继续，双击结束测距";

  // 画点
  var point = this.point = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [e.lngLat.lng, e.lngLat.lat]
    },
    "properties": {
      "id": String(new Date().getTime()),
      "area": 0.0
    }
  };

  this.curGeojson.features.push(point);
  this.startPoint = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": this.curGeojson.features[0].geometry.coordinates
    },
    "properties": {
      "id": String(new Date().getTime()),
      "area": 0.0
    }
  };
  // 画面
  var PointList = this._getPointsList();
  if (PointList.length >= 2) {
    this.lineString.geometry.coordinates = PointList.map(function (point) {
      return point.geometry.coordinates;
    });
    this.curGeojson.features.push(this.lineString);
  }
  if (PointList.length >= 3) {
    this.polygon.geometry.coordinates[0] = PointList.map(function (point) {
      return point.geometry.coordinates;
    });
    this.polygon.geometry.coordinates[0].push(PointList[0].geometry.coordinates);
    // 计算面积
    this.area = this._getPolygonArea(this.polygon);
    if (this.area / 1000000 < 1) {
      this.area = this.area.toFixed(2).toLocaleString() + "平方米";
    } else {
      this.area = (this.area / 1000000).toFixed(2).toLocaleString() + "平方千米";
    }
    // 将面积放到每个点的properties里
    var last = this.curGeojson.features.length - 1;
    this.curGeojson.features[last - 1].properties.area = this.area;
    //   this.curGeojson.features[last].properties.prevDistance = this.prevDis;

    this.curGeojson.features.push(this.polygon);
  }

  // 设置map的dataSource
  map.getSource("measure-geojson-" + this._name).setData(this.curGeojson);

  // 每个point绑定popup
  this._bindPointPopup(PointList);
};
/**
 * @description 计算线段的距离
 * @param {geojson} geojson geometry的type为LineString
 * @param {unit} 测量单位
 * @return {Number} 距离
 */
MeasureControl.prototype._getLineDistance = function (lineString, unit) {
  return turf.lineDistance(lineString, unit) * 1000;
};
// 计算面积--单位：平方千米
MeasureControl.prototype._getPolygonArea = function (polygon) {
  var area_mu = turf.area(polygon);
  // var area_mu = Number(turf.area(polygon))
  return area_mu;
};
/**
 * @description 获取所有的Point geojson格式
 * @return {Array} Point数组
 */
MeasureControl.prototype._getPointsList = function () {
  return this.curGeojson.features.filter(function (item) {
    return item.geometry.type === "Point";
  });
};

/**
 * @description 删除当前测距实例的popups
 * @param {string} name 当前测距实例的名字
 */
MeasureControl.prototype._removeCurPopups = function (name) {
  this.geojsonList[name].popups.map(function (popup) {
    popup.remove();
  });
};

/**
 * @description 给每个Point绑定popup
 * @param {array} popup数组
 */
MeasureControl.prototype._bindPointPopup = function (list) {
  var _this = this;

  // 清除原先所有的popup
  this._removeCurPopups(this._name);
  if (this.state == "distanceOn") {
    // 重新绑定popup
    list.map(function (point) {
      var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          total: point.properties.curDistance,
          prev: point.properties.prevDistance
        })
        .setLngLat(point.geometry.coordinates)
        .setHTML("<span style='font-size:14px'>总距离:" + point.properties.curDistance + "</span>")
        .addTo(_this._map);

      popup._container.className += " mapbox-measure-popup";
      _this.geojsonList[_this._name].popups.push(popup);
    });
  } else if (this.state == "areaOn") {
    if (list.length >= 3) {
      var point = list[list.length - 1];
      var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          area: point.properties.area
        })
        .setLngLat(point.geometry.coordinates)
        .setHTML("<span style='font-size:14px'>面积:" + point.properties.area + "</span>")
        .addTo(_this._map);

      popup._container.className += " mapbox-measure-popup";
      _this.geojsonList[_this._name].popups.push(popup);
    }
  }
};

/**
 * @description map的dblClick事件
 * @param {any} e
 */
MeasureControl.prototype._onDblClick = function (e) {
  if (this.state === "off") return;

  //   this._toggleState('off');
  this._toggleEvents("add", "click");
  if (this.clickFrom == "distance") {
    this._measureOnButton.setAttribute("aria-label", "measure-off");
    this._measureOnButton.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-off";
  } else {
    this._measureAreaOnButton.setAttribute("aria-label", "measure-area-off");
    this._measureAreaOnButton.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-area-off";
  }

  // 删除鼠标跟随tips
  this._removeNode(this.tips);
  // 修改鼠标手势
  this._toggleCursor("-webkit-grab");
  // 创建删除当前测距的button
  var length = this.geojsonList[this._name].popups.length;
  var options = this.geojsonList[this._name].popups[length - 1].options;
  if (this.clickFrom == "distance") {
    this.geojsonList[this._name].popups[length - 1].setHTML("<div style='font-size:14px'>总距离:" + options.total + "<button style='width:20px' data-name='" + this._name + "' id='dele-btn-" + this._name + "'>X</button></div>");
    document.getElementById("dele-btn-" + this._name).style.marginLeft = "5px";
    document.getElementById("dele-btn-" + this._name).addEventListener("click", this._removeMeasure);
  } else {
    this.geojsonList[this._name].popups[length - 1].setHTML("<div style='font-size:14px'>总面积:" + options.area + "<button style='width:20px' class=close-btn data-name='" + this._name + "' id='dele-btn-" + this._name + "'>X</button></div>");
    document.getElementById("dele-btn-" + this._name).style.marginLeft = "5px";
    document.getElementById("dele-btn-" + this._name).addEventListener("click", this._removeMeasure);
  }
  this.curGeojson = {
    "type": "FeatureCollection",
    "features": []
  };
  this.point = null;
  this.startPoint = null;
  this.state = "off";
};

/**
 * @description 删除当前name的Measure实例
 */
MeasureControl.prototype._removeMeasure = function (e) {
  this._toggleState("off"); // 测量开始即移除数据源与layer
  var name = this._name;
  if (!name) return;
  var map = this._map;
  if (map.getLayer("measure-points-" + name)) {
    map.removeLayer("measure-points-" + name);
  }
  if (map.getLayer("measure-lines-" + name)) {
    map.removeLayer("measure-lines-" + name);
  }
  if (map.getLayer("measure-fill-" + name)) {
    map.removeLayer("measure-fill-" + name);
  }
  if (map.getLayer("measure-lines-mousemove")) {
    map.removeLayer("measure-lines-mousemove");
  }
  if (map.getSource("measure-geojson-" + name)) {
    map.removeSource("measure-geojson-" + name);
  }
  if (map.getSource("measure-geojson-mousemove")) {
    map.removeSource("measure-geojson-mousemove");
  }
  // 删除当前name的所有的popup
  if (this.geojsonList[name]) {
    this._removeCurPopups(name);
  }
  // 删除当前name的geojson对象
  delete this.geojsonList[name];
};

/**
 * @description map的点击测距按钮事件，进入测距模式，删除map的其他点击事件，禁用map的双击放大效果
 * @param {any} e
 */
MeasureControl.prototype._onMeasureStart = function (e) {
  // if (this.state == 'off') {
  this._removeMeasure(e); // 测量开始即移除数据源与layer
  // }
  if (this.state === "distanceOn") return;

  // 进入测距模式
  this._toggleState("distanceOn");
  this._measureOnButton.setAttribute("aria-label", "measure-on");
  this._measureOnButton.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-on";

  // 禁用map的其他click事件
  this._toggleEvents("remove", "click");
  // 初始化总距离、之前的距离
  this.prevDis = 0.0;
  this.curDis = 0.0;

  // 设置鼠标手势
  this._toggleCursor("crosshair");

  // 创建跟随鼠标提示框
  this.mouseTips = this._onAddMouseTips(e);

  // 设置当前测距实例的唯一key
  this._name = String(new Date().getTime());

  // 创建当前测距的mapSource、mapLayer
  this._onAddSourceLayer(e);
};
/**
 * @description map的点击测面按钮事件，进入测距模式，删除map的其他点击事件，禁用map的双击放大效果
 * @param {any} e
 */
MeasureControl.prototype._onMeasureAreaStart = function (e) {
  // if (this.state == 'off') {
  this._removeMeasure(e);
  // }
  if (this.state === "areaOn") return;
  // 进入测面模式
  this._toggleState("areaOn");
  this._measureAreaOnButton.setAttribute("aria-label", "measure-area-on");
  this._measureAreaOnButton.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-area-on";

  // 禁用map的其他click事件
  this._toggleEvents("remove", "click");

  // 设置鼠标手势
  this._toggleCursor("crosshair");

  // 创建跟随鼠标提示框
  this.mouseTips = this._onAddMouseTips(e);

  // 设置当前测面实例的唯一key
  this._name = String(new Date().getTime());

  // 创建当前测距的mapSource、mapLayer
  this._onAddAreaSourceLayer(e);
};

/**
 * @description 创建鼠标跟随提示框
 * @param {event} 鼠标点击事件
 */
MeasureControl.prototype._onAddMouseTips = function (e) {
  var tips = this.tips = this._createNode("div", "measure_mousemove_tips", "单击确定起点", document.body, "mousemove_tips");
  // 设置tips的样式
  tips.style.position = "absolute";
  this._setTipsPosition(e, tips);

  return tips;
};

/**
 * @description 设置鼠标跟随tips的位置
 * @param {event} 鼠标移动事件
 * @param {tips} tips对应的dom元素
 */
MeasureControl.prototype._setTipsPosition = function (e, tips) {
  if (!e || !tips) return;
  var x = e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
  var y = e.pageY || e.clientY + (document.documentElement.scrollLeft || document.body.scrollLeft);
  if (x < e.screenX && y < e.screenX) {
    tips.style.left = x + 10 + "px";
    tips.style.top = y + 10 + "px";
  } else {
    tips.style.left = "400px";
    tips.style.top = "100px";
  }
  tips.style.padding = "10px";
  tips.style.background = "#fff";
  tips.style.fontSize = "10px";
  tips.style.borderRadius = "3px";
  tips.style.boxShadow = "0 1px 2px rgba(0,0,0,0.10)";
  tips.style.zIndex = 100;
  tips.style.display = "none";
};

/**
 * @description 创建MeasureControl的mapSource、mapLayer
 */
MeasureControl.prototype._onAddSourceLayer = function () {
  // 样式
  this.clickFrom = "distance"; // 用于判断是什么模式
  var circleRadius = this.options.circleRadius;
  var circleColor = this.options.circleColor;
  var lineWidth = this.options.lineWidth;
  var lineColor = this.options.lineColor;
  var lineCap = this.options.lineCap;
  var lineJoin = this.options.lineJoin;
  this.curGeojson = {
    "type": "FeatureCollection",
    "features": []
  };

  this.lineString = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    }
  };
  // dataSource
  this._map.addSource("measure-geojson-" + this._name, {
    "type": "geojson",
    "data": this.curGeojson
  });

  // dataSource
  this._map.addSource("measure-geojson-mousemove", {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": []
    }
  });
  // 线图层
  this._map.addLayer({
    id: "measure-lines-" + this._name,
    type: "line",
    source: "measure-geojson-" + this._name,
    layout: {
      "line-cap": lineCap,
      "line-join": lineJoin
    },
    paint: {
      "line-color": lineColor,
      "line-width": lineWidth
    },
    filter: ["in", "$type", "LineString"]
  });

  // 点图层
  this._map.addLayer({
    id: "measure-points-" + this._name,
    type: "circle",
    source: "measure-geojson-" + this._name,
    paint: {
      "circle-stroke-width": lineWidth,
      "circle-stroke-color": lineColor,
      "circle-radius": circleRadius,
      "circle-color": circleColor
    },
    filter: ["in", "$type", "Point"]
  });

  // mouseover线图层

  this._map.addLayer({
    id: "measure-lines-mousemove",
    type: "line",
    source: "measure-geojson-mousemove",
    layout: {
      "line-cap": lineCap,
      "line-join": lineJoin
    },
    paint: {
      "line-color": lineColor,
      "line-width": lineWidth
    }
  });

  // 保存所有的测绘feature、popup
  this.geojsonList[this._name] = {
    geojson: this.curGeojson,
    popups: []
  };
};
/**
 * @description 创建MeasureControl的mapSource、mapLayer
 */
MeasureControl.prototype._onAddAreaSourceLayer = function () {
  // 样式
  this.clickFrom = "area";
  var circleRadius = this.options.circleRadius;
  var circleColor = this.options.circleColor;
  var lineWidth = this.options.lineWidth;
  var lineColor = this.options.lineColor;
  var lineCap = this.options.lineCap;
  var lineJoin = this.options.lineJoin;
  this.curGeojson = {
    "type": "FeatureCollection",
    "features": []
  };

  this.polygon = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": []
    }
  };
  this.lineString = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    }
  };
  // dataSource
  this._map.addSource("measure-geojson-" + this._name, {
    "type": "geojson",
    "data": this.curGeojson
  });
  // dataSource
  this._map.addSource("measure-geojson-mousemove", {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": []
    }
  });
  // 线图层
  this._map.addLayer({
    id: "measure-lines-" + this._name,
    type: "line",
    source: "measure-geojson-" + this._name,
    layout: {
      "line-cap": lineCap,
      "line-join": lineJoin
    },
    paint: {
      "line-color": lineColor,
      "line-width": lineWidth
    },
    filter: ["in", "$type", "LineString"]
  });
  // 面图层
  this._map.addLayer({
    id: "measure-fill-" + this._name,
    type: "fill",
    source: "measure-geojson-" + this._name,
    paint: {
      "fill-color": "#EC5050",
      "fill-opacity": 0.2,
      "fill-outline-color": "#ee1433",
      "fill-antialias": true,
      "fill-translate": [0, 0],
      "fill-translate-anchor": "map"
      // "fill-pattern": ""
    },
    layout: {
      visibility: "visible"
    },
    filter: ["in", "$type", "Polygon"]
  });
  // 点图层
  this._map.addLayer({
    id: "measure-points-" + this._name,
    type: "circle",
    source: "measure-geojson-" + this._name,
    paint: {
      "circle-stroke-width": lineWidth,
      "circle-stroke-color": lineColor,
      "circle-radius": circleRadius,
      "circle-color": circleColor
    },
    filter: ["in", "$type", "Point"]
  });
  // mouseover线图层

  this._map.addLayer({
    id: "measure-lines-mousemove",
    type: "line",
    source: "measure-geojson-mousemove",
    layout: {
      "line-cap": lineCap,
      "line-join": lineJoin
    },
    paint: {
      "line-color": lineColor,
      "line-width": lineWidth
    }
  });
  // 保存所有的测绘feature、popup
  this.geojsonList[this._name] = {
    geojson: this.curGeojson,
    popups: []
  };
};

/**
 * @description map的点击测距按钮事件，结束测距模式
 * @param {any} e
 */
MeasureControl.prototype._onMeasureEnd = function (e) {
  console.log("结束测距模式");
  this._toggleState("off");
};

/**
 * @description map的mousemove事件
 * @param {any} e
 */
MeasureControl.prototype._onMousemove = function (e) {
  if (this.state === "off") return;

  // 更新tips的位置
  this._setTipsPosition(e.originalEvent, this.tips);
  if (!this.point) return;

  // 鼠标当前位置点
  var point = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [e.lngLat.lng, e.lngLat.lat]
    },
    "properties": {}
  };

  // 绘制最后一个点和鼠标当前位置的线段
  var curcoord = this.point.geometry.coordinates;
  if (this.startPoint) var coord0 = this.startPoint.geometry.coordinates;

  if (this.state == "distanceOn" || this.curGeojson.features.length < 3) {
    var lineString = {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [curcoord, [e.lngLat.lng, e.lngLat.lat]]
      }
    };
  } else if (this.state == "areaOn" && this.curGeojson.features.length >= 3) {
    var lineString = {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [curcoord, [e.lngLat.lng, e.lngLat.lat], coord0]
      }
    };
  }

  // 测距鼠标位置和最后一个Point之间的距离
  var distance = this._getLineDistance(lineString, {
    unit: "kilometers"
  });
  // 创建移动的线图层

  if ((distance - 0) === 0) return;
  this._map.getSource("measure-geojson-mousemove").setData({
    "type": "FeatureCollection",
    "features": [lineString]
  });
  distance = distance >= 1000 ? (distance / 1000).toFixed(3).toLocaleString() + "千米" : distance.toLocaleString() + "米";

  this.tips.innerText = "当前距离：" + distance + "\n单击继续，双击结束测距";
};

/**
 * @description Measure组件的状态切换
 * @param {string} Oneof ['on','off']
 * @return {bool} 是否处于测距状态
 */
MeasureControl.prototype._toggleState = function (state) {
  this.state = state;
  // 禁用map双击放大效果
  if (state.indexOf("On") > -1) {
    this._map.doubleClickZoom.disable();
  } else {
    this._map.doubleClickZoom.enable();
  }
};

/**
 * @description 鼠标手势的切换
 * @param {string} 鼠标手势
 */
MeasureControl.prototype._toggleCursor = function (cursor) {
  this._map.getCanvas().style.cursor = cursor;
};

/**
 * @description 事件防冲突
 * @param {string} 是否防冲突
 * @param {string} 事件名称
 */
MeasureControl.prototype._toggleEvents = function (toggle, event) {
  var _this = this;

  // 假如没有储存对应event的事件
  if (!this.events[event]) {
    this.events[event] = [];
    this._map._listeners[event].map(function (item, index) {
      if (item.name !== "bound ") {
        _this.events[event].push(item);
      }
    });
  }

  if (this.events[event].length === 0) return;

  // off其他不相关的event事件
  if (toggle === "remove") {
    this.events[event].map(function (item, index) {
      _this._map.off(event, item);
    });
  } else if (toggle === "add") {
    // 重新监听所有event事件
    this.events[event].map(function (item, index) {
      _this._map.on(event, item);
    });
  }
};
