import {
  sysClient
} from './hprose-client'; // 'src/util/hprose-client'  /////'./util/clients/hprose-client'
import axios from 'axios';
import qs from 'qs';
class UserService {
  async login(data) {
    return axios({
      url: CONFIG.baseurl + "login",
      method: 'get',
      params: data
    });
  }
  async editUser(data) {
    return axios({
      url: CONFIG.baseurl + "login",
      method: 'patch',
      params: data
    });
  }
  async getlayers(data) {
    return axios({
      url: CONFIG.baseurl + "layer",
      method: 'get',
      params: data
    });
  }
  async getlayersId(data) {
    return axios({
      url: CONFIG.baseurl + "layerId",
      method: 'get',
      params: data
    });
  }
  async getlayersState(data) {
    return axios({
      url: CONFIG.baseurl + "layerState",
      method: 'get',
      params: data
    });
  }
  async editLayer(data) {
    return axios({
      url: CONFIG.baseurl + "layer",
      method: 'patch',
      data: data
    });
  }
  async editLayerName(data) {
    return axios({
      url: CONFIG.baseurl + "updateName",
      method: 'patch',
      params: data
    });
  }
  async dellayer(data) {
    return axios({
      url: CONFIG.baseurl + "layer",
      method: 'delete',
      params: data
    });
  }
  async addlayers(data) {
    return axios({
      url: CONFIG.baseurl + "layer",
      method: 'post',
      params: data
    });
  }
  async getfields(data) {
    return axios({
      url: CONFIG.baseurl + "field",
      method: 'get',
      params: data
    });
  }
  async addfields(data) {
    return axios({
      url: CONFIG.baseurl + "field",
      method: 'post',
      params: data
    });
  }
  async delfields(data) {
    return axios({
      url: CONFIG.baseurl + "field",
      method: 'delete',
      params: data
    });
  }
  async editfields(data) {
    return axios({
      url: CONFIG.baseurl + "field",
      method: 'patch',
      params: data
    });
  }
  async uploadIMG(data) {
    return axios({
      url: CONFIG.baseurl + "upload",
      method: 'post',
      params: data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
    });
  }
}
export default new UserService();
