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
  noAuthMess: '' // 无权限时信息
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
  }
};

// 异步的操作状态
const actions = {
  testAuthory(context) {
    UserService.testAuthory().then(res => {
      if (!res.data.IsSuccess) {
        iView.Notice.info({
          title: '系统通知',
          desc: res.data.Message,
          duration: 0
        });
        context.commit(TYPES.SET_ISLOGIN, false);
        context.commit(TYPES.SET_NOAUTHMESS, res.data.Message);
      } else {
        context.commit(TYPES.SET_ISLOGIN, true);
        context.commit(TYPES.SET_NOAUTHMESS, '');
      }
    }, error => {
      // 异常监听
      // return error
      console.log(error);
    });
  },
  getUserList(context) {
    UserService.getUserList([state.userKeyword, state.userCurrPage, state.userPageSize]).then(res => {
      if (res == null) {
        context.commit('SET_MESSAGE', {
          type: 'info',
          message: '用户为空。'
        }, {
          root: true
        });
        return;
      }
      var list = JSON.parse(res.listJson);
      context.commit(TYPES.SET_USERLIST, list);
      context.commit(TYPES.SET_USERCOUNT, res.totalCount);
    }, error => {
      // 异常监听
      // return error
      console.log(error);
    });
  },
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
  createUser(context, {
    data,
    callBack
  }) {
    UserService.createUser(data).then(res => {
      if (res.isSuccess) {
        context.commit('SET_MESSAGE', {
          type: 'success',
          message: '新建用户成功。'
        }, {
          root: true
        });
        context.dispatch('getUserList');
        callBack(res);
      } else {
        context.commit('SET_MESSAGE', {
          type: 'error',
          message: '新建用户失败。'
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
      if (res.isSuccess) {
        context.commit('SET_MESSAGE', {
          type: 'success',
          message: '编辑用户成功。'
        }, {
          root: true
        });
        context.dispatch('getUserList');
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
  pageUserChange(context, num) {
    context.commit(TYPES.SET_USERCURRPAGE, num);
    return context.dispatch('getUserList');
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
