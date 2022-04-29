import ApiClient from '../../utils/http/ApiClient';

export default class UserGateway {
  async register(data: any) {
    return await ApiClient.post(`/api/register`, data);
  }
}
