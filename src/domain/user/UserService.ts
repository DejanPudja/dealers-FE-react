import UserGateway from '../user/UserGateway';

export default class UserService {
  static register(data: any) {
    return new UserGateway().register(data);
  }
  static login(data: any) {
    return new UserGateway().login(data);
  }
}
