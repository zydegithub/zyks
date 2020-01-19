import {
  sysClient
} from './hprose-client'; // 'src/util/hprose-client'  /////'./util/clients/hprose-client'
import axios from 'axios';
class UserService {
  testAuthory() {
    return axios({
      url: CONFIG.AUTHORYURL,
      method: 'get'
    });
  }
  async login(data) {
    return axios({
      url: CONFIG.baseurl+"login",
      method: 'get',
      params: data
    });
  }
  async editUser(data) {
    return axios({
      url: CONFIG.baseurl+"login",
      method: 'patch',
      params: data
    });
  }
  async getlayers(data) {
    return axios({
      url: CONFIG.baseurl+"layer",
      method: 'get',
      params: data
    });
  }
  async getUserList(data) {
    let result = await sysClient.getData('GetUserListAsync', data, true);

    if (!result) return;

    return result;
  }

  async createUser(data) {
    let result = await sysClient.getData('CreateUser', data, true);

    if (!result) return;

    return result;
  }

  async deleteUser(data) {
    let result = await sysClient.getData('DeleteUser', data, true);

    if (!result) return;

    return result;
  }
  async updatePassword(data) {
    let result = await sysClient.getData('updatePassword', data, true);

    if (!result) return;

    return result;
  }
}
export default new UserService();
