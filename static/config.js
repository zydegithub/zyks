const CONFIG = {
  processServiceURL: 'http://localhost:8088/qxgl/',
  baseurl: 'http://39.105.87.199:7001/',
  //   baseurl: 'http://127.0.0.1:7001/',
  tdtLayerObj: {
    marker: {
      name: "标签图",
      url: "static/img/timg.jpg"
    },
    cricle: {
      name: "聚合图",
      url: "static/img/timg.jpg"
    },
    heat: {
      name: "热力图",
      url: "static/img/timg.jpg"
    }
  }
};
const style = {
  "_id": "5e7dc852e40ebf98a24c6403",
  "data_id": 1,
  "name": "标准版",
  "zoom": 2.9,
  "center": [104.22743681047984, 29.332611651233137],
  "transition": {
    "duration": 300,
    "delay": 0
  },
  "layers": [{
    "type": "background",
    "maxzoom": 21,
    "paint": {
      "background-color": "#abc6ef"
    },
    "id": "0"
  }, {
    "type": "fill",
    "source": "11001000070",
    "source-layer": "ANATPL",
    "minzoom": 0,
    "maxzoom": 22,
    "paint": {
      "fill-color": "rgb(245,245,245)",
      "fill-outline-color": "rgb(245,245,245)"
    },
    "id": "1"
  }, {
    "type": "fill",
    "source": "11001000074",
    "source-layer": "HYDA_bu",
    "minzoom": 10,
    "maxzoom": 22,
    "paint": {
      "fill-color": "rgb(245,245,245)",
      "fill-outline-color": "rgb(245,245,245)"
    },
    "id": "2"
  }, {
    "type": "fill",
    "source": "other",
    "source-layer": "BLOA",
    "minzoom": 15,
    "maxzoom": 22,
    "paint": {
      "fill-color": "rgb(236,238,203)",
      "fill-outline-color": "rgb(236,238,203)"
    },
    "id": "3",
    "filter": ["!=", "CLASID", "990990"]
  }, {
    "type": "fill",
    "source": "other",
    "source-layer": "VEGA",
    "minzoom": 11,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#B3D89E",
      "fill-outline-color": "#B3D89E"
    },
    "id": "4"
  }, {
    "type": "fill",
    "source": "other",
    "source-layer": "BUIA",
    "minzoom": 16,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#FBFBFA",
      "fill-outline-color": "#E1E0DE"
    },
    "id": "5"
  }, {
    "type": "fill",
    "source": "other",
    "source-layer": "BUIA",
    "minzoom": 14,
    "maxzoom": 16,
    "paint": {
      "fill-color": "#F9FAF3",
      "fill-outline-color": "#F9FAF3"
    },
    "id": "7"
  }, {
    "type": "fill",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#abc6ef",
      "fill-outline-color": "#abc6ef"
    },
    "id": "8",
    "filter": ["any", ["==", "clasid", "240101"],
      ["==", "clasid", "240102"]
    ]
  }, {
    "type": "fill",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#abc6ef",
      "fill-outline-color": "#abc6ef"
    },
    "id": "10",
    "filter": ["==", "clasid", "230102"]
  }, {
    "type": "fill",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#abc6ef",
      "fill-outline-color": "#abc6ef"
    },
    "id": "12",
    "filter": ["any", ["==", "clasid", "230101"],
      ["==", "clasid", "230200"]
    ]
  }, {
    "type": "fill",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#abc6ef",
      "fill-outline-color": "#abc6ef"
    },
    "id": "14",
    "filter": ["any", ["!=", "clasid", "230101"],
      ["!=", "clasid", "230200"],
      ["!=", "clasid", "230102"],
      ["!=", "clasid", "240101"],
      ["!=", "clasid", "240102"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "HYDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#abc6ef"
    },
    "id": "16"
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "LRRL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(170,170,170)",
      "line-width": 3
    },
    "id": "18",
    "filter": ["any", ["!=", "CLASID", "410305"]]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "LRRL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 1.2,
      "line-dasharray": [6, 6]
    },
    "id": "19",
    "filter": ["any", ["!=", "CLASID", "410305"]]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": 0
    },
    "id": "21",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["==", "CLASID", ""],
                        ["==", "CLASID", "420101"]
                      ],
                      ["==", "CLASID", "420102"]
                    ],
                    ["==", "CLASID", "420201"]
                  ],
                  ["==", "CLASID", "420202"]
                ],
                ["==", "CLASID", "420301"]
              ],
              ["==", "CLASID", "420302"]
            ],
            ["==", "CLASID", "420400"]
          ],
          ["==", "CLASID", "420500"]
        ],
        ["==", "CLASID", "420801"],
        ["==", "CLASID", "420600"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 0
    },
    "id": "22",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["any", ["==", "CLASID", ""],
                        ["==", "CLASID", "420101"]
                      ],
                      ["==", "CLASID", "420102"]
                    ],
                    ["==", "CLASID", "420201"]
                  ],
                  ["==", "CLASID", "420202"]
                ],
                ["==", "CLASID", "420301"]
              ],
              ["==", "CLASID", "420302"]
            ],
            ["==", "CLASID", "420400"]
          ],
          ["==", "CLASID", "420500"]
        ],
        ["==", "CLASID", "420801"],
        ["==", "CLASID", "420600"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": 4.5
    },
    "id": "23",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "430503"],
        ["==", "CLASID", "430600"],
        ["==", "CLASID", "440100"],
        ["==", "CLASID", "440200"],
        ["==", "CLASID", "440400"],
        ["==", "CLASID", "440600"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 2.7
    },
    "id": "24",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "430503"],
        ["==", "CLASID", "430600"],
        ["==", "CLASID", "440100"],
        ["==", "CLASID", "440200"],
        ["==", "CLASID", "440400"],
        ["==", "CLASID", "440600"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": 3.5
    },
    "id": "25",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["==", "CLASID", "440300"]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 1.8
    },
    "id": "26",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["==", "CLASID", "440300"]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": 4
    },
    "id": "27",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["==", "CLASID", "490500"]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 2
    },
    "id": "28",
    "filter": ["all", ["!=", "CLASID", "430201"],
      ["==", "CLASID", "490500"]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "29",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "30",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(245,245,245)"
    },
    "id": "31",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["==", "FORM", "04"]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "32",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "33",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCDBCD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5]
        ],
        "type": "interval"
      }
    },
    "id": "34",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3]
        ],
        "type": "interval"
      }
    },
    "id": "35",
    "filter": ["all", ["any", ["==", "CLASID", "420500"],
        ["==", "CLASID", "420401"],
        ["==", "CLASID", "430501"],
        ["==", "CLASID", "430502"],
        ["==", "CLASID", "420400"],
        ["!has", "CLASID"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "37",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "38",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "39",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "40",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5]
        ],
        "type": "interval"
      }
    },
    "id": "41",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3]
        ],
        "type": "interval"
      }
    },
    "id": "42",
    "filter": ["all", ["all", ["==", "CLASID", "420402"],
        ["!=", "FUNCLASS", "5"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "44",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "45",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "46",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "47",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5]
        ],
        "type": "interval"
      }
    },
    "id": "48",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3]
        ],
        "type": "interval"
      }
    },
    "id": "49",
    "filter": ["all", ["all", ["==", "CLASID", "420500"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "51",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "52",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 4]
        ],
        "type": "interval"
      }
    },
    "id": "53",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 2]
        ],
        "type": "interval"
      }
    },
    "id": "54",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "04"],
        ["==", "FORM", "05"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DCD2AD",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5]
        ],
        "type": "interval"
      }
    },
    "id": "55",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,245,200)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3]
        ],
        "type": "interval"
      }
    },
    "id": "56",
    "filter": ["all", ["all", ["==", "CLASID", "420400"],
        ["!=", "FUNCLASS", "5"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "0c"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d2d2b4",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5],
          [16, 6]
        ],
        "type": "interval"
      }
    },
    "id": "58",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,240,145)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ],
        "type": "interval"
      }
    },
    "id": "59",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d2d2b4",
      "line-width": {
        "stops": [
          [10, 3],
          [14, 4],
          [16, 5]
        ],
        "type": "interval"
      }
    },
    "id": "60",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,240,145)",
      "line-width": {
        "stops": [
          [10, 1.5],
          [14, 2],
          [16, 3]
        ],
        "type": "interval"
      }
    },
    "id": "61",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d2d2b4",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5],
          [16, 6]
        ],
        "type": "interval"
      }
    },
    "id": "62",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,240,145)",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ],
        "type": "interval"
      }
    },
    "id": "63",
    "filter": ["all", ["all", ["==", "CLASID", "420301"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d6b95a",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5],
          [16, 6]
        ],
        "type": "interval"
      }
    },
    "id": "65",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#fef082",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ],
        "type": "interval"
      }
    },
    "id": "66",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DDC67A",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5],
          [16, 6]
        ]
      }
    },
    "id": "67",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9F0A3",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ]
      }
    },
    "id": "68",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DDC67A",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 6],
          [16, 6]
        ]
      }
    },
    "id": "69",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9F0A3",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ]
      }
    },
    "id": "70",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "FUNCLASS", ""]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "03"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d08f58",
      "line-width": {
        "stops": [
          [5, 1.5],
          [10, 5],
          [14, 6],
          [16, 7]
        ],
        "type": "interval"
      }
    },
    "id": "72",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#fecd78",
      "line-width": {
        "stops": [
          [5, 1],
          [10, 3],
          [14, 4],
          [16, 5]
        ],
        "type": "interval"
      }
    },
    "id": "73",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d08f58",
      "line-width": {
        "stops": [
          [10, 3],
          [14, 4],
          [16, 5]
        ],
        "type": "interval"
      }
    },
    "id": "74",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["any", ["==", "FORM", "03"],
        ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "16"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F5D7A3",
      "line-width": {
        "stops": [
          [10, 2],
          [14, 3],
          [16, 4]
        ],
        "type": "interval"
      }
    },
    "id": "75",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["any", ["==", "FORM", "03"],
        ["==", "FORM", "05"],
        ["==", "FORM", "0b"],
        ["==", "FORM", "12"],
        ["==", "FORM", "16"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#d08f58",
      "line-width": {
        "stops": [
          [10, 4],
          [14, 5],
          [16, 6]
        ],
        "type": "interval"
      }
    },
    "id": "76",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "15"],
        ["==", "FORM", "17"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F5D7A3",
      "line-width": {
        "stops": [
          [10, 3],
          [14, 4],
          [16, 5]
        ],
        "type": "interval"
      }
    },
    "id": "77",
    "filter": ["all", ["any", ["==", "CLASID", "430201"],
        ["==", "CLASID", "420101"]
      ],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "04"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "15"],
        ["==", "FORM", "17"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 0
    },
    "id": "79",
    "filter": ["all", ["==", "CLASID", "420801"]]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#f4ac58",
      "line-width": {
        "stops": [
          [5, 1],
          [10, 3],
          [11, 7]
        ],
        "type": "interval"
      }
    },
    "id": "81",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F4D9B2",
      "line-width": {
        "stops": [
          [5, 1],
          [10, 2],
          [11, 5]
        ],
        "type": "interval"
      }
    },
    "id": "82",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "FORM", ""]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#f4ac58",
      "line-width": {
        "stops": [
          [10, 5],
          [13, 6],
          [16, 7]
        ],
        "type": "interval"
      }
    },
    "id": "83",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["any", ["==", "FORM", "03"],
        ["==", "FORM", "05"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F4D9B2",
      "line-width": {
        "stops": [
          [10, 3],
          [13, 4],
          [16, 5]
        ],
        "type": "interval"
      }
    },
    "id": "84",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["any", ["==", "FORM", "03"],
        ["==", "FORM", "05"],
        ["==", "FORM", "06"],
        ["==", "FORM", "07"],
        ["==", "FORM", "0b"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#f4ac58",
      "line-width": {
        "stops": [
          [10, 5],
          [13, 6],
          [16, 7]
        ]
      }
    },
    "id": "85",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "04"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "12"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "line",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F4D9B2",
      "line-width": {
        "stops": [
          [10, 3],
          [13, 4],
          [16, 5]
        ]
      }
    },
    "id": "86",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["any", ["==", "FORM", "00"],
        ["==", "FORM", "01"],
        ["==", "FORM", "02"],
        ["==", "FORM", "04"],
        ["==", "FORM", "08"],
        ["==", "FORM", "09"],
        ["==", "FORM", "0a"],
        ["==", "FORM", "0c"],
        ["==", "FORM", "0e"],
        ["==", "FORM", "0f"],
        ["==", "FORM", "11"],
        ["==", "FORM", "12"],
        ["==", "FORM", "13"],
        ["==", "FORM", "14"],
        ["==", "FORM", "15"],
        ["==", "FORM", "16"],
        ["==", "FORM", "17"],
        ["==", "FORM", "18"],
        ["==", "FORM", "19"]
      ]
    ]
  }, {
    "type": "fill",
    "source": "other",
    "source-layer": "SUBA",
    "minzoom": 15,
    "maxzoom": 22,
    "paint": {
      "fill-color": "#D2D7D7",
      "fill-opacity": 0.66,
      "fill-outline-color": "#D2D7D7"
    },
    "id": "88"
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "90",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["any", ["any", ["any", ["==", "LINECODE", ""],
            ["==", "LINECODE", ""],
            ["==", "LINECODE", "03"],
            ["==", "LINECODE", "11"],
            ["==", "LINECODE", "12"]
          ],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"]
        ],
        ["==", "LINECODE", "97"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,0,0)",
      "line-width": 1.5
    },
    "id": "91",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["any", ["any", ["any", ["==", "LINECODE", ""],
            ["==", "LINECODE", ""],
            ["==", "LINECODE", "03"],
            ["==", "LINECODE", "11"],
            ["==", "LINECODE", "12"]
          ],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"]
        ],
        ["==", "LINECODE", "97"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "92",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,77,36)",
      "line-width": 1.5
    },
    "id": "93",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "94",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(5,137,246)",
      "line-width": 1.5
    },
    "id": "95",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "96",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(11,158,132)",
      "line-width": 1.5
    },
    "id": "97",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "98",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(197,112,206)",
      "line-width": 1.5
    },
    "id": "99",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "100",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(208,165,0)",
      "line-width": 1.5
    },
    "id": "101",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "102",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(250,192,118)",
      "line-width": 1.5
    },
    "id": "103",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "104",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(7,173,11)",
      "line-width": 1.5
    },
    "id": "105",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "106",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(128,213,60)",
      "line-width": 1.5
    },
    "id": "107",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "108",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(2,136,247)",
      "line-width": 1.5
    },
    "id": "109",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "110",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,164,5)",
      "line-width": 1.5
    },
    "id": "111",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "112",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "14"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(240,146,164)",
      "line-width": 1.5
    },
    "id": "113",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "14"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "114",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "15"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(246,91,7)",
      "line-width": 1.5
    },
    "id": "115",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "15"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "116",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(118,163,46)",
      "line-width": 1.5
    },
    "id": "117",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "118",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "89"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(214,96,95)",
      "line-width": 1.5
    },
    "id": "119",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "89"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "120",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(231,109,31)",
      "line-width": 1.5
    },
    "id": "121",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "122",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(29,234,198)",
      "line-width": 1.5
    },
    "id": "123",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "124",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "92"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(172,81,80)",
      "line-width": 1.5
    },
    "id": "125",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "92"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "126",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "93"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(214,87,114)",
      "line-width": 1.5
    },
    "id": "127",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "93"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "128",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "94"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(155,89,225)",
      "line-width": 1.5
    },
    "id": "129",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "94"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "130",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "S1"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(183,70,74)",
      "line-width": 1.5
    },
    "id": "131",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "S1"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "132",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(222,69,36)",
      "line-width": 1.5
    },
    "id": "133",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "134",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(205,60,128)",
      "line-width": 1.5
    },
    "id": "135",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "110000000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "137",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "138",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "139",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(180,166,15)",
      "line-width": 1.5
    },
    "id": "140",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "141",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(5,123,242)",
      "line-width": 1.5
    },
    "id": "142",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "143",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(247,162,17)",
      "line-width": 1.5
    },
    "id": "144",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "145",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(9,174,12)",
      "line-width": 1.5
    },
    "id": "146",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "147",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,110,109)",
      "line-width": 1.5
    },
    "id": "148",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "149",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(101,2,67)",
      "line-width": 1.5
    },
    "id": "150",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "151",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(63,163,126)",
      "line-width": 1.5
    },
    "id": "152",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "153",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(23,178,206)",
      "line-width": 1.5
    },
    "id": "154",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "155",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(112,185,137)",
      "line-width": 1.5
    },
    "id": "156",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "157",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(127,124,53)",
      "line-width": 1.5
    },
    "id": "158",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "159",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "14"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(99,41,35)",
      "line-width": 1.5
    },
    "id": "160",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "14"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "161",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "33"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(247,125,17)",
      "line-width": 1.5
    },
    "id": "162",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "33"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "163",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "80"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(11,170,209)",
      "line-width": 1.5
    },
    "id": "164",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "80"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "165",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(141,194,0)",
      "line-width": 1.5
    },
    "id": "166",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440100000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "168",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "169",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "170",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,113,111)",
      "line-width": 1.5
    },
    "id": "171",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "172",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(57,187,51)",
      "line-width": 1.5
    },
    "id": "173",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "174",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,56,213)",
      "line-width": 1.5
    },
    "id": "175",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "176",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(178,112,205)",
      "line-width": 1.5
    },
    "id": "177",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "178",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(159,93,229)",
      "line-width": 1.5
    },
    "id": "179",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "180",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(231,65,101)",
      "line-width": 1.5
    },
    "id": "181",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "182",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,163,4)",
      "line-width": 1.5
    },
    "id": "183",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "184",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(7,134,239)",
      "line-width": 1.5
    },
    "id": "185",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "186",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(2,169,205)",
      "line-width": 1.5
    },
    "id": "187",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "188",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(232,114,224)",
      "line-width": 1.5
    },
    "id": "189",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "190",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(114,26,25)",
      "line-width": 1.5
    },
    "id": "191",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "192",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(6,121,104)",
      "line-width": 1.5
    },
    "id": "193",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "194",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(227,153,190)",
      "line-width": 1.5
    },
    "id": "195",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "13"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "196",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(145,209,195)",
      "line-width": 1.5
    },
    "id": "197",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "198",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "17"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(199,123,119)",
      "line-width": 1.5
    },
    "id": "199",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "17"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "200",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(253,142,245)",
      "line-width": 1.5
    },
    "id": "201",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "202",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(161,6,4)",
      "line-width": 1.5
    },
    "id": "203",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "204",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(153,153,153)",
      "line-width": 1.5
    },
    "id": "205",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "206",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(2,149,123)",
      "line-width": 1.5
    },
    "id": "207",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "310000000"]
      ],
      ["==", "LINECODE", "99"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "209",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "210",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "211",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(222,69,36)",
      "line-width": 1.5
    },
    "id": "212",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "213",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(112,179,74)",
      "line-width": 1.5
    },
    "id": "214",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "215",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(187,187,187)",
      "line-width": 1.5
    },
    "id": "216",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "217",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(170,170,170)",
      "line-width": 1.5
    },
    "id": "218",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "219",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(200,50,120)",
      "line-width": 1.5
    },
    "id": "220",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "221",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(233,41,189)",
      "line-width": 1.5
    },
    "id": "222",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "120000000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "224",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "225",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "226",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(210,55,69)",
      "line-width": 1.5
    },
    "id": "227",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "228",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(49,193,46)",
      "line-width": 1.5
    },
    "id": "229",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "230",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(14,134,229)",
      "line-width": 1.5
    },
    "id": "231",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "232",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(84,199,239)",
      "line-width": 1.5
    },
    "id": "233",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "234",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(241,109,142)",
      "line-width": 1.5
    },
    "id": "235",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "236",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(164,88,223)",
      "line-width": 1.5
    },
    "id": "237",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "238",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(241,109,142)",
      "line-width": 1.5
    },
    "id": "239",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "500000000"]
      ],
      ["==", "LINECODE", "16"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "241",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["any", ["any", ["any", ["==", "LINECODE", ""],
            ["==", "LINECODE", ""]
          ],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"]
        ],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "242",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["any", ["any", ["any", ["==", "LINECODE", ""],
            ["==", "LINECODE", ""]
          ],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"]
        ],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "243",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(211,83,80)",
      "line-width": 1.5
    },
    "id": "244",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "245",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,161,4)",
      "line-width": 1.5
    },
    "id": "246",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "248",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "249",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "250",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(251,113,110)",
      "line-width": 1.5
    },
    "id": "251",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "252",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(250,163,8)",
      "line-width": 1.5
    },
    "id": "253",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "254",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(76,154,70)",
      "line-width": 1.5
    },
    "id": "255",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "256",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(223,155,255)",
      "line-width": 1.5
    },
    "id": "257",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "258",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(247,200,47)",
      "line-width": 1.5
    },
    "id": "259",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "260",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(214,86,111)",
      "line-width": 1.5
    },
    "id": "261",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "262",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(3,165,154)",
      "line-width": 1.5
    },
    "id": "263",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "264",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "93"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(232,190,255)",
      "line-width": 1.5
    },
    "id": "265",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "93"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "266",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "97"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,155,155)",
      "line-width": 1.5
    },
    "id": "267",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "97"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "268",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(159,101,53)",
      "line-width": 1.5
    },
    "id": "269",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320100000"]
      ],
      ["==", "LINECODE", "98"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "271",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "272",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "273",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(21,143,244)",
      "line-width": 1.5
    },
    "id": "274",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "275",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,92,255)",
      "line-width": 1.5
    },
    "id": "276",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "277",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(161,28,120)",
      "line-width": 1.5
    },
    "id": "278",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "279",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(175,235,62)",
      "line-width": 1.5
    },
    "id": "280",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "281",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(82,115,104)",
      "line-width": 1.5
    },
    "id": "282",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "283",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(220,220,220)",
      "line-width": 1.5
    },
    "id": "284",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "285",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(124,153,151)",
      "line-width": 1.5
    },
    "id": "286",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "287",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(248,195,1)",
      "line-width": 1.5
    },
    "id": "288",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "289",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "21"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(161,28,120)",
      "line-width": 1.5
    },
    "id": "290",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "420100000"]
      ],
      ["==", "LINECODE", "21"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "292",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "293",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "294",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(228,27,107)",
      "line-width": 1.5
    },
    "id": "295",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "296",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,141,4)",
      "line-width": 1.5
    },
    "id": "297",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "298",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(237,55,115)",
      "line-width": 1.5
    },
    "id": "299",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "300",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(47,204,31)",
      "line-width": 1.5
    },
    "id": "301",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "302",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(103,210,219)",
      "line-width": 1.5
    },
    "id": "303",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "304",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(92,88,234)",
      "line-width": 1.5
    },
    "id": "305",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "510100000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "307",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "308",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "309",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(2,127,255)",
      "line-width": 1.5
    },
    "id": "310",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "311",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,112,110)",
      "line-width": 1.5
    },
    "id": "312",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "313",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(250,38,230)",
      "line-width": 1.5
    },
    "id": "314",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "315",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(218,130,90)",
      "line-width": 1.5
    },
    "id": "316",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "610100000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "318",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "319",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "320",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,191,166)",
      "line-width": 1.5
    },
    "id": "321",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "322",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(76,230,0)",
      "line-width": 1.5
    },
    "id": "323",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "324",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "31"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(37,151,23)",
      "line-width": 1.5
    },
    "id": "325",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "31"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "326",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "32"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(6,69,174)",
      "line-width": 1.5
    },
    "id": "327",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "32"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "328",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "33"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,191,166)",
      "line-width": 1.5
    },
    "id": "329",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "210200000"]
      ],
      ["==", "LINECODE", "33"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "331",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "332",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "333",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,0,0)",
      "line-width": 1.5
    },
    "id": "334",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "335",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,113,193)",
      "line-width": 1.5
    },
    "id": "336",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "337",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(211,36,105)",
      "line-width": 1.5
    },
    "id": "338",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "339",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,170,22)",
      "line-width": 1.5
    },
    "id": "340",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "341",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(36,184,188)",
      "line-width": 1.5
    },
    "id": "342",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "220100000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "344",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "345",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "346",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(30,188,3)",
      "line-width": 1.5
    },
    "id": "347",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "348",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(253,0,1)",
      "line-width": 1.5
    },
    "id": "349",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "350",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,92,230)",
      "line-width": 1.5
    },
    "id": "351",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320500000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "353",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "354",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "355",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(228,66,66)",
      "line-width": 1.5
    },
    "id": "356",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "357",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,160,63)",
      "line-width": 1.5
    },
    "id": "358",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "359",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(54,175,72)",
      "line-width": 1.5
    },
    "id": "360",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "361",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,103,103)",
      "line-width": 1.5
    },
    "id": "362",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330100000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "364",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "365",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "366",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(23,161,24)",
      "line-width": 1.5
    },
    "id": "367",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "368",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(252,162,4)",
      "line-width": 1.5
    },
    "id": "369",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "370",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(3,135,243)",
      "line-width": 1.5
    },
    "id": "371",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "372",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,115,112)",
      "line-width": 1.5
    },
    "id": "373",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "374",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(198,113,207)",
      "line-width": 1.5
    },
    "id": "375",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "376",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(42,125,158)",
      "line-width": 1.5
    },
    "id": "377",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "378",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(153,108,43)",
      "line-width": 1.5
    },
    "id": "379",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "380",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(101,20,56)",
      "line-width": 1.5
    },
    "id": "381",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "440300000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "383",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "384",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "385",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(247,116,170)",
      "line-width": 1.5
    },
    "id": "386",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "387",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(77,188,234)",
      "line-width": 1.5
    },
    "id": "388",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "389",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,133,217)",
      "line-width": 1.5
    },
    "id": "390",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "391",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(42,164,43)",
      "line-width": 1.5
    },
    "id": "392",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "393",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(14,145,113)",
      "line-width": 1.5
    },
    "id": "394",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "395",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(248,120,110)",
      "line-width": 1.5
    },
    "id": "396",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "397",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(154,48,22)",
      "line-width": 1.5
    },
    "id": "398",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "399",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(198,113,207)",
      "line-width": 1.5
    },
    "id": "400",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "401",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "81"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(70,189,245)",
      "line-width": 1.5
    },
    "id": "402",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "81"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "403",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "82"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(76,190,240)",
      "line-width": 1.5
    },
    "id": "404",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "82"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "405",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(156,87,229)",
      "line-width": 1.5
    },
    "id": "406",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "91"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "407",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "92"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(156,87,230)",
      "line-width": 1.5
    },
    "id": "408",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "810000000"]
      ],
      ["==", "LINECODE", "92"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "410",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "411",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "412",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(235,31,34)",
      "line-width": 1.5
    },
    "id": "413",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "414",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(4,89,153)",
      "line-width": 1.5
    },
    "id": "415",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "416",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(146,63,145)",
      "line-width": 1.5
    },
    "id": "417",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "418",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(190,40,141)",
      "line-width": 1.5
    },
    "id": "419",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "530100000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "421",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "422",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "423",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(220,2,18)",
      "line-width": 1.5
    },
    "id": "424",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "425",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(237,89,38)",
      "line-width": 1.5
    },
    "id": "426",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "230100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "428",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "429",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "430",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(215,3,6)",
      "line-width": 1.5
    },
    "id": "431",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "432",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(225,153,44)",
      "line-width": 1.5
    },
    "id": "433",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "434",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(185,63,245)",
      "line-width": 1.5
    },
    "id": "435",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "410100000"]
      ],
      ["==", "LINECODE", "12"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "437",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "438",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "439",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,0,0)",
      "line-width": 1.5
    },
    "id": "440",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "441",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,181,239)",
      "line-width": 1.5
    },
    "id": "442",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "443",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(242,149,167)",
      "line-width": 1.5
    },
    "id": "444",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "430100000"]
      ],
      ["==", "LINECODE", "90"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "446",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "447",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "448",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(76,165,254)",
      "line-width": 1.5
    },
    "id": "449",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "450",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,0,0)",
      "line-width": 1.5
    },
    "id": "451",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "330200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "453",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "454",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "455",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(245,98,106)",
      "line-width": 1.5
    },
    "id": "456",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "457",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,204,0)",
      "line-width": 1.5
    },
    "id": "458",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "320200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "460",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "461",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "462",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(192,136,50)",
      "line-width": 1.5
    },
    "id": "463",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "464",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,112,184)",
      "line-width": 1.5
    },
    "id": "465",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "466",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(231,5,50)",
      "line-width": 1.5
    },
    "id": "467",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "468",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(249,177,33)",
      "line-width": 1.5
    },
    "id": "469",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "04"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "470",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,132,80)",
      "line-width": 1.5
    },
    "id": "471",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "05"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "472",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(99,165,15)",
      "line-width": 1.5
    },
    "id": "473",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "06"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "474",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(218,225,30)",
      "line-width": 1.5
    },
    "id": "475",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "07"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "476",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(249,177,33)",
      "line-width": 1.5
    },
    "id": "477",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "08"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "478",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(247,156,41)",
      "line-width": 1.5
    },
    "id": "479",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "09"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "480",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(229,0,88)",
      "line-width": 1.5
    },
    "id": "481",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "10"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "482",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(254,159,177)",
      "line-width": 1.5
    },
    "id": "483",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["in", "PAC", "710009000", "710001000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "485",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "486",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "487",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(225,58,58)",
      "line-width": 1.5
    },
    "id": "488",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "489",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(60,91,221)",
      "line-width": 1.5
    },
    "id": "490",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "340100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "492",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "493",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "494",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(195,42,5)",
      "line-width": 1.5
    },
    "id": "495",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "496",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,108,189)",
      "line-width": 1.5
    },
    "id": "497",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "498",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(48,66,153)",
      "line-width": 1.5
    },
    "id": "499",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "370200000"]
      ],
      ["==", "LINECODE", "11"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "501",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "502",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "503",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(61,146,102)",
      "line-width": 1.5
    },
    "id": "504",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "505",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(226,35,26)",
      "line-width": 1.5
    },
    "id": "506",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "450100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "508",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "509",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["any", ["==", "LINECODE", ""],
        ["==", "LINECODE", ""]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "510",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(239,14,65)",
      "line-width": 1.5
    },
    "id": "511",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "512",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,181,51)",
      "line-width": 1.5
    },
    "id": "513",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "360100000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "515",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "516",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "517",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(220,62,60)",
      "line-width": 1.5
    },
    "id": "518",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "520",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350200000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "521",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350200000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "522",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(237,121,36)",
      "line-width": 1.5
    },
    "id": "523",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "350200000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "525",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "526",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "527",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(242,64,64)",
      "line-width": 1.5
    },
    "id": "528",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "529",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(96,184,203)",
      "line-width": 1.5
    },
    "id": "530",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "130100000"]
      ],
      ["==", "LINECODE", "03"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "532",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "441900000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["==", "LINECODE", "01"],
        ["==", "LINECODE", "03"],
        ["==", "LINECODE", "04"],
        ["==", "LINECODE", "05"],
        ["==", "LINECODE", "06"],
        ["==", "LINECODE", "07"],
        ["==", "LINECODE", "08"],
        ["==", "LINECODE", "09"],
        ["==", "LINECODE", "10"],
        ["==", "LINECODE", "11"],
        ["==", "LINECODE", "12"],
        ["==", "LINECODE", "13"],
        ["==", "LINECODE", "14"],
        ["==", "LINECODE", "15"],
        ["==", "LINECODE", "16"],
        ["==", "LINECODE", "17"],
        ["==", "LINECODE", "21"],
        ["==", "LINECODE", "31"],
        ["==", "LINECODE", "32"],
        ["==", "LINECODE", "33"],
        ["==", "LINECODE", "80"],
        ["==", "LINECODE", "81"],
        ["==", "LINECODE", "82"],
        ["==", "LINECODE", "89"],
        ["==", "LINECODE", "90"],
        ["==", "LINECODE", "91"],
        ["==", "LINECODE", "92"],
        ["==", "LINECODE", "93"],
        ["==", "LINECODE", "94"],
        ["==", "LINECODE", "97"],
        ["==", "LINECODE", "S1"],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "533",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "441900000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["==", "LINECODE", "01"],
        ["==", "LINECODE", "03"],
        ["==", "LINECODE", "04"],
        ["==", "LINECODE", "05"],
        ["==", "LINECODE", "06"],
        ["==", "LINECODE", "07"],
        ["==", "LINECODE", "08"],
        ["==", "LINECODE", "09"],
        ["==", "LINECODE", "10"],
        ["==", "LINECODE", "11"],
        ["==", "LINECODE", "12"],
        ["==", "LINECODE", "13"],
        ["==", "LINECODE", "14"],
        ["==", "LINECODE", "15"],
        ["==", "LINECODE", "16"],
        ["==", "LINECODE", "17"],
        ["==", "LINECODE", "21"],
        ["==", "LINECODE", "31"],
        ["==", "LINECODE", "32"],
        ["==", "LINECODE", "33"],
        ["==", "LINECODE", "80"],
        ["==", "LINECODE", "81"],
        ["==", "LINECODE", "82"],
        ["==", "LINECODE", "89"],
        ["==", "LINECODE", "90"],
        ["==", "LINECODE", "91"],
        ["==", "LINECODE", "92"],
        ["==", "LINECODE", "93"],
        ["==", "LINECODE", "94"],
        ["==", "LINECODE", "97"],
        ["==", "LINECODE", "S1"],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "534",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "441900000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,0,0)",
      "line-width": 1.5
    },
    "id": "535",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "441900000"]
      ],
      ["==", "LINECODE", "02"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "537",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "520100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "538",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "520100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["any", ["==", "LINECODE", "02"],
          ["==", "LINECODE", "03"],
          ["==", "LINECODE", "04"],
          ["==", "LINECODE", "05"],
          ["==", "LINECODE", "06"],
          ["==", "LINECODE", "07"],
          ["==", "LINECODE", "08"],
          ["==", "LINECODE", "09"],
          ["==", "LINECODE", "10"],
          ["==", "LINECODE", "11"],
          ["==", "LINECODE", "12"],
          ["==", "LINECODE", "13"],
          ["==", "LINECODE", "14"],
          ["==", "LINECODE", "15"],
          ["==", "LINECODE", "16"],
          ["==", "LINECODE", "17"],
          ["==", "LINECODE", "21"],
          ["==", "LINECODE", "31"],
          ["==", "LINECODE", "32"],
          ["==", "LINECODE", "33"],
          ["==", "LINECODE", "80"],
          ["==", "LINECODE", "81"],
          ["==", "LINECODE", "82"],
          ["==", "LINECODE", "89"],
          ["==", "LINECODE", "90"],
          ["==", "LINECODE", "91"],
          ["==", "LINECODE", "92"],
          ["==", "LINECODE", "93"],
          ["==", "LINECODE", "94"],
          ["==", "LINECODE", "97"],
          ["==", "LINECODE", "S1"],
          ["==", "LINECODE", "98"],
          ["==", "LINECODE", "99"]
        ]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "539",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "520100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,255,0)",
      "line-width": 1.5
    },
    "id": "540",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "520100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "542",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "650100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["==", "LINECODE", "02"],
        ["==", "LINECODE", "03"],
        ["==", "LINECODE", "04"],
        ["==", "LINECODE", "05"],
        ["==", "LINECODE", "06"],
        ["==", "LINECODE", "07"],
        ["==", "LINECODE", "08"],
        ["==", "LINECODE", "09"],
        ["==", "LINECODE", "10"],
        ["==", "LINECODE", "11"],
        ["==", "LINECODE", "12"],
        ["==", "LINECODE", "13"],
        ["==", "LINECODE", "14"],
        ["==", "LINECODE", "15"],
        ["==", "LINECODE", "16"],
        ["==", "LINECODE", "17"],
        ["==", "LINECODE", "21"],
        ["==", "LINECODE", "31"],
        ["==", "LINECODE", "32"],
        ["==", "LINECODE", "33"],
        ["==", "LINECODE", "80"],
        ["==", "LINECODE", "81"],
        ["==", "LINECODE", "82"],
        ["==", "LINECODE", "89"],
        ["==", "LINECODE", "90"],
        ["==", "LINECODE", "91"],
        ["==", "LINECODE", "92"],
        ["==", "LINECODE", "93"],
        ["==", "LINECODE", "94"],
        ["==", "LINECODE", "97"],
        ["==", "LINECODE", "S1"],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(0,0,0)",
      "line-width": 1.5
    },
    "id": "543",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "650100000"]
      ],
      ["any", ["any", ["==", "LINECODE", ""],
          ["==", "LINECODE", ""]
        ],
        ["==", "LINECODE", "02"],
        ["==", "LINECODE", "03"],
        ["==", "LINECODE", "04"],
        ["==", "LINECODE", "05"],
        ["==", "LINECODE", "06"],
        ["==", "LINECODE", "07"],
        ["==", "LINECODE", "08"],
        ["==", "LINECODE", "09"],
        ["==", "LINECODE", "10"],
        ["==", "LINECODE", "11"],
        ["==", "LINECODE", "12"],
        ["==", "LINECODE", "13"],
        ["==", "LINECODE", "14"],
        ["==", "LINECODE", "15"],
        ["==", "LINECODE", "16"],
        ["==", "LINECODE", "17"],
        ["==", "LINECODE", "21"],
        ["==", "LINECODE", "31"],
        ["==", "LINECODE", "32"],
        ["==", "LINECODE", "33"],
        ["==", "LINECODE", "80"],
        ["==", "LINECODE", "81"],
        ["==", "LINECODE", "82"],
        ["==", "LINECODE", "89"],
        ["==", "LINECODE", "90"],
        ["==", "LINECODE", "91"],
        ["==", "LINECODE", "92"],
        ["==", "LINECODE", "93"],
        ["==", "LINECODE", "94"],
        ["==", "LINECODE", "97"],
        ["==", "LINECODE", "S1"],
        ["==", "LINECODE", "98"],
        ["==", "LINECODE", "99"]
      ]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,255,255)",
      "line-width": 3.4
    },
    "id": "544",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "650100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "line",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(44,80,142)",
      "line-width": 1.5
    },
    "id": "545",
    "filter": ["all", ["all", ["==", "OPEN", "1"],
        ["==", "PAC", "650100000"]
      ],
      ["==", "LINECODE", "01"]
    ]
  }, {
    "type": "symbol",
    "source": "lfcp",
    "source-layer": "LFCP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honglvdeng",
      "icon-size": 0.9,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "547"
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "HCTL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.4
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#0E7AAD",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "548"
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "maidanglao3",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "550",
    "filter": ["all", ["==", "TYPE2018", 110200],
      ["==", "BRAND", "010003"]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "kfc3",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "551",
    "filter": ["all", ["==", "TYPE2018", 110200],
      ["==", "BRAND", "010007"]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "552",
    "filter": ["all", ["all", [">=", "TYPE2018", 110101],
        ["<", "TYPE2018", 110200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "zhongcan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "553",
    "filter": ["all", ["all", [">=", "TYPE2018", 110101],
        ["<", "TYPE2018", 110200]
      ],
      ["==", "TYPE2018", 110101]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xican1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "554",
    "filter": ["all", ["all", [">=", "TYPE2018", 110101],
        ["<", "TYPE2018", 110200]
      ],
      ["==", "TYPE2018", 110102]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#7F7F7F",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "555",
    "filter": ["all", ["all", [">=", "TYPE2018", 110101],
        ["<", "TYPE2018", 110200]
      ],
      ["==", "TYPE2018", 110103]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "556",
    "filter": ["any", ["==", "TYPE2018", 250100],
      ["==", "TYPE2018", 250200]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "557",
    "filter": ["any", ["==", "TYPE2018", 220400]]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "558",
    "filter": ["==", "TYPE2018", 220300]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "559",
    "filter": ["==", "TYPE2018", 220200]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "560",
    "filter": ["==", "TYPE2018", 220100]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "561",
    "filter": ["all", ["all", [">=", "TYPE2018", 140101],
        ["<", "TYPE2018", 140500]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "qicheweixiu1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "562",
    "filter": ["all", ["all", [">=", "TYPE2018", 140101],
        ["<", "TYPE2018", 140500]
      ],
      ["any", ["==", "TYPE2018", 140101],
        ["==", "TYPE2018", 140201],
        ["==", "TYPE2018", 140301],
        ["==", "TYPE2018", 140302]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "563",
    "filter": ["all", ["all", [">=", "TYPE2018", 210102],
        ["<", "TYPE2018", 210304]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "youju1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "564",
    "filter": ["all", ["all", [">=", "TYPE2018", 210102],
        ["<", "TYPE2018", 210304]
      ],
      ["==", "TYPE2018", 210210]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "gongmu1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "565",
    "filter": ["all", ["all", [">=", "TYPE2018", 210102],
        ["<", "TYPE2018", 210304]
      ],
      ["any", ["==", "TYPE2018", 210208],
        ["==", "TYPE2018", 210209]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "566",
    "filter": ["all", ["all", [">=", "TYPE2018", 210102],
        ["<", "TYPE2018", 210304]
      ],
      ["any", ["==", "TYPE2018", 210102],
        ["==", "TYPE2018", 210103],
        ["==", "TYPE2018", 210104],
        ["==", "TYPE2018", 210105],
        ["==", "TYPE2018", 210201],
        ["==", "TYPE2018", 210202],
        ["==", "TYPE2018", 210214],
        ["==", "TYPE2018", 210215],
        ["==", "TYPE2018", 210216],
        ["==", "TYPE2018", 210301],
        ["==", "TYPE2018", 210303]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "567",
    "filter": ["all", ["all", [">=", "TYPE2018", 150101],
        ["<", "TYPE2018", 150200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "568",
    "filter": ["all", ["all", [">=", "TYPE2018", 150101],
        ["<", "TYPE2018", 150200]
      ],
      ["==", "TYPE2018", 150101]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "atm1",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "569",
    "filter": ["all", ["all", [">=", "TYPE2018", 150101],
        ["<", "TYPE2018", 150200]
      ],
      ["==", "TYPE2018", 150102]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "570",
    "filter": ["all", ["all", [">=", "TYPE2018", 150101],
        ["<", "TYPE2018", 150200]
      ],
      ["any", ["==", "TYPE2018", 150103],
        ["==", "TYPE2018", 150104]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "571",
    "filter": ["all", ["all", [">=", "TYPE2018", 130103],
        ["<", "TYPE2018", 130500]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 15,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "572",
    "filter": ["all", ["all", [">=", "TYPE2018", 130103],
        ["<", "TYPE2018", 130500]
      ],
      ["any", ["==", "TYPE2018", 130103],
        ["==", "TYPE2018", 130201],
        ["==", "TYPE2018", 130203],
        ["==", "TYPE2018", 130302],
        ["==", "TYPE2018", 130303],
        ["==", "TYPE2018", 130304],
        ["==", "TYPE2018", 130401],
        ["==", "TYPE2018", 130402],
        ["==", "TYPE2018", 130404],
        ["==", "TYPE2018", 130405],
        ["==", "TYPE2018", 130406],
        ["==", "TYPE2018", 130407],
        ["==", "TYPE2018", 130408],
        ["==", "TYPE2018", 130409],
        ["==", "TYPE2018", 130410],
        ["==", "TYPE2018", 130411]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "573",
    "filter": ["all", [">=", "TYPE2018", 130701],
      ["<", "TYPE2018", 130800]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shangchang1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "574",
    "filter": ["all", [">=", "TYPE2018", 130601],
      ["<", "TYPE2018", 130700]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "575",
    "filter": ["==", "TYPE2018", 130202]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chaoshi1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "576",
    "filter": ["all", [">=", "TYPE2018", 130104],
      ["<", "TYPE2018", 130200]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shangchang1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "577",
    "filter": ["all", [">=", "TYPE2018", 130101],
      ["<", "TYPE2018", 130103]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "578",
    "filter": ["all", ["all", [">=", "TYPE2018", 130501],
        ["<", "TYPE2018", 130600]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yaodian1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "579",
    "filter": ["all", ["all", [">=", "TYPE2018", 130501],
        ["<", "TYPE2018", 130600]
      ],
      ["==", "TYPE2018", 130501]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "580",
    "filter": ["all", ["all", [">=", "TYPE2018", 130501],
        ["<", "TYPE2018", 130600]
      ],
      ["==", "TYPE2018", 130502]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "581",
    "filter": ["all", [">=", "TYPE2018", 180400],
      ["<", "TYPE2018", 190000]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "582",
    "filter": ["all", ["all", [">=", "TYPE2018", 180301],
        ["<", "TYPE2018", 180308]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "youlechang1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "583",
    "filter": ["all", ["all", [">=", "TYPE2018", 180301],
        ["<", "TYPE2018", 180308]
      ],
      ["==", "TYPE2018", 180307]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "584",
    "filter": ["all", ["all", [">=", "TYPE2018", 180301],
        ["<", "TYPE2018", 180308]
      ],
      ["any", ["==", "TYPE2018", 180301],
        ["==", "TYPE2018", 180302],
        ["==", "TYPE2018", 180303]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "585",
    "filter": ["all", ["all", [">=", "TYPE2018", 180209],
        ["<", "TYPE2018", 180211]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dianyingyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "586",
    "filter": ["all", ["all", [">=", "TYPE2018", 180209],
        ["<", "TYPE2018", 180211]
      ],
      ["==", "TYPE2018", 180209]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yinyueting1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "587",
    "filter": ["all", ["all", [">=", "TYPE2018", 180209],
        ["<", "TYPE2018", 180211]
      ],
      ["==", "TYPE2018", 180210]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "588",
    "filter": ["all", ["all", [">=", "TYPE2018", 180101],
        ["<", "TYPE2018", 180200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "gaoerfu1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "589",
    "filter": ["all", ["all", [">=", "TYPE2018", 180101],
        ["<", "TYPE2018", 180200]
      ],
      ["any", ["==", "TYPE2018", 180105],
        ["==", "TYPE2018", 180106]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "590",
    "filter": ["all", ["all", [">=", "TYPE2018", 180101],
        ["<", "TYPE2018", 180200]
      ],
      ["any", ["==", "TYPE2018", 180101],
        ["==", "TYPE2018", 180102],
        ["==", "TYPE2018", 180103],
        ["==", "TYPE2018", 180104],
        ["==", "TYPE2018", 180107],
        ["==", "TYPE2018", 180109],
        ["==", "TYPE2018", 180110],
        ["==", "TYPE2018", 180111]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "zhuzhai1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "591",
    "filter": ["all", [">=", "TYPE2018", 120103],
      ["<", "TYPE2018", 130100],
      ["!=", "TYPE2018", 120200]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lvguan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "592",
    "filter": ["==", "TYPE2018", 120102]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "jiudian1",
      "icon-size": 1.1,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "593",
    "filter": ["==", "TYPE2018", 120101]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "594",
    "filter": ["all", ["all", [">=", "TYPE2018", 200101],
        ["<", "TYPE2018", 200200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shangchang1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "595",
    "filter": ["all", ["all", [">=", "TYPE2018", 200101],
        ["<", "TYPE2018", 200200]
      ],
      ["==", "TYPE2018", 200105]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "596",
    "filter": ["all", ["all", [">=", "TYPE2018", 200101],
        ["<", "TYPE2018", 200200]
      ],
      ["any", ["==", "TYPE2018", 200101],
        ["==", "TYPE2018", 200102]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "597",
    "filter": ["any", ["==", "TYPE2018", 200301],
      ["==", "TYPE2018", 200302]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dasha1",
      "icon-size": 1.1,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "598",
    "filter": ["==", "TYPE2018", 200103]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "599",
    "filter": ["all", ["all", [">=", "TYPE2018", 230100],
        ["<", "TYPE2018", 240100]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "600",
    "filter": ["all", ["all", [">=", "TYPE2018", 230100],
        ["<", "TYPE2018", 240100]
      ],
      ["any", ["==", "TYPE2018", 230100],
        ["==", "TYPE2018", 230102],
        ["==", "TYPE2018", 230107],
        ["==", "TYPE2018", 230110],
        ["==", "TYPE2018", 230206],
        ["==", "TYPE2018", 230224],
        ["==", "TYPE2018", 230226],
        ["==", "TYPE2018", 230227],
        ["==", "TYPE2018", 230228],
        ["==", "TYPE2018", 230229]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "601",
    "filter": ["any", ["==", "TYPE2018", 230205],
      ["==", "TYPE2018", 230225]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "tingchechang1",
      "icon-size": 1.1,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "602",
    "filter": ["all", [">=", "TYPE2018", 230208],
      ["<", "TYPE2018", 230212]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "jiayouzhan1",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "603",
    "filter": ["all", [">=", "TYPE2018", 230212],
      ["<", "TYPE2018", 230216]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "604",
    "filter": ["==", "TYPE2018", 230207]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "605",
    "filter": ["==", "TYPE2018", 230111]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "606",
    "filter": ["any", ["==", "TYPE2018", 230201],
      ["==", "TYPE2018", 230202]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "607",
    "filter": ["==", "TYPE2018", 230108]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "changtuchezhan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "608",
    "filter": ["==", "TYPE2018", 230104]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "huochezhan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#37408A",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "609",
    "filter": ["any", ["==", "TYPE2018", 230101],
      ["==", "TYPE2018", 230103]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "610",
    "filter": ["all", ["all", [">=", "TYPE2018", 170103],
        ["<", "TYPE2018", 180100]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yiyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "611",
    "filter": ["all", ["all", [">=", "TYPE2018", 170103],
        ["<", "TYPE2018", 180100]
      ],
      ["any", ["==", "TYPE2018", 170103],
        ["==", "TYPE2018", 170106],
        ["==", "TYPE2018", 170107]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "612",
    "filter": ["all", ["all", [">=", "TYPE2018", 170103],
        ["<", "TYPE2018", 180100]
      ],
      ["any", ["==", "TYPE2018", 170104],
        ["==", "TYPE2018", 170109],
        ["==", "TYPE2018", 170201]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "613",
    "filter": ["==", "TYPE2018", 170110]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "614",
    "filter": ["==", "TYPE2018", 170108]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yiyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "615",
    "filter": ["==", "TYPE2018", 170105]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yiyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "616",
    "filter": ["==", "TYPE2018", 170102]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "yiyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "617",
    "filter": ["==", "TYPE2018", 170101]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-max-width": 8,
      "text-offset": [1, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#BE6464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "618",
    "filter": ["any", ["==", "CLASID", "990163"]]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 12,
    "maxzoom": 14,
    "layout": {
      "icon-image": "yiyuan1",
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "619",
    "filter": ["any", ["==", "CLASID", "990163"]]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "620",
    "filter": ["==", "TYPE2018", 240100]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "621",
    "filter": ["all", ["all", [">=", "TYPE2018", 160106],
        ["<", "TYPE2018", 170000]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "622",
    "filter": ["all", ["all", [">=", "TYPE2018", 160106],
        ["<", "TYPE2018", 170000]
      ],
      ["any", ["==", "TYPE2018", 160106],
        ["==", "TYPE2018", 160107],
        ["==", "TYPE2018", 160108],
        ["==", "TYPE2018", 160109],
        ["==", "TYPE2018", 160110],
        ["==", "TYPE2018", 160111],
        ["==", "TYPE2018", 160112],
        ["==", "TYPE2018", 160209]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "623",
    "filter": ["all", ["all", [">=", "TYPE2018", 160201],
        ["<", "TYPE2018", 160203]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "624",
    "filter": ["all", ["all", [">=", "TYPE2018", 160201],
        ["<", "TYPE2018", 160203]
      ],
      ["any", ["==", "TYPE2018", 160201],
        ["==", "TYPE2018", 160202]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "625",
    "filter": ["all", ["all", [">=", "TYPE2018", 160203],
        ["<", "TYPE2018", 160209]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "bowuguan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "626",
    "filter": ["all", ["all", [">=", "TYPE2018", 160203],
        ["<", "TYPE2018", 160209]
      ],
      ["any", ["==", "TYPE2018", 160203],
        ["==", "TYPE2018", 160204],
        ["==", "TYPE2018", 160205],
        ["==", "TYPE2018", 160206],
        ["==", "TYPE2018", 160207],
        ["==", "TYPE2018", 160208]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "627",
    "filter": ["all", ["all", [">=", "TYPE2018", 160101],
        ["<", "TYPE2018", 160106]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xuexiao1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#33476B",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "628",
    "filter": ["all", ["all", [">=", "TYPE2018", 160101],
        ["<", "TYPE2018", 160106]
      ],
      ["any", ["==", "TYPE2018", 160101],
        ["==", "TYPE2018", 160102],
        ["==", "TYPE2018", 160103],
        ["==", "TYPE2018", 160104],
        ["==", "TYPE2018", 160105]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-max-width": 8,
      "text-offset": [1, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#826423",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "629",
    "filter": ["any", ["==", "CLASID", "990175"]]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 12,
    "maxzoom": 14,
    "layout": {
      "icon-image": "bowuguan1",
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "630",
    "filter": ["any", ["==", "CLASID", "990175"]]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-max-width": 8,
      "text-offset": [1, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#475D6B",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "631",
    "filter": ["==", "CLASID", "990161"]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "BLOA_P",
    "minzoom": 12,
    "maxzoom": 14,
    "layout": {
      "icon-image": "xuexiao1",
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#33476B",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "632",
    "filter": ["any", ["==", "CLASID", "990161"]]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "633",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shan1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "634",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["==", "TYPE2018", 260203]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "635",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["==", "TYPE2018", 260400]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "636",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["any", ["==", "TYPE2018", 260100],
        ["==", "TYPE2018", 260101],
        ["==", "TYPE2018", 260102],
        ["==", "TYPE2018", 260103],
        ["==", "TYPE2018", 260104],
        ["==", "TYPE2018", 260105],
        ["==", "TYPE2018", 260106],
        ["==", "TYPE2018", 260107],
        ["==", "TYPE2018", 260108],
        ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110],
        ["==", "TYPE2018", 260111],
        ["==", "TYPE2018", 260112],
        ["==", "TYPE2018", 260113],
        ["==", "TYPE2018", 260114],
        ["==", "TYPE2018", 260115],
        ["==", "TYPE2018", 260116],
        ["==", "TYPE2018", 260117]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "637",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["any", ["==", "TYPE2018", 260200],
        ["==", "TYPE2018", 260204],
        ["==", "TYPE2018", 260205],
        ["==", "TYPE2018", 260300],
        ["==", "TYPE2018", 260301],
        ["==", "TYPE2018", 260302],
        ["==", "TYPE2018", 260303],
        ["==", "TYPE2018", 260304],
        ["==", "TYPE2018", 260500]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "638",
    "filter": ["all", ["all", [">", "TYPE2018", 260110],
        ["<", "TYPE2018", 260200]
      ],
      ["any", ["==", "TYPE2018", 260201],
        ["==", "TYPE2018", 260202],
        ["==", "TYPE2018", 260206],
        ["==", "TYPE2018", 260207],
        ["==", "TYPE2018", 260208],
        ["==", "TYPE2018", 260209],
        ["==", "TYPE2018", 260210],
        ["==", "TYPE2018", 260211],
        ["==", "TYPE2018", 260501],
        ["==", "TYPE2018", 260502],
        ["==", "TYPE2018", 260503]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "639",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shan1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "640",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["==", "TYPE2018", 260203]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "641",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["==", "TYPE2018", 260400]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "642",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["any", ["==", "TYPE2018", 260100],
        ["==", "TYPE2018", 260101],
        ["==", "TYPE2018", 260102],
        ["==", "TYPE2018", 260103],
        ["==", "TYPE2018", 260104],
        ["==", "TYPE2018", 260105],
        ["==", "TYPE2018", 260106],
        ["==", "TYPE2018", 260107],
        ["==", "TYPE2018", 260108],
        ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110],
        ["==", "TYPE2018", 260111],
        ["==", "TYPE2018", 260112],
        ["==", "TYPE2018", 260113],
        ["==", "TYPE2018", 260114],
        ["==", "TYPE2018", 260115],
        ["==", "TYPE2018", 260116],
        ["==", "TYPE2018", 260117]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "643",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["any", ["==", "TYPE2018", 260200],
        ["==", "TYPE2018", 260204],
        ["==", "TYPE2018", 260205],
        ["==", "TYPE2018", 260300],
        ["==", "TYPE2018", 260301],
        ["==", "TYPE2018", 260302],
        ["==", "TYPE2018", 260303],
        ["==", "TYPE2018", 260304],
        ["==", "TYPE2018", 260500]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "644",
    "filter": ["all", ["any", ["==", "TYPE2018", 260109],
        ["==", "TYPE2018", 260110]
      ],
      ["any", ["==", "TYPE2018", 260201],
        ["==", "TYPE2018", 260202],
        ["==", "TYPE2018", 260206],
        ["==", "TYPE2018", 260207],
        ["==", "TYPE2018", 260208],
        ["==", "TYPE2018", 260209],
        ["==", "TYPE2018", 260210],
        ["==", "TYPE2018", 260211],
        ["==", "TYPE2018", 260501],
        ["==", "TYPE2018", 260502],
        ["==", "TYPE2018", 260503]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "645",
    "filter": ["all", ["all", [">=", "TYPE2018", 260200],
        ["<", "TYPE2018", 270100]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shan1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "646",
    "filter": ["all", ["all", [">=", "TYPE2018", 260200],
        ["<", "TYPE2018", 270100]
      ],
      ["==", "TYPE2018", 260203]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "647",
    "filter": ["all", ["all", [">=", "TYPE2018", 260200],
        ["<", "TYPE2018", 270100]
      ],
      ["==", "TYPE2018", 260400]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "648",
    "filter": ["all", ["all", [">=", "TYPE2018", 260200],
        ["<", "TYPE2018", 270100]
      ],
      ["any", ["==", "TYPE2018", 260201],
        ["==", "TYPE2018", 260202],
        ["==", "TYPE2018", 260206],
        ["==", "TYPE2018", 260207],
        ["==", "TYPE2018", 260208],
        ["==", "TYPE2018", 260209],
        ["==", "TYPE2018", 260210],
        ["==", "TYPE2018", 260211],
        ["==", "TYPE2018", 260501],
        ["==", "TYPE2018", 260502],
        ["==", "TYPE2018", 260503]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "649",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "440100000", "440600000", "310000000", "120000000", "210100000", "320100000", "610100000", "220100000", "320500000", "330100000", "810000000"]
      ],
      ["any", ["any", ["any", ["any", ["==", "CODENUM", ""],
              ["==", "CODENUM", "?"]
            ],
            ["==", "CODENUM", "0"]
          ],
          ["==", "CODENUM", ""]
        ],
        ["==", "CODENUM", "4"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hongb1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-letter-spacing": -0.3,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "650",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "440100000", "440600000", "310000000", "120000000", "210100000", "320100000", "610100000", "220100000", "320500000", "330100000", "810000000"]
      ],
      ["==", "CODENUM", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hongc1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "651",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "440100000", "440600000", "310000000", "120000000", "210100000", "320100000", "610100000", "220100000", "320500000", "330100000", "810000000"]
      ],
      ["==", "CODENUM", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chua1",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "652",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "440100000", "440600000", "310000000", "120000000", "210100000", "320100000", "610100000", "220100000", "320500000", "330100000", "810000000"]
      ],
      ["==", "CODENUM", "0"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "653",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "500000000", "440300000", "530100000", "230100000", "410100000", "430100000", "330200000", "320200000"]
      ],
      ["any", ["any", ["any", ["any", ["==", "CODENUM", ""],
              ["==", "CODENUM", "?"]
            ],
            ["==", "CODENUM", "0"]
          ],
          ["==", "CODENUM", ""]
        ],
        ["==", "CODENUM", "4"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lvb1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-letter-spacing": -0.3,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "654",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "500000000", "440300000", "530100000", "230100000", "410100000", "430100000", "330200000", "320200000"]
      ],
      ["==", "CODENUM", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lvc1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "655",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "500000000", "440300000", "530100000", "230100000", "410100000", "430100000", "330200000", "320200000"]
      ],
      ["==", "CODENUM", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chue1",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "656",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "500000000", "440300000", "530100000", "230100000", "410100000", "430100000", "330200000", "320200000"]
      ],
      ["==", "CODENUM", "0"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "657",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "110000000", "130100000", "210200000", "340100000", "350100000", "350200000", "360100000", "370200000", "420100000", "450100000", "510100000", "710001000", "710009000"]
      ],
      ["any", ["any", ["any", ["any", ["==", "CODENUM", ""],
              ["==", "CODENUM", "?"]
            ],
            ["==", "CODENUM", "0"]
          ],
          ["==", "CODENUM", ""]
        ],
        ["==", "CODENUM", "4"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lanb1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-letter-spacing": -0.3,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "658",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "110000000", "130100000", "210200000", "340100000", "350100000", "350200000", "360100000", "370200000", "420100000", "450100000", "510100000", "710001000", "710009000"]
      ],
      ["==", "CODENUM", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lanc1",
      "icon-size": 1.1,
      "text-field": "{EXITCODE}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "659",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "110000000", "130100000", "210200000", "340100000", "350100000", "350200000", "360100000", "370200000", "420100000", "450100000", "510100000", "710001000", "710009000"]
      ],
      ["==", "CODENUM", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 16,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chuf1",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0, 0.2]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "660",
    "filter": ["all", ["all", ["==", "CLASID", "450190"],
        ["==", "OPEN", "1"],
        ["in", "PAC", "110000000", "130100000", "210200000", "340100000", "350100000", "350200000", "360100000", "370200000", "420100000", "450100000", "510100000", "710001000", "710009000"]
      ],
      ["==", "CODENUM", "0"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "661",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", ""]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "beijing1",
      "icon-size": {
        "stops": [
          [12, 0],
          [13, 1],
          [17, 1.2]
        ],
        "type": "interval"
      },
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "662",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "110000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "tianjin1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "663",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "120000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shijiazhuang1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "664",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "130100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shenyang1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "665",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "210100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dalian1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "666",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "210200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "changchun1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "667",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "220100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "haerbin1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "668",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "230100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shanghai1",
      "icon-size": {
        "stops": [
          [12, 0],
          [13, 1]
        ],
        "type": "interval"
      },
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "669",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "310000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "nanjing1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "670",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "320100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "wuxi1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "671",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "320200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "suzhou1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "672",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "320500000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hangzhou1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "673",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "330100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "ningbo1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "674",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "330200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hefei1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "675",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "340100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "fuzhou1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "676",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "350100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xiamen1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "677",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "350200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "nanchang1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "678",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "360100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "679",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "370100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "qingdao1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "680",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "370200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "zhengzhou1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "681",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "410100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "wuhan1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "682",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "420100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "changsha1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "683",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "430100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "guangzhou1",
      "icon-size": {
        "stops": [
          [12, 0],
          [13, 1]
        ],
        "type": "interval"
      },
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "684",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "440100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shenzhen1",
      "icon-size": {
        "stops": [
          [12, 0],
          [13, 1]
        ],
        "type": "interval"
      },
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "685",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "440300000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dongguan1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "686",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "441900000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "nanning1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "687",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "450100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chongqing1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "688",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "500000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "chengdu1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "689",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "510100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "guiyang1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "690",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "520100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "kunming1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "691",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "530100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xian1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "692",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "610100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "wulumuqi1",
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "693",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "650100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "gaoxiong1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "694",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "710001000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "taibei1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "695",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "710009000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xianggang1",
      "icon-size": {
        "stops": [
          [12, 0],
          [13, 1]
        ],
        "type": "interval"
      },
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "696",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "0"]
      ],
      ["==", "PAC", "810000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "698",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", ""]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "beijinga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "699",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "110000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "700",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "120000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "shijiazhuanga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "701",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "130100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "702",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "210100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lana1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "703",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "210200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "704",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "220100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "705",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "230100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "706",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "310000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "707",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "320100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "708",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "320200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "709",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "320500000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "710",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "330100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "711",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "330200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hefeia1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "712",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "340100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "fuzhoua1",
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "713",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "350100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "xiamena1",
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "714",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "350200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "nanchanga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "715",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "360100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "716",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "370100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "qingdaoa1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "717",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "370200000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "718",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "410100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "719",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "420100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "720",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "430100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "721",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "440100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "722",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "440300000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "723",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "441900000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "nanninga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "724",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "450100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "725",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "500000000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lana1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "726",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "510100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "727",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "520100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "728",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "530100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "729",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "610100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "hefeia1",
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "730",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "650100000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "731",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "710001000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "lva1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "732",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "710009000"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "honga1",
      "icon-allow-overlap": true,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "733",
    "filter": ["all", ["all", ["==", "CLASID", "450101"],
        ["==", "OPEN", "1"],
        ["==", "TRAIN", "1"]
      ],
      ["==", "PAC", "810000000"]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "735",
    "filter": ["all", ["all", [">=", "TYPE2018", 190110],
        ["<", "TYPE2018", 190200]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "736",
    "filter": ["all", ["all", [">=", "TYPE2018", 190110],
        ["<", "TYPE2018", 190200]
      ],
      ["any", ["==", "TYPE2018", 190110],
        ["==", "TYPE2018", 190111],
        ["==", "TYPE2018", 190112],
        ["==", "TYPE2018", 190113],
        ["==", "TYPE2018", 190114]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "737",
    "filter": ["all", ["all", [">=", "TYPE2018", 190501],
        ["<", "TYPE2018", 200100]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "738",
    "filter": ["all", ["all", [">=", "TYPE2018", 190501],
        ["<", "TYPE2018", 200100]
      ],
      ["any", ["==", "TYPE2018", 190501],
        ["==", "TYPE2018", 190502]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "739",
    "filter": ["all", ["all", [">=", "TYPE2018", 190401],
        ["<", "TYPE2018", 190500]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "simiao1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "740",
    "filter": ["all", ["all", [">=", "TYPE2018", 190401],
        ["<", "TYPE2018", 190500]
      ],
      ["==", "TYPE2018", 190401]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "741",
    "filter": ["all", ["all", [">=", "TYPE2018", 190401],
        ["<", "TYPE2018", 190500]
      ],
      ["any", ["==", "TYPE2018", 190402],
        ["==", "TYPE2018", 190403],
        ["==", "TYPE2018", 190404]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "742",
    "filter": ["all", ["all", [">=", "TYPE2018", 190301],
        ["<", "TYPE2018", 190400]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "743",
    "filter": ["all", ["all", [">=", "TYPE2018", 190301],
        ["<", "TYPE2018", 190400]
      ],
      ["any", ["==", "TYPE2018", 190301],
        ["==", "TYPE2018", 190302]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "744",
    "filter": ["all", ["all", [">=", "TYPE2018", 190200],
        ["<", "TYPE2018", 190300]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "gonganju1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "745",
    "filter": ["all", ["all", [">=", "TYPE2018", 190200],
        ["<", "TYPE2018", 190300]
      ],
      ["any", ["==", "TYPE2018", 190200],
        ["==", "TYPE2018", 190201],
        ["==", "TYPE2018", 190202],
        ["==", "TYPE2018", 190203]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "746",
    "filter": ["all", ["all", [">=", "TYPE2018", 190200],
        ["<", "TYPE2018", 190300]
      ],
      ["any", ["==", "TYPE2018", 190204],
        ["==", "TYPE2018", 190205],
        ["==", "TYPE2018", 190206],
        ["==", "TYPE2018", 190207]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "747",
    "filter": ["all", ["all", [">=", "TYPE2018", 190100],
        ["<", "TYPE2018", 190110],
        ["!=", "TAG", "190001"],
        ["!=", "TAG", "190002"],
        ["!=", "TAG", "190003"],
        ["!=", "NAME", "国家密码管理局"]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "748",
    "filter": ["all", ["all", [">=", "TYPE2018", 190100],
        ["<", "TYPE2018", 190110],
        ["!=", "TAG", "190001"],
        ["!=", "TAG", "190002"],
        ["!=", "TAG", "190003"],
        ["!=", "NAME", "国家密码管理局"]
      ],
      ["==", "TYPE2018", 190100]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "749",
    "filter": ["all", ["all", [">=", "TYPE2018", 190100],
        ["<", "TYPE2018", 190110],
        ["!=", "TAG", "190001"],
        ["!=", "TAG", "190002"],
        ["!=", "TAG", "190003"],
        ["!=", "NAME", "国家密码管理局"]
      ],
      ["any", ["==", "TYPE2018", 190101],
        ["==", "TYPE2018", 190103],
        ["==", "TYPE2018", 190104],
        ["==", "TYPE2018", 190105],
        ["==", "TYPE2018", 190108],
        ["==", "TYPE2018", 190109]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "750",
    "filter": ["all", ["all", [">=", "TYPE2018", 190100],
        ["<", "TYPE2018", 190110],
        ["!=", "TAG", "190001"],
        ["!=", "TAG", "190002"],
        ["!=", "TAG", "190003"],
        ["!=", "NAME", "国家密码管理局"]
      ],
      ["==", "TYPE2018", 190106]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "751",
    "filter": ["all", ["all", [">=", "TYPE2018", 190100],
        ["<", "TYPE2018", 190110],
        ["!=", "TAG", "190001"],
        ["!=", "TAG", "190002"],
        ["!=", "TAG", "190003"],
        ["!=", "NAME", "国家密码管理局"]
      ],
      ["==", "TYPE2018", 190107]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#503C3C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "752",
    "filter": ["any", ["==", "TAG", "190003"],
      ["==", "TYPE2018", 190102]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 14,
    "layout": {
      "icon-image": "zhengfujiguan1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "753",
    "filter": ["any", ["==", "TAG", "190003"]]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 14,
    "layout": {
      "icon-image": "zhengfujiguan1",
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "754",
    "filter": ["==", "TYPE2018", 190102]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "text-field": "{ABBERVIATION}",
      "text-font": ["SimHei Regular"],
      "text-size": 14
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#503C3C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "755",
    "filter": ["all", ["==", "TAG", "190002"],
      ["!=", "ABBERVIATION", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 12,
    "maxzoom": 14,
    "layout": {
      "icon-image": "zhengfujiguan1",
      "text-field": "{ABBERVIATION}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "756",
    "filter": ["all", ["==", "TAG", "190002"],
      ["!=", "ABBERVIATION", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-allow-overlap": true,
      "text-field": "{ABBERVIATION}",
      "text-font": ["SimHei Regular"],
      "text-size": 14
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#503C3C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "757",
    "filter": ["all", ["==", "TAG", "190001"],
      ["!=", "ABBERVIATION", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 11,
    "maxzoom": 14,
    "layout": {
      "icon-image": "zhengfujiguan1",
      "icon-allow-overlap": true,
      "text-field": "{ABBERVIATION}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "758",
    "filter": ["all", ["==", "TAG", "190001"],
      ["!=", "ABBERVIATION", ""]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "jiedao",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-image": "jie4",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [1, 1, 1.2, 1],
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-max-width": 5
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(255,255,255)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.1
    },
    "id": "759"
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "feijichang3",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#37408A",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "760",
    "filter": ["==", "TYPE2018", 230109]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-image": "dian1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "761",
    "filter": ["all", ["all", [">=", "TYPE2018", 180304],
        ["<", "TYPE2018", 180400],
        ["!=", "TYPE2018", 180307]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#50693C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "762",
    "filter": ["all", ["all", [">=", "TYPE2018", 180304],
        ["<", "TYPE2018", 180400],
        ["!=", "TYPE2018", 180307]
      ],
      ["any", ["==", "TYPE2018", 180304],
        ["==", "TYPE2018", 180305],
        ["==", "TYPE2018", 180306],
        ["==", "TYPE2018", 180308],
        ["==", "TYPE2018", 180309],
        ["==", "TYPE2018", 180310]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 14,
    "layout": {
      "icon-image": "dian1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#524949",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "763",
    "filter": ["all", ["all", [">=", "TYPE2018", 180304],
        ["<", "TYPE2018", 180400],
        ["!=", "TYPE2018", 180307]
      ],
      ["==", "TYPE2018", ""]
    ]
  }, {
    "type": "symbol",
    "source": "poi",
    "source-layer": "POI",
    "minzoom": 10,
    "maxzoom": 14,
    "layout": {
      "icon-image": "gongyuan1",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 8,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#50693C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "764",
    "filter": ["all", ["all", [">=", "TYPE2018", 180304],
        ["<", "TYPE2018", 180400],
        ["!=", "TYPE2018", 180307]
      ],
      ["any", ["==", "TYPE2018", 180304],
        ["==", "TYPE2018", 180305],
        ["==", "TYPE2018", 180306],
        ["==", "TYPE2018", 180308],
        ["==", "TYPE2018", 180309],
        ["==", "TYPE2018", 180310]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 10,
    "maxzoom": 13,
    "layout": {
      "icon-image": "qu4",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [1, 1, 1.2, 1],
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 5
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(255,255,255)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.2
    },
    "id": "765",
    "filter": ["any", ["==", "CLASS", "4"],
      ["==", "CLASS", "31"],
      ["==", "CLASS", "10"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "tiananmen",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "icon-image": "tiananmen",
      "icon-allow-overlap": true,
      "text-field": "{name}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "bottom",
      "text-offset": [0, -0.4],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "766"
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "ARESPL",
    "minzoom": 6,
    "maxzoom": 10,
    "paint": {
      "fill-color": "rgba(238,237,223,0.7)",
      "fill-outline-color": "#EEEDDF"
    },
    "id": "767"
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "AHYDPL_dao",
    "minzoom": 2,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#F5F4EE",
      "fill-outline-color": "#F5F4EE"
    },
    "id": "768"
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "AHYDA",
    "minzoom": 2,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#ABC6EF",
      "fill-outline-color": "#ABC6EF"
    },
    "id": "769",
    "filter": ["==", "CLASID", "230102"]
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "AHYDA",
    "minzoom": 2,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#ABC6EF",
      "fill-outline-color": "#ABC6EF"
    },
    "id": "770",
    "filter": ["==", "CLASID", "230101"]
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "AHYDA",
    "minzoom": 2,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#ABC6EF",
      "fill-outline-color": "#ABC6EF"
    },
    "id": "771",
    "filter": ["any", ["==", "CLASID", "240101"]]
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "AHYDA",
    "minzoom": 0,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#ABC6EF",
      "fill-outline-color": "#ABC6EF"
    },
    "id": "772",
    "filter": ["all", ["!=", "CLASID", "230101"],
      ["!=", "CLASID", "230102"],
      ["!=", "CLASID", "240101"]
    ]
  }, {
    "type": "fill",
    "source": "china_1-10",
    "source-layer": "Jiehe_PL",
    "minzoom": 0,
    "maxzoom": 10,
    "paint": {
      "fill-color": "#ABC6EF",
      "fill-outline-color": "#ABC6EF"
    },
    "id": "773"
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "AHYDL",
    "minzoom": 0,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#ABC6EF"
    },
    "id": "774",
    "filter": ["!=", "CNAME", "拉林河"]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRRL",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(170,170,170)",
      "line-width": 3
    },
    "id": "775"
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRRL",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#ffffff",
      "line-width": 1.2,
      "line-dasharray": [6, 6]
    },
    "id": "776"
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "AROALN_W",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C"
    },
    "id": "777",
    "filter": ["==", "CLASID", ""]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "AROALN_W",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C"
    },
    "id": "778",
    "filter": ["==", "CLASID", "1"]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "AROALN_W",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF"
    },
    "id": "779",
    "filter": ["==", "CLASID", "2"]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "780",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "781",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "782",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "783",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "784",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#E5D5BD",
      "line-width": 1.2
    },
    "id": "785",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 3
    },
    "id": "786",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.5
    },
    "id": "787",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 4
    },
    "id": "788",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "789",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBA585",
      "line-width": 4
    },
    "id": "790",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "791",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9A83CB",
      "line-width": 4.5
    },
    "id": "792",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CFAEF0",
      "line-width": 3
    },
    "id": "793",
    "filter": ["all", ["any", ["==", "CLASID", "420301"],
        ["==", "CLASID", "420400"],
        ["==", "CLASID", "440100"]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "794",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "795",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "796",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "797",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "798",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C6B9A6",
      "line-width": 2.5
    },
    "id": "799",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.2
    },
    "id": "800",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 3
    },
    "id": "801",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.5
    },
    "id": "802",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 4
    },
    "id": "803",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "804",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBA585",
      "line-width": 4
    },
    "id": "805",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "806",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9A83CB",
      "line-width": 4.5
    },
    "id": "807",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CFAEF0",
      "line-width": 3
    },
    "id": "808",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "809",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "810",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "811",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "812",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "813",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C6B9A6",
      "line-width": 2.5
    },
    "id": "814",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.2
    },
    "id": "815",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 3
    },
    "id": "816",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.5
    },
    "id": "817",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DBB28F",
      "line-width": 4
    },
    "id": "818",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "819",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#DBB28F",
      "line-width": 4
    },
    "id": "820",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "821",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9A83CB",
      "line-width": 4.5
    },
    "id": "822",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CFAEF0",
      "line-width": 3
    },
    "id": "823",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "824",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "825",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "826",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBC0A2",
      "line-width": 2
    },
    "id": "827",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "828",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C6B9A6",
      "line-width": 2.5
    },
    "id": "829",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.2
    },
    "id": "830",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 3
    },
    "id": "831",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": 1.5
    },
    "id": "832",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C89971",
      "line-width": 4
    },
    "id": "833",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "834",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#CBA585",
      "line-width": 4
    },
    "id": "835",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F9DCA5",
      "line-width": 2
    },
    "id": "836",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#f4ac58",
      "line-width": 4.5
    },
    "id": "837",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#F4D9B2",
      "line-width": 3
    },
    "id": "838",
    "filter": ["all", ["any", ["==", "CLASID", "420801"]],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "839",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": {
        "stops": [
          [7, 1],
          [8, 1.5]
        ]
      }
    },
    "id": "840",
    "filter": ["all", ["any", ["==", "CLASID", "420201"]],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "841",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C",
      "line-width": {
        "stops": [
          [4, 0.8],
          [6, 1.5],
          [8, 2.2]
        ]
      }
    },
    "id": "842",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C",
      "line-width": {
        "stops": [
          [4, 0.8],
          [6, 1.5],
          [8, 2.2]
        ]
      }
    },
    "id": "843",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#C29FF3",
      "line-width": {
        "stops": [
          [4, 1],
          [6, 2],
          [8, 3]
        ]
      }
    },
    "id": "844",
    "filter": ["all", ["any", ["==", "CLASID", "420101"],
        ["==", "CLASID", "430201"]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-dasharray": [1, 0],
      "line-pattern": " "
    },
    "id": "845",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", ""]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF"
    },
    "id": "846",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "440100"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 1.2
    },
    "id": "847",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": {
        "stops": [
          [8, 1]
        ]
      }
    },
    "id": "848",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFF4AF",
      "line-width": {
        "stops": [
          [7, 1],
          [8, 1.5]
        ]
      }
    },
    "id": "849",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C",
      "line-width": {
        "stops": [
          [4, 0.8],
          [6, 1.5],
          [8, 2.2]
        ]
      }
    },
    "id": "850",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD78C",
      "line-width": {
        "stops": [
          [4, 0.8],
          [6, 1.5],
          [8, 2.2]
        ]
      }
    },
    "id": "851",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 5,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FDC07C",
      "line-width": {
        "stops": [
          [4, 1],
          [6, 2],
          [8, 3]
        ]
      }
    },
    "id": "852",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "nanhaihaitan",
    "minzoom": 6,
    "maxzoom": 22,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FF0000",
      "line-dasharray": [2, 2]
    },
    "id": "853"
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "nanhaihaitan",
    "minzoom": 1,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFFFFF",
      "line-dasharray": [2, 2]
    },
    "id": "854"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "quanqiuhaijie",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.71,
      "line-width": 5
    },
    "id": "855"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "quanqiuhaijie",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": {
        "stops": [
          [6, 1],
          [8, 2]
        ],
        "type": "interval"
      }
    },
    "id": "856"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "quanqiuhaijie",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": {
        "stops": [
          [1, "#646464"],
          [3, "#9F6520"]
        ],
        "type": "interval"
      },
      "line-width": {
        "stops": [
          [1, 0.5],
          [3, 1]
        ],
        "type": "interval"
      }
    },
    "id": "857"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "riqibiangengxian",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#004B9F",
      "line-dasharray": [3, 3]
    },
    "id": "858"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#3C3C3C"
    },
    "id": "859",
    "filter": ["==", "clasid", ""]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)"
    },
    "id": "860",
    "filter": ["==", "clasid", "630200"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)"
    },
    "id": "861",
    "filter": ["==", "clasid", "630201"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-dasharray": [10, 3, 5, 3]
    },
    "id": "862",
    "filter": ["==", "clasid", "630300"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#3C3C3C"
    },
    "id": "863",
    "filter": ["all", ["all", ["==", "class", "10"],
        ["==", "clasid92", "61030"],
        ["==", "use", 0]
      ],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ]
      }
    },
    "id": "864",
    "filter": ["all", ["all", ["==", "class", "10"],
        ["==", "clasid92", "61030"],
        ["==", "use", 0]
      ],
      ["==", "clasid", "630200"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ],
        "type": "interval"
      }
    },
    "id": "865",
    "filter": ["all", ["all", ["==", "class", "10"],
        ["==", "clasid92", "61030"],
        ["==", "use", 0]
      ],
      ["==", "clasid", "630201"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ],
        "type": "interval"
      },
      "line-dasharray": [10, 3, 5, 3]
    },
    "id": "866",
    "filter": ["all", ["all", ["==", "class", "10"],
        ["==", "clasid92", "61030"],
        ["==", "use", 0]
      ],
      ["==", "clasid", "630300"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#3C3C3C"
    },
    "id": "867",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ]
      }
    },
    "id": "868",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630200"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ],
        "type": "interval"
      }
    },
    "id": "869",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630201"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": {
        "stops": [
          [6, 0.6],
          [8, 1]
        ],
        "type": "interval"
      },
      "line-dasharray": [10, 3, 5, 3]
    },
    "id": "870",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630300"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ79",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": 0.6
    },
    "id": "871"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ46",
    "minzoom": 3,
    "maxzoom": 7,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": 0.3
    },
    "id": "872"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#3C3C3C"
    },
    "id": "873",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": 0.3
    },
    "id": "874",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630200"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": 0.3
    },
    "id": "875",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630201"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN_SJ",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(130,130,130)",
      "line-width": 0.3,
      "line-dasharray": [10, 3, 5, 3]
    },
    "id": "876",
    "filter": ["all", ["any", ["!=", "class", "10"]],
      ["==", "clasid", "630300"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "Jiehe_LN",
    "minzoom": 0,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#ABC6EF"
    },
    "id": "877",
    "filter": ["!=", "FCNAME", "拉林河"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "10ji",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.73,
      "line-width": 5
    },
    "id": "878"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "10ji",
    "minzoom": 9,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.8,
      "line-width": 2
    },
    "id": "879"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "9ji",
    "minzoom": 8,
    "maxzoom": 9,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.69,
      "line-width": 5
    },
    "id": "880"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "9ji",
    "minzoom": 8,
    "maxzoom": 9,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.81,
      "line-width": 2
    },
    "id": "881"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "8ji",
    "minzoom": 7,
    "maxzoom": 8,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.71,
      "line-width": 5
    },
    "id": "882"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "8ji",
    "minzoom": 7,
    "maxzoom": 8,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.78
    },
    "id": "883"
  }, {
    "type": "line",
    "source": "1",
    "source-layer": "T7ji",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.69,
      "line-width": 5
    },
    "id": "884"
  }, {
    "type": "line",
    "source": "1",
    "source-layer": "T7ji",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.79
    },
    "id": "885"
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(255,214,211)",
      "line-width": 5
    },
    "id": "886",
    "filter": ["==", "clasid", ""]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "887",
    "filter": ["==", "clasid", ""]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5
    },
    "id": "888",
    "filter": ["==", "clasid", "620201"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.8,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      }
    },
    "id": "889",
    "filter": ["==", "clasid", "620201"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5
    },
    "id": "890",
    "filter": ["==", "clasid", "620202"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.75,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      },
      "line-dasharray": [12, 12]
    },
    "id": "891",
    "filter": ["==", "clasid", "620202"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5
    },
    "id": "892",
    "filter": ["==", "clasid", "620020"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.75,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      },
      "line-dasharray": [4, 4]
    },
    "id": "893",
    "filter": ["==", "clasid", "620020"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5
    },
    "id": "894",
    "filter": ["==", "clasid", "620030"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.75,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      },
      "line-dasharray": [4, 4]
    },
    "id": "895",
    "filter": ["==", "clasid", "620030"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5,
      "line-dasharray": {
        "stops": [
          [6, [2, 2]],
          [8, [3, 3]]
        ],
        "type": "interval"
      }
    },
    "id": "896",
    "filter": ["==", "clasid", "620240"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.75,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      },
      "line-dasharray": [8, 12]
    },
    "id": "897",
    "filter": ["==", "clasid", "620240"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "round",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#FFD6D3",
      "line-opacity": 0.6,
      "line-width": 5
    },
    "id": "898",
    "filter": ["==", "clasid", "620666"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-opacity": 0.75,
      "line-width": {
        "stops": [
          [6, 1],
          [8, 1.5]
        ],
        "type": "interval"
      },
      "line-dasharray": [12, 12]
    },
    "id": "899",
    "filter": ["==", "clasid", "620666"]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "900",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8
    },
    "id": "901",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620201"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8,
      "line-dasharray": [10, 5]
    },
    "id": "902",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620202"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8,
      "line-dasharray": [3, 3]
    },
    "id": "903",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620020"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8,
      "line-dasharray": [3, 3]
    },
    "id": "904",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620030"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8,
      "line-dasharray": [8, 6]
    },
    "id": "905",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620240"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#9F6520",
      "line-width": 0.8,
      "line-dasharray": [8, 6]
    },
    "id": "906",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620666"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "907",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5
    },
    "id": "908",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620201"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5,
      "line-dasharray": [8, 5]
    },
    "id": "909",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620202"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5,
      "line-dasharray": [4, 3]
    },
    "id": "910",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620020"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5,
      "line-dasharray": [4, 3]
    },
    "id": "911",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620030"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5,
      "line-dasharray": [7, 4]
    },
    "id": "912",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620240"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5
    },
    "id": "913",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620333"]
    ]
  }, {
    "type": "line",
    "source": "11001000070",
    "source-layer": "ABOULN",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)",
      "line-width": 0.5,
      "line-dasharray": [8, 6]
    },
    "id": "914",
    "filter": ["all", ["!in", "objectid", 2038, 2039, 2040, 2041, 2042, 2044, 2045, 2046, 2056, 2057, 2058, 2059, 2060],
      ["==", "clasid", "620666"]
    ]
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "xiang",
    "minzoom": 9,
    "maxzoom": 15,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696",
      "line-width": 0.5
    },
    "id": "915"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "xian",
    "minzoom": 9,
    "maxzoom": 12,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "916"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "xian",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696",
      "line-width": 0.5
    },
    "id": "917"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "shi",
    "minzoom": 7,
    "maxzoom": 12,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696",
      "line-width": 1.2
    },
    "id": "918"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "shi",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696",
      "line-width": 0.5
    },
    "id": "919"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "sheng",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "920"
  }, {
    "type": "line",
    "source": "全国省市县乡",
    "source-layer": "sheng",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "visibility": "none",
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "#969696"
    },
    "id": "921"
  }, {
    "type": "fill",
    "source": "国界",
    "source-layer": "11001000186_色带6级",
    "minzoom": 0,
    "maxzoom": 6,
    "paint": {
      "fill-outline-color": "#000000"
    },
    "id": "922",
    "filter": ["all", ["==", "mc", "内"],
      ["==", "mc", ""]
    ]
  }, {
    "type": "fill",
    "source": "国界",
    "source-layer": "11001000186_色带6级",
    "minzoom": 0,
    "maxzoom": 6,
    "paint": {
      "fill-color": "rgba(215,180,138,0.8)",
      "fill-outline-color": "rgba(215,180,138,0.8)"
    },
    "id": "923",
    "filter": ["all", ["==", "mc", "内"],
      ["==", "mc", "外"]
    ]
  }, {
    "type": "fill",
    "source": "国界",
    "source-layer": "11001000186_色带6级",
    "minzoom": 0,
    "maxzoom": 6,
    "paint": {
      "fill-color": "rgba(215,180,138,0.52)",
      "fill-outline-color": "rgba(215,180,138,0.52)"
    },
    "id": "924",
    "filter": ["all", ["==", "mc", "内"],
      ["==", "mc", "内"]
    ]
  }, {
    "type": "line",
    "source": "国界",
    "source-layer": "11001000183_中国国界",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(110,110,110)"
    },
    "id": "925",
    "filter": ["any", ["==", "clasid", ""],
      ["==", "clasid", ""]
    ]
  }, {
    "type": "line",
    "source": "国界",
    "source-layer": "11001000183_中国国界",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(159,101,32)"
    },
    "id": "926",
    "filter": ["==", "clasid", "620201"]
  }, {
    "type": "line",
    "source": "国界",
    "source-layer": "11001000183_中国国界",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(159,101,32)",
      "line-width": 1.3,
      "line-dasharray": [8, 3]
    },
    "id": "927",
    "filter": ["==", "clasid", "620202"]
  }, {
    "type": "line",
    "source": "国界",
    "source-layer": "11001000183_中国国界",
    "minzoom": 0,
    "maxzoom": 6,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(159,101,32)"
    },
    "id": "928",
    "filter": ["==", "clasid", "620333"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "929",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["any", ["==", "CLASID", ""],
        ["==", "CLASID", "440100"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "930",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "931",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "shengdao1",
      "icon-size": 1.1,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 10
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "932",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "933",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "guodao1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "934",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 600,
      "icon-image": "gaosu1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "935",
    "filter": ["all", ["all", ["==", "CLASID", "420201"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "937",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["any", ["==", "CLASID", ""],
        ["==", "CLASID", "440100"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "938",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "939",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "shengdao1",
      "icon-size": 1.1,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "940",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "941",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "shengdao1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "942",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 600,
      "icon-image": "gaosu1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "943",
    "filter": ["all", ["all", ["==", "CLASID", "420101"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "945",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["any", ["==", "CLASID", ""],
        ["==", "CLASID", "440100"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "946",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420400"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "947",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420301"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "shengdao1",
      "icon-size": 1.1,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "948",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "949",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "430201"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "icon-image": "guodao1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "950",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 600,
      "icon-image": "guodao1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.81,
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(253,253,253)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3
    },
    "id": "951",
    "filter": ["all", ["all", ["==", "CLASID", "420801"],
        ["!=", "ROUTENUM", ""]
      ],
      ["==", "CLASID", "420801"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "water_zjpl",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "text-field": "{fcname}",
      "text-size": 11,
      "text-max-width": 12,
      "text-letter-spacing": 0.2,
      "text-offset": [0, 0.2],
      "symbol-placement": "line",
      "text-padding": 2,
      "symbol-spacing": 800,
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "953"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "water_zjpt",
    "minzoom": 5,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0, 0.5]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "955",
    "filter": ["all", ["!=", "fcname", "斧头湖"],
      ["!=", "fcname", "石臼湖"],
      ["!=", "fcname", "南漪湖"],
      ["!=", "ename", "Caspian Sea"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "heilongjiang_c",
    "minzoom": 5,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff"
    },
    "id": "956",
    "filter": ["any", ["==", "LEVEL", "10"]]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "dao_P",
    "minzoom": 9,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#343434",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "957",
    "filter": ["in", "type", "1", "2", "3", "4", "5", "6", "7", "8"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "dao_P",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-anchor": "left",
      "text-offset": [0.4, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#343434",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "958",
    "filter": ["in", "type", "10", "11"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ChineseIsland2",
    "minzoom": 5,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-anchor": "bottom",
      "text-offset": [-1, -0.5],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "959"
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ChineseIsland1",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [2, -0.5],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "960"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-image": "dian1",
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "right",
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "961",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(104,104,104)",
      "text-halo-color": "#ffffff"
    },
    "id": "962",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "5"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "right",
      "text-offset": [-0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(104,104,104)",
      "text-halo-color": "#ffffff"
    },
    "id": "963",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-image": "dian1",
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13.5,
      "text-anchor": "right",
      "text-offset": [-0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(52,52,52)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "964",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "right"
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(191,120,72)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "965",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-image": "guowaishoudu1",
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-offset": [0, 1]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(219,95,98)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "966",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 8,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "967",
    "filter": ["all", ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"],
      ["==", "class", "7"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaishengming_7级",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(191,120,72)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "969",
    "filter": ["!=", "SOC", "BTN"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming_7级",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-image": "guowaishoudu1",
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(219,95,98)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "970"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaishengming_6级",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(191,120,72)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5
    },
    "id": "971",
    "filter": ["!=", "SOC", "BTN"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming_6级",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-image": "guowaishoudu1",
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(219,95,98)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "972"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaishengming_5级",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-max-width": 6
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(191,120,72)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "973",
    "filter": ["!=", "SOC", "BTN"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming_5级",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-image": "guowaishoudu1",
      "icon-size": 1.1,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(219,95,98)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "974"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming_4级",
    "minzoom": 3,
    "maxzoom": 5,
    "layout": {
      "icon-image": "guowaishoudu1",
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(219,95,98)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "975"
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-halo-color": "#ffffff"
    },
    "id": "976",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "爱辉区"],
        ["!=", "CLASS", "1"]
      ],
      ["any", ["any", ["any", ["==", "CLASS", ""],
            ["==", "CLASS", "1"]
          ],
          ["==", "CLASS", "7"]
        ],
        ["==", "CLASS", "5"],
        ["==", "CLASS", "6"],
        ["==", "CLASS", "9"],
        ["==", "CLASS", "3"],
        ["==", "CLASS", "8"],
        ["==", "CLASS", "2"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(104,51,14)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "977",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "爱辉区"],
        ["!=", "CLASS", "1"]
      ],
      ["==", "CLASS", "10"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(104,51,14)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "978",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "爱辉区"],
        ["!=", "CLASS", "1"]
      ],
      ["==", "CLASS", "31"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 7,
    "maxzoom": 10,
    "layout": {
      "icon-image": "quxian1",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "left",
      "text-offset": [0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(104,51,14)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "979",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "爱辉区"],
        ["!=", "CLASS", "1"]
      ],
      ["==", "CLASS", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 6,
    "maxzoom": 12,
    "layout": {
      "icon-image": "dijishi1",
      "icon-size": {
        "type": "interval",
        "stops": [
          [9, 1],
          [10, 0]
        ]
      },
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "right",
      "text-offset": [-0.6, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#3C3C3C",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "980",
    "filter": ["any", ["==", "FCNAME", "黑河市"],
      ["==", "FCNAME", "丹东市"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 6,
    "maxzoom": 12,
    "layout": {
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-halo-color": "#ffffff"
    },
    "id": "981",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "黑河市"],
        ["!=", "FCNAME", "丹东市"],
        ["!=", "FCNAME", "勐拉镇"],
        ["!=", "CLASS", "1"]
      ],
      ["any", ["any", ["any", ["==", "CLASS", ""],
            ["==", "CLASS", "1"]
          ],
          ["==", "CLASS", "7"]
        ],
        ["==", "CLASS", "5"],
        ["==", "CLASS", "6"],
        ["==", "CLASS", "9"],
        ["==", "CLASS", "10"],
        ["==", "CLASS", "31"],
        ["==", "CLASS", "4"],
        ["==", "CLASS", "8"],
        ["==", "CLASS", "2"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 6,
    "maxzoom": 12,
    "layout": {
      "icon-image": "dijishi1",
      "icon-size": {
        "type": "interval",
        "stops": [
          [9, 1],
          [10, 0]
        ]
      },
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "left",
      "text-offset": [0.3, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(60,60,60)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "982",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "黑河市"],
        ["!=", "FCNAME", "丹东市"],
        ["!=", "FCNAME", "勐拉镇"],
        ["!=", "CLASS", "1"]
      ],
      ["==", "CLASS", "3"]
    ]
  }, {
    "type": "line",
    "source": "china_1-10",
    "source-layer": "biaozhuxian",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "line-join": "miter",
      "line-miter-limit": 2,
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": "rgb(100,100,100)"
    },
    "id": "983",
    "filter": ["any", ["==", "ID", "56"]]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 4,
    "maxzoom": 10,
    "layout": {
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-halo-color": "#ffffff"
    },
    "id": "984",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "北京市"],
        ["!=", "CLASS", "1"]
      ],
      ["any", ["any", ["any", ["any", ["==", "CLASS", ""],
              ["==", "CLASS", "1"]
            ],
            ["==", "CLASS", "7"]
          ],
          ["==", "CLASS", "5"],
          ["==", "CLASS", "6"],
          ["==", "CLASS", "9"],
          ["==", "CLASS", "10"],
          ["==", "CLASS", "31"],
          ["==", "CLASS", "4"],
          ["==", "CLASS", "3"]
        ],
        ["==", "CLASS", "8"]
      ]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 4,
    "maxzoom": 10,
    "layout": {
      "icon-image": "shenghui1",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": {
        "stops": [
          [4, 14],
          [5, 15]
        ]
      },
      "text-anchor": "left",
      "text-offset": [0.4, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(20,20,20)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "985",
    "filter": ["all", ["all", ["!=", "FCNAME", "澳门"],
        ["!=", "FCNAME", "北京市"],
        ["!=", "CLASS", "1"]
      ],
      ["==", "CLASS", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 4,
    "maxzoom": 10,
    "layout": {
      "icon-image": "shenghui1",
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": {
        "type": "interval",
        "stops": [
          [4, 14],
          [5, 15]
        ]
      },
      "text-anchor": "top-right",
      "text-offset": [-0.3, 0.3],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(20,20,20)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "986",
    "filter": ["any", ["==", "FCNAME", "澳门"]]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming_tinghuoxian",
    "minzoom": 6,
    "maxzoom": 10,
    "layout": {
      "text-field": "{fcname}",
      "text-size": 11,
      "text-max-width": 12,
      "text-padding": 2,
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "987"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "988",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "989",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "990",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-size": 18,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true,
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "991",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "992",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "993",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "5"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_7级_w",
    "minzoom": 7,
    "maxzoom": 9,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "994",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "6"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "995",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "996",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "997",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 17,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "998",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "999",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1000",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "5"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_6级_c",
    "minzoom": 6,
    "maxzoom": 7,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1001",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "6"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1002",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.1,
      "text-offset": [0.4, -0.3],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1003",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1004",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1005",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1006",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1007",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "5"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_5级_c",
    "minzoom": 5,
    "maxzoom": 6,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1008",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "6"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_4级_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff"
    },
    "id": "1009",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_4级_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1010",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_4级_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1011",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_4级_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1012",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_4级_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1013",
    "filter": ["all", ["!=", "type", "3"],
      ["==", "type", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_3级_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "1014",
    "filter": ["==", "type", ""]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_3级_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1015",
    "filter": ["==", "type", "1"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_3级_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1016",
    "filter": ["==", "type", "2"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_3级_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1017",
    "filter": ["==", "type", "3"]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "country_3级_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{fcname}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-anchor": "right",
      "text-offset": [-1, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1018",
    "filter": ["==", "type", "4"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "country_3ji_c",
    "minzoom": 2,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "1019",
    "filter": ["all", ["!=", "FCNAME", "马尔维纳斯群岛(福克兰群岛)(阿根、英争议)"],
      ["==", "TYPE", ""]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "country_3ji_c",
    "minzoom": 2,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12.5,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1020",
    "filter": ["all", ["!=", "FCNAME", "马尔维纳斯群岛(福克兰群岛)(阿根、英争议)"],
      ["==", "TYPE", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "country_3ji_c",
    "minzoom": 2,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 10,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1021",
    "filter": ["all", ["!=", "FCNAME", "马尔维纳斯群岛(福克兰群岛)(阿根、英争议)"],
      ["==", "TYPE", "2"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "country_3ji_c",
    "minzoom": 2,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.2,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1022",
    "filter": ["all", ["!=", "FCNAME", "马尔维纳斯群岛(福克兰群岛)(阿根、英争议)"],
      ["==", "TYPE", "3"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "country_3ji_c",
    "minzoom": 2,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-size": 10,
      "text-max-width": 11,
      "text-letter-spacing": 0.1,
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1023",
    "filter": ["all", ["!=", "FCNAME", "马尔维纳斯群岛(福克兰群岛)(阿根、英争议)"],
      ["==", "TYPE", "4"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 3,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "1024",
    "filter": ["==", "TYPE", ""]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 3,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-letter-spacing": 0.5,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1025",
    "filter": ["==", "TYPE", "1"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 3,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1026",
    "filter": ["==", "TYPE", "3"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 3,
    "maxzoom": 10,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5
    },
    "id": "1027",
    "filter": ["==", "TYPE", "4"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "1028",
    "filter": ["==", "TYPE", ""]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": {
        "stops": [
          [1, 16],
          [2, 0]
        ],
        "type": "interval"
      },
      "text-letter-spacing": 0.5,
      "text-offset": [2, 1],
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(0,0,0)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 4
    },
    "id": "1029",
    "filter": ["==", "TYPE", "2"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "Sea",
    "minzoom": 0,
    "maxzoom": 3,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 15,
      "text-letter-spacing": 0.5,
      "text-allow-overlap": true
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(14,122,173)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1030",
    "filter": ["==", "TYPE", "1"]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "shengji2_point_5ji_w",
    "minzoom": 4,
    "maxzoom": 5,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#BF7848",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1031"
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "shengji2_point_4ji_w",
    "minzoom": 3,
    "maxzoom": 4,
    "layout": {
      "icon-image": "shoudu1",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-letter-spacing": 0.1,
      "text-offset": [1.5, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#DB5F62",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1032",
    "filter": ["any", ["==", "FCNAME", "北京"]]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "zhongguodiming",
    "minzoom": 0,
    "maxzoom": 10,
    "layout": {
      "icon-image": "shoudu3",
      "text-field": "{FCNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-anchor": "left",
      "text-offset": [0.4, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "icon-halo-width": 1,
      "text-color": "#DB5F62",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "1033",
    "filter": ["==", "FCNAME", "北京市"]
  }, {
    "type": "symbol",
    "source": "省市县乡注记",
    "source-layer": "xiang_zhuji",
    "minzoom": 10,
    "maxzoom": 14,
    "layout": {
      "visibility": "none",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-max-width": 7,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    },
    "id": "1034"
  }, {
    "type": "symbol",
    "source": "省市县乡注记",
    "source-layer": "xian_zhuji",
    "minzoom": 8,
    "maxzoom": 11,
    "layout": {
      "visibility": "none",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 14,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.2
    },
    "id": "1035"
  }, {
    "type": "symbol",
    "source": "省市县乡注记",
    "source-layer": "shi_zhuji",
    "minzoom": 6,
    "maxzoom": 9,
    "layout": {
      "visibility": "none",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 15
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#646464",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5
    },
    "id": "1036"
  }, {
    "type": "symbol",
    "source": "省市县乡注记",
    "source-layer": "sheng_zhuji",
    "minzoom": 4,
    "maxzoom": 7,
    "layout": {
      "visibility": "none",
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5
    },
    "id": "1037"
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "BUIA",
    "minzoom": 16,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "6"
  }, {
    "type": "symbol",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "9",
    "filter": ["any", ["==", "clasid", "240101"],
      ["==", "clasid", "240102"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "11",
    "filter": ["==", "clasid", "230102"]
  }, {
    "type": "symbol",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "13",
    "filter": ["any", ["==", "clasid", "230101"],
      ["==", "clasid", "230200"]
    ]
  }, {
    "type": "symbol",
    "source": "11001000074",
    "source-layer": "HYDA",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "15",
    "filter": ["any", ["!=", "clasid", "230101"],
      ["!=", "clasid", "230200"],
      ["!=", "clasid", "230102"],
      ["!=", "clasid", "240101"],
      ["!=", "clasid", "240102"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "HYDL",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "17"
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "LRRL",
    "minzoom": 10,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "20",
    "filter": ["any", ["!=", "CLASID", "410305"]]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 14,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 500,
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": {
        "stops": [
          [14, "#3C3C3C"],
          [15, "rgb(134,70,17)"]
        ]
      },
      "text-halo-color": {
        "stops": [
          [14, "#FFFFFF"],
          [15, "#FFFFE6"]
        ]
      },
      "text-halo-width": 1
    },
    "id": "36",
    "filter": ["any", ["==", "CLASID", "420500"],
      ["==", "CLASID", "420401"],
      ["==", "CLASID", "430501"],
      ["==", "CLASID", "430502"],
      ["==", "CLASID", "420400"],
      ["!has", "CLASID"]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "43",
    "filter": ["all", ["==", "CLASID", "420402"],
      ["!=", "FUNCLASS", "5"]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "50",
    "filter": ["all", ["==", "CLASID", "420500"],
      ["!=", "FUNCLASS", "5"],
      ["!=", "FUNCLASS", ""]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "57",
    "filter": ["all", ["==", "CLASID", "420400"],
      ["!=", "FUNCLASS", "5"],
      ["!=", "FUNCLASS", ""]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 500,
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(104,54,13)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.4
    },
    "id": "64",
    "filter": ["all", ["==", "CLASID", "420301"],
      ["!=", "FUNCLASS", ""]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 500,
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(104,54,13)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.6
    },
    "id": "71",
    "filter": ["all", ["==", "CLASID", "420201"],
      ["!=", "FUNCLASS", ""]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 11,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 500,
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(134,70,17)",
      "text-halo-color": "rgb(255,255,255)",
      "text-halo-width": 1
    },
    "id": "78",
    "filter": ["any", ["==", "CLASID", "430201"],
      ["==", "CLASID", "420101"]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 500,
      "icon-size": 1.2,
      "text-field": "{CNAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "text-color": "rgb(157,71,21)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5
    },
    "id": "80",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["!in", "ROUTENUM", " ", "　", ""],
      ["has", "ROUTENUM"]
    ]
  }, {
    "type": "symbol",
    "source": "lrdl",
    "source-layer": "LRDL",
    "minzoom": 10,
    "maxzoom": 22,
    "layout": {
      "symbol-placement": "line",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 600,
      "icon-image": "guodao1",
      "icon-size": 1.2,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 1, -2, 1],
      "text-field": "{ROUTENUM}",
      "text-font": ["SimHei Regular"],
      "text-size": 11
    },
    "paint": {
      "icon-opacity": 0.8,
      "icon-halo-color": "#ffffff",
      "text-color": "rgba(255,255,255,255)",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.25
    },
    "id": "87",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["!in", "ROUTENUM", ""],
      ["!in", "ROUTENUM", " "]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBA",
    "minzoom": 15,
    "maxzoom": 20,
    "layout": {
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0],
      "text-variable-anchor": [],
      "text-padding": 2,
      "icon-size": 0
    },
    "paint": {
      "text-color": "#141414",
      "text-halo-color": "#ffffff",
      "icon-halo-color": "#ffffff"
    },
    "id": "89"
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "136",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "110000000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "167",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "440100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "208",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "310000000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "223",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "120000000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "240",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "500000000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "247",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "210100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "270",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "320100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "291",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "420100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "306",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "510100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "317",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "610100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "330",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "210200000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "343",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "220100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "352",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "320500000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "363",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "330100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "382",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "440300000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "409",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "810000000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "420",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "530100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "427",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "230100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "436",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "410100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "445",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "430100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "452",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "330200000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "459",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "320200000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "484",
    "filter": ["all", ["==", "OPEN", "1"],
      ["in", "PAC", "710009000", "710001000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "491",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "340100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "500",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "370200000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "507",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "450100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "514",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "360100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "519",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "350100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "524",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "350200000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "531",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "130100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "536",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "441900000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "541",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "520100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "SUBL",
    "minzoom": 12,
    "maxzoom": 20,
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": 800,
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 12,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#282828",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "546",
    "filter": ["all", ["==", "OPEN", "1"],
      ["==", "PAC", "650100000"]
    ]
  }, {
    "type": "symbol",
    "source": "other",
    "source-layer": "HCTL",
    "minzoom": 12,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-font": [],
      "text-size": 13,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "549"
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "top-left",
      "text-offset": [0.8, 0.5]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#0A1E37",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "697",
    "filter": ["all", ["==", "CLASID", "450101"],
      ["==", "OPEN", "1"],
      ["==", "TRAIN", "0"]
    ]
  }, {
    "type": "symbol",
    "source": "subp",
    "source-layer": "SUBP",
    "minzoom": 13,
    "maxzoom": 22,
    "layout": {
      "icon-size": 1.2,
      "icon-allow-overlap": true,
      "text-field": "{NAME}",
      "text-font": ["SimHei Regular"],
      "text-size": 13,
      "text-anchor": "top-left",
      "text-offset": [0.5, 0.6]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#0A1E37",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2
    },
    "id": "734",
    "filter": ["all", ["==", "CLASID", "450101"],
      ["==", "OPEN", "1"],
      ["==", "TRAIN", "1"]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 20,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "936",
    "filter": ["all", ["==", "CLASID", "420201"],
      ["!=", "ROUTENUM", ""]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 20,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "944",
    "filter": ["all", ["==", "CLASID", "420101"],
      ["!=", "ROUTENUM", ""]
    ]
  }, {
    "type": "symbol",
    "source": "china_1-10",
    "source-layer": "ALRDL_C",
    "minzoom": 6,
    "maxzoom": 20,
    "layout": {
      "icon-size": 1.2,
      "text-font": ["SimHei Regular"],
      "text-size": 11,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "952",
    "filter": ["all", ["==", "CLASID", "420801"],
      ["!=", "ROUTENUM", ""]
    ]
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "water_zjpl",
    "minzoom": 4,
    "maxzoom": 10,
    "layout": {
      "text-size": 13,
      "text-offset": [0.8, 0],
      "symbol-placement": "line",
      "text-padding": 2,
      "symbol-spacing": 500
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "954"
  }, {
    "type": "symbol",
    "source": "11001000070",
    "source-layer": "guowaidiming",
    "minzoom": 0,
    "maxzoom": 20,
    "layout": {
      "icon-size": 1.2,
      "text-font": [],
      "text-size": 13,
      "text-anchor": "right",
      "text-offset": [0.8, 0]
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-color": "#141414",
      "text-halo-color": "#ffffff"
    },
    "id": "968",
    "filter": ["!in", "fcname", "(印度实际控制区)", "(巴基斯坦实际控制区)"]
  }],
  "version": 8,
  "glyphs": "http://vtctest.geo-compass.com/geocmap/api/v1/font/10001000006/{fontstack}/{range}.pbf",
  "sprite": "http://yjqz.geo-compass.com:80/api/v1/sprites/1/sprite",
  "sources": {
    "1": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/11/{z}/{x}/{y}.pbf"],
      "maxzoom": 12
    },
    "china_1-10": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/11/{z}/{x}/{y}.pbf"],
      "maxzoom": 12
    },
    "poi": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/12/{z}/{x}/{y}.pbf"],
      "maxzoom": 16
    },
    "lrdl": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/13/{z}/{x}/{y}.pbf"],
      "maxzoom": 16
    },
    "other": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/14/{z}/{x}/{y}.pbf"],
      "maxzoom": 16
    },
    "subp": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/15/{z}/{x}/{y}.pbf"],
      "maxzoom": 16
    },
    "lfcp": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/16/{z}/{x}/{y}.pbf"],
      "maxzoom": 16
    },
    "全国省市县乡": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/22/{z}/{x}/{y}.pbf"],
      "maxzoom": 11
    },
    "省市县乡注记": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/21/{z}/{x}/{y}.pbf"],
      "maxzoom": 11
    },
    "国界": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/23/{z}/{x}/{y}.pbf"],
      "maxzoom": 9
    },
    "11001000070": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/71/{z}/{x}/{y}.pbf"],
      "maxzoom": 10
    },
    "11001000074": {
      "type": "vector",
      "tiles": ["http://yjqz.geo-compass.com:80/api/v1/tiles/75/{z}/{x}/{y}.pbf"],
      "maxzoom": 15
    }
  },
  "metadata": {
    "autolabel": ["zhongguodiming省"],
    "layerIDMap": {
      "背景": ["0"],
      "ANATPL": ["1"],
      "HYDA_bu": ["2"],
      "BLOA": ["3"],
      "VEGA": ["4"],
      "BUIA": ["5", "6"],
      "BUIA15级": ["7"],
      "HYDA水库": ["8", "9"],
      "HYDA池塘": ["10", "11"],
      "HYDA湖泊": ["12", "13"],
      "HYDA": ["14", "15"],
      "HYDL": ["16", "17"],
      "LRRL": ["18", "19", "20"],
      "LRDL其它道路": ["21", "22", "23", "24", "25", "26", "27", "28"],
      "LRDL_乡镇村道12级": ["29", "30", "31", "32", "33", "34", "35", "36"],
      "LRDL_县乡道420402": ["37", "38", "39", "40", "41", "42", "43"],
      "LRDL_县乡道420500": ["44", "45", "46", "47", "48", "49", "50"],
      "LRDL_县乡道420400": ["51", "52", "53", "54", "55", "56", "57"],
      "LRDL县道": ["58", "59", "60", "61", "62", "63", "64"],
      "LRDL省道": ["65", "66", "67", "68", "69", "70", "71"],
      "LRDL国道快速路": ["72", "73", "74", "75", "76", "77", "78"],
      "LRDL高速名称": ["79", "80"],
      "LRDL高速公路": ["81", "82", "83", "84", "85", "86", "87"],
      "SUBA": ["88", "89"],
      "SUBL北京": ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136"],
      "SUBL广州": ["137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167"],
      "SUBL上海": ["168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208"],
      "SUBL天津": ["209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223"],
      "SUBL重庆": ["224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240"],
      "SUBL沈阳": ["241", "242", "243", "244", "245", "246", "247"],
      "SUBL南京": ["248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270"],
      "SUBL武汉": ["271", "272", "273", "274", "275", "276", "277", "278", "279", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291"],
      "SUBL成都": ["292", "293", "294", "295", "296", "297", "298", "299", "300", "301", "302", "303", "304", "305", "306"],
      "SUBL西安": ["307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317"],
      "SUBL大连": ["318", "319", "320", "321", "322", "323", "324", "325", "326", "327", "328", "329", "330"],
      "SUBL长春": ["331", "332", "333", "334", "335", "336", "337", "338", "339", "340", "341", "342", "343"],
      "SUBL苏州": ["344", "345", "346", "347", "348", "349", "350", "351", "352"],
      "SUBL杭州": ["353", "354", "355", "356", "357", "358", "359", "360", "361", "362", "363"],
      "SUBL深圳": ["364", "365", "366", "367", "368", "369", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382"],
      "SUBL香港": ["383", "384", "385", "386", "387", "388", "389", "390", "391", "392", "393", "394", "395", "396", "397", "398", "399", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409"],
      "SUBL昆明": ["410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420"],
      "SUBL哈尔滨": ["421", "422", "423", "424", "425", "426", "427"],
      "SUBL郑州": ["428", "429", "430", "431", "432", "433", "434", "435", "436"],
      "SUBL长沙": ["437", "438", "439", "440", "441", "442", "443", "444", "445"],
      "SUBL宁波": ["446", "447", "448", "449", "450", "451", "452"],
      "SUBL无锡": ["453", "454", "455", "456", "457", "458", "459"],
      "SUBL台北高雄": ["460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484"],
      "SUBL合肥": ["485", "486", "487", "488", "489", "490", "491"],
      "SUBL青岛": ["492", "493", "494", "495", "496", "497", "498", "499", "500"],
      "SUBL南宁": ["501", "502", "503", "504", "505", "506", "507"],
      "SUBL南昌": ["508", "509", "510", "511", "512", "513", "514"],
      "SUBL福州": ["515", "516", "517", "518", "519"],
      "SUBL厦门": ["520", "521", "522", "523", "524"],
      "SUBL石家庄": ["525", "526", "527", "528", "529", "530", "531"],
      "SUBL东莞": ["532", "533", "534", "535", "536"],
      "SUBL贵阳": ["537", "538", "539", "540", "541"],
      "SUBL乌鲁木齐": ["542", "543", "544", "545", "546"],
      "LFCP": ["547"],
      "HCTL注记": ["548", "549"],
      "11餐饮美食_麦当劳": ["550"],
      "11餐饮美食_KFC": ["551"],
      "11餐饮美食": ["552", "553", "554", "555"],
      "25农林牧渔业": ["556"],
      "22其他单位": ["557"],
      "22工业园": ["558"],
      "22厂矿企业": ["559"],
      "22公司": ["560"],
      "14汽车销售及服务": ["561", "562"],
      "21居民服务": ["563", "564", "565", "566"],
      "15金融保险": ["567", "568", "569", "570"],
      "13其他购物场所": ["571", "572"],
      "13家居建材市场": ["573"],
      "13电器商场": ["574"],
      "13农贸市场": ["575"],
      "13超市": ["576"],
      "13百货商场": ["577"],
      "13医药商店": ["578", "579", "580"],
      "18旅游景点": ["581"],
      "18休闲度假": ["582", "583", "584"],
      "18娱乐场所": ["585", "586", "587"],
      "18运动场馆": ["588", "589", "590"],
      "12居民住宅": ["591"],
      "12旅馆": ["592"],
      "12宾馆酒店": ["593"],
      "20商务中心": ["594", "595", "596"],
      "20商务服务": ["597"],
      "20商业大厦": ["598"],
      "23其他交通设施": ["599", "600"],
      "23服务区": ["601"],
      "23停车场": ["602"],
      "23能源站": ["603"],
      "23收费站": ["604"],
      "23物流快运": ["605"],
      "23立交桥": ["606"],
      "23港口码头": ["607"],
      "23汽车站": ["608"],
      "23火车站": ["609"],
      "17其他医疗机构": ["610", "611", "612"],
      "17献血站": ["613"],
      "17防疫站": ["614"],
      "17急诊": ["615"],
      "17专科医院": ["616"],
      "17综合医院": ["617"],
      "BLOA_P医院14级": ["618"],
      "BLOA_P医院": ["619"],
      "24科研机构": ["620"],
      "16其他教育文化": ["621", "622"],
      "16媒体": ["623", "624"],
      "16文化场馆": ["625", "626"],
      "16学校": ["627", "628"],
      "BLOA_P文化场馆14级": ["629"],
      "BLOA_P文化场馆": ["630"],
      "BLOA_P学校14级": ["631"],
      "BLOA_P学校": ["632"],
      "26地名地址_村": ["633", "634", "635", "636", "637", "638"],
      "26地名地址_乡镇": ["639", "640", "641", "642", "643", "644"],
      "26地名地址": ["645", "646", "647", "648"],
      "SUBP站点出入口hong": ["649", "650", "651", "652"],
      "SUBP站点出入口lv": ["653", "654", "655", "656"],
      "SUBP站点出入口": ["657", "658", "659", "660"],
      "SUBP地铁站": ["661", "662", "663", "664", "665", "666", "667", "668", "669", "670", "671", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "684", "685", "686", "687", "688", "689", "690", "691", "692", "693", "694", "695", "696", "697"],
      "SUBP地铁换乘站": ["698", "699", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711", "712", "713", "714", "715", "716", "717", "718", "719", "720", "721", "722", "723", "724", "725", "726", "727", "728", "729", "730", "731", "732", "733", "734"],
      "19政府管理机构": ["735", "736"],
      "19国际办事处": ["737", "738"],
      "19宗教场所": ["739", "740", "741"],
      "19社会组织": ["742", "743"],
      "19公检法机构": ["744", "745", "746"],
      "19政府机关黑点": ["747", "748", "749", "750", "751"],
      "19政府机关14ji": ["752"],
      "19政府机关": ["753"],
      "19政府机关-市政府": ["754"],
      "19政府机关简称14ji": ["755"],
      "19政府机关简称": ["756"],
      "19国家级政府机关14ji": ["757"],
      "19国家级政府机关": ["758"],
      "jiedao": ["759"],
      "23飞机场": ["760"],
      "18公园14ji": ["761", "762"],
      "18公园": ["763", "764"],
      "zhongguodiming_县名": ["765"],
      "tiananmen": ["766"],
      "ARESPL": ["767"],
      "AHYDPL_dao": ["768"],
      "AHYDA池塘": ["769"],
      "AHYDA湖泊": ["770"],
      "AHYDA水库": ["771"],
      "AHYDA": ["772"],
      "Jiehe_PL": ["773"],
      "AHYDL": ["774"],
      "ALRRL": ["775", "776"],
      "AROALN_W": ["777", "778", "779"],
      "ALRDL_C": ["780", "781", "782", "783", "784", "785", "786", "787", "788", "789", "790", "791", "792", "793"],
      "ALRDL_C省道9-10级": ["794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804", "805", "806", "807", "808"],
      "ALRDL_C国道9-10级": ["809", "810", "811", "812", "813", "814", "815", "816", "817", "818", "819", "820", "821", "822", "823"],
      "ALRDL_C高速9-10级": ["824", "825", "826", "827", "828", "829", "830", "831", "832", "833", "834", "835", "836", "837", "838"],
      "ALRDL_C省道6-8级": ["839", "840"],
      "ALRDL_C国道4-8级": ["841", "842", "843", "844"],
      "ALRDL_C高速4-8级": ["845", "846", "847", "848", "849", "850", "851", "852"],
      "nanhaihaitan": ["853"],
      "nanhaihaitan_3级": ["854"],
      "quanqiuhaijie_2": ["855", "856"],
      "quanqiuhaijie": ["857"],
      "riqibiangengxian": ["858"],
      "ABOULN_SJ10": ["859", "860", "861", "862"],
      "ABOULN_SJ_补充": ["863", "864", "865", "866"],
      "ABOULN_SJ_68": ["867", "868", "869", "870"],
      "ABOULN_SJ7_9": ["871"],
      "ABOULN_SJ4_6": ["872"],
      "ABOULN_SJ": ["873", "874", "875", "876"],
      "Jiehe_LN": ["877"],
      "T10ji": ["878", "879"],
      "T9ji": ["880", "881"],
      "T8ji": ["882", "883"],
      "T7ji": ["884", "885"],
      "ABOULN": ["886", "887", "888", "889", "890", "891", "892", "893", "894", "895", "896", "897", "898", "899"],
      "ABOULN_5级": ["900", "901", "902", "903", "904", "905", "906"],
      "ABOULN_1-2级": ["907", "908", "909", "910", "911", "912", "913", "914"],
      "xiang": ["915"],
      "xian_Copy": ["916"],
      "xian": ["917"],
      "shi_Copy": ["918"],
      "shi": ["919"],
      "sheng_Copy": ["920"],
      "sheng": ["921"],
      "色带6级": ["922", "923", "924"],
      "中国国界": ["925", "926", "927", "928"],
      "ALRDL_C省道名称": ["929", "930", "931", "932", "933", "934", "935", "936"],
      "ALRDL_C国道名称": ["937", "938", "939", "940", "941", "942", "943", "944"],
      "ALRDL_C高速名称": ["945", "946", "947", "948", "949", "950", "951", "952"],
      "water_zjpl": ["953", "954"],
      "water_zjpt": ["955"],
      "heilongjiang_c": ["956"],
      "dao_P_8级": ["957"],
      "dao_P": ["958"],
      "ChineseIsland2": ["959"],
      "ChineseIsland1": ["960"],
      "guowaidiming": ["961", "962", "963", "964", "965", "966", "967", "968"],
      "guowaishengming_7ji": ["969"],
      "guowaidiming_7ji": ["970"],
      "guowaishengming_6ji": ["971"],
      "guowaidiming_6ji": ["972"],
      "guowaishengming_5ji": ["973"],
      "guowaidiming_5ji": ["974"],
      "guowaidiming_4ji": ["975"],
      "zhongguodiming县级": ["976", "977", "978", "979"],
      "zhongguodiming地级_左": ["980"],
      "zhongguodiming地级": ["981", "982"],
      "biaozhuxian_5级": ["983"],
      "zhongguodiming省会": ["984", "985"],
      "zhongguodiming_澳门": ["986"],
      "guowaidiming_tinghuoxian": ["987"],
      "country_7ji_w": ["988", "989", "990", "991", "992", "993", "994"],
      "country_6ji_c": ["995", "996", "997", "998", "999", "1000", "1001"],
      "country_5ji_c": ["1002", "1003", "1004", "1005", "1006", "1007", "1008"],
      "country_4ji_c": ["1009", "1010", "1011", "1012", "1013"],
      "country_3ji_c": ["1014", "1015", "1016", "1017", "1018"],
      "country_2ji_c": ["1019", "1020", "1021", "1022", "1023"],
      "Sea": ["1024", "1025", "1026", "1027"],
      "Sea_2级": ["1028", "1029", "1030"],
      "shengji2_point_5ji_w": ["1031"],
      "beijing_4ji": ["1032"],
      "zhongguodiming北京": ["1033"],
      "xiang_zhuji": ["1034"],
      "xian_zhuji": ["1035"],
      "shi_zhuji": ["1036"],
      "sheng_zhuji": ["1037"]
    }
  },
  "type": "tiles"
}
