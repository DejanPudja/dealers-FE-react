import ApiClient from '../../utils/http/ApiClient';

export default class UserGateway {
  async register(data: any) {
    return await ApiClient.post(`/api/register`, data);
  }
  async login(data: any) {
    return await ApiClient.post(`/api/login`, data);
  }
  async logout() {
    return await ApiClient.post(`/api/logout`);
  }
}
