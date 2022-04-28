import ApiClient from '../../utils/http/ApiClient';

export default class Gateway {
  async getAll(page: number) {
    let api = await ApiClient.get(`/api/dealers?page=${page}`);
    return api.data.data;
  }
  async deleteDealer(id: number) {
    return await ApiClient.delete(`/api/dealer/delete/${id}`);
  }
  addDealer(data: any) {
    return ApiClient.post(`/api/dealer/add`, data);
  }
}
