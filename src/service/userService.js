import {
  sysClient
} from './hprose-client'; // 'src/util/hprose-client'  /////'./util/clients/hprose-client'
import axios from 'axios';
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
}
export default new UserService();
