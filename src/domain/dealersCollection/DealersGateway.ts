import ApiClient from '../../utils/http/ApiClient';

export default class Gateway {
  async getAll(page: number) {
    let api = await ApiClient.get(`/api/dealers?page=${page}`);
    return api.data.data;
  }
  async deleteDealer(id: number) {
    return await ApiClient.delete(`/api/dealer/delete/${id}`);
  }
  async addDealer(data: any) {
    return await ApiClient.post(`/api/dealer/add`, data);
  }
  async getDealerById(id: any) {
    let dealer = await ApiClient.get(`/api/dealer/show/${id}`);
    return dealer.data;
  }
  async editDealer(data: any) {
    return await ApiClient.put(`/api/dealer/update`, data);
  }
}
