import UserService from '../../../service/userService';
import * as TYPES from './mutation-type';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import {
  SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS
} from 'constants';
// 状态集中声明
const state = {
  username: '',
  password: '',
  userCount: 0,
  userList: [],
  userKeyword: null,
  userCurrPage: 1,
  userPageSize: 5,
  isLogin: true, // 是否可以登录
  noAuthMess: '', // 无权限时信息
  layerId: 1,
  usedIds: [],
  usedId: '',
  addLayers: []
};


// 获取状态
const getters = {
  [TYPES.username]: state => {
    return state.username;
  },
  [TYPES.userList]: state => {
    return state.userList;
  },
  [TYPES.userCount]: state => {
    return state.userCount;
  },
  [TYPES.userCurrPage]: state => {
    return state.userCurrPage;
  },
  [TYPES.userPageSize]: state => {
    return state.userPageSize;
  },
  [TYPES.userKeyword]: state => {
    return state.userKeyword;
  },
  [TYPES.isLogin]: state => {
    return state.isLogin;
  },
  [TYPES.noAuthMess]: state => {
    return state.noAuthMess;
  },
  [TYPES.layerId]: state => {
    return state.layerId;
  },
  [TYPES.usedIds]: state => {
    return state.usedIds;
  },
  [TYPES.usedId]: state => {
    return state.usedId;
  },
  [TYPES.addLayers]: state => {
    return state.addLayers;
  }
};

// 同步的操作状态
const mutations = {
  [TYPES.SET_USERNAME](state, username) {
    state.username = username;
  },
  [TYPES.SET_PASSWORD](state, password) {
    state.password = password;
  },

  [TYPES.SET_USERLIST](state, userList) {
    state.userList = userList;
  },
  [TYPES.SET_USERCOUNT](state, userCount) {
    state.userCount = userCount;
  },
  [TYPES.SET_USERKEYWORD](state, userKeyword) {
    state.userKeyword = userKeyword;
  },
  [TYPES.SET_USERCURRPAGE](state, userCurrPage) {
    state.userCurrPage = userCurrPage;
  },
  [TYPES.SET_USERPAGESIZE](state, userPageSize) {
    state.userPageSize = userPageSize;
  },
  [TYPES.SET_ISLOGIN](state, isLogin) {
    state.isLogin = isLogin;
  },
  [TYPES.SET_NOAUTHMESS](state, noAuthMess) {
    state.noAuthMess = noAuthMess;
  },
  [TYPES.SET_LAYERID](state, layerId) {
    state.layerId = layerId;
  },
  [TYPES.SET_USEDIDS](state, usedIds) {
    state.usedIds = usedIds;
  },
  [TYPES.SET_USEDID](state, usedId) {
    state.usedId = usedId;
  },
  [TYPES.SET_ADDLAYERS](state, addLayers) {
    state.usedId = addLayers;
  }
};

// 异步的操作状态
const actions = {
  login(context, {
    data,
    callBack
  }) {
    UserService.login(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  addUser(context, {
    data,
    callBack
  }) {
    UserService.addUser(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '编辑用户失败。'
        }, {
          root: true
        });
      }
    });
  },
  editUser(context, {
    data,
    callBack
  }) {
    UserService.editUser(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '编辑用户失败。'
        }, {
          root: true
        });
      }
    });
  },
  getlayers(context, {
    data,
    callBack
  }) {
    UserService.getlayers(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  getlayersId(context, {
    data,
    callBack
  }) {
    UserService.getlayersId(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  getlayersState(context, {
    data,
    callBack
  }) {
    UserService.getlayersState(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  editLayer(context, {
    data,
    callBack
  }) {
    UserService.editLayer(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '编辑图层失败。'
        }, {
          root: true
        });
      }
    });
  },
  editLayerName(context, {
    data,
    callBack
  }) {
    UserService.editLayerName(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '编辑图层失败。'
        }, {
          root: true
        });
      }
    });
  },
  dellayer(context, {
    data,
    callBack
  }) {
    UserService.dellayer(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '删除图层失败。'
        }, {
          root: true
        });
      }
    });
  },
  addlayers(context, {
    data,
    callBack
  }) {
    UserService.addlayers(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '添加失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  addfields(context, {
    data,
    callBack
  }) {
    UserService.addfields(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '添加失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  getfields(context, {
    data,
    callBack
  }) {
    UserService.getfields(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  delfields(context, {
    data,
    callBack
  }) {
    UserService.delfields(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  editfields(context, {
    data,
    callBack
  }) {
    UserService.editfields(data).then(res => {
      if (res) {
        callBack(res);
      } else {
        iView.Notice.error({
          title: '登录失败',
          desc: res.resultStatueCode
        });
      }
    });
  },
  updatePassword(context, {
    data,
    callBack
  }) {
    UserService.updatePassword(data).then(res => {
      if (res.isSuccess) {
        context.commit('SET_MESSAGE', {
          type: 'success',
          message: '修改密码成功。'
        }, {
          root: true
        });
        context.dispatch('getUserList');
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '修改密码失败。'
        }, {
          root: true
        });
      }
    });
  },
  deleteUser(context, name) {
    UserService.deleteUser([name]).then(res => {
      if (res) {
        context.commit('SET_MESSAGE', {
          type: 'success',
          message: '删除用户成功。'
        }, {
          root: true
        });
        context.dispatch('getUserList');
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '删除用户失败。'
        }, {
          root: true
        });
      }
    });
  },
  uploadIMG(context, {
    data,
    callBack
  }) {
    UserService.uploadIMG(data).then(res => {
      if (res) {
        callBack(res);
      } else {

      }
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
