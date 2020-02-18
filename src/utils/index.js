// 存取本地存储的内容
const storageDic = {
  styleId: "styleId",
  token: "access_token",
  symbolId: "symbolId"
};
export const storage = {
  set(key, value) {
    sessionStorage.setItem(key, value);
  },
  get(key) {
    return sessionStorage.getItem(key);
  },
  clear() {
    sessionStorage.clear();
  }, // token
  setToken(v) {
    this.set(storageDic.token, v);
  },
  getToken() {
    return this.get(storageDic.token);
  }

};
// 全局变量
export const global = {
  baseURL: "", // 基本url
  serviceURL: "", // 服务url
  flagURL: "", // 国旗url
  photoURL: "",
  // 境外踏勘图片
  countryURL: "",
  mapUrls: CONFIG.mapurls,
  mapHomePosition: {
    center: [19.58750, 36.58871],
    zoom: 2
  }

};

export const commonUtil = {
  test() {
    console.log(1)
  },
  isArray(obj) {
    if (!obj) {
      return Array.isArray;
    } else {
      return (Object.prototype.toString.call(obj) === "[object Array]");
    }
  },
  norm(lng) {
    let temp = lng % 360;
    let res = 0;
    if (temp > 0) {
      res = temp - 360;
    } else res = temp + 360;
    return res;
  },
  cloneData(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  // 计算分页的条数
  computePageRow() {
    // var visibleHeight = window.screen.height - 150;
    var visibleHeight = (document.documentElement.scrollHeight > document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
    var temp = visibleHeight - 260;
    var row = Math.floor((temp - 42) / 42);
    var tableHeight = row * 42 + 42;
    var obj = {
      table_height: tableHeight,
      row: row
    };
    return obj;
  },
  // 拼接查询字符串 - xujm
  createQuerystr(option) {
    var queryStrArr = [];
    for (var key in option) {
      if (typeof option[key] === "object") {
        var k = JSON.stringify(option[key]);
        var str = `${key}=${k}`;
        queryStrArr.push(str);
      } else {
        var objStr = `${key}=${option[key]}`;
        queryStrArr.push(objStr);
      }
    }
    var queryStr = queryStrArr.join("&");
    return queryStr;
  },
  // 时间格式转换
  formatUTC(utc, format) {
    var date = new Date(utc);
    var f = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      "s+": date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      "S+": date.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in f) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ?
          f[k] : ("00" + f[k]).substr(("" + f[k]).length));
      }
    }
    return format;
  },
  // 是否为数字
  isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; // 非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  // 压缩格式
  compressIMG(img, w, h) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    // 绘制特定尺寸的图片
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var base64 = canvas.toDataURL("image/jpeg", 1); // 压缩语句
    return base64;
  }
};
export default {
  storage,
  global,
  commonUtil
};
