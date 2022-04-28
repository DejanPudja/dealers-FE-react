import ApiClient from '../../utils/http/ApiClient';

export default class Gateway {
  sendEmail(data: any) {
    return ApiClient.post(`/api/mail`, data);
  }
}
