import Factory from './DealersFactory';
import Gateway from './DealersGateway';
import Repository from './DealersRepository';

export default class Service {
  static getAll(page: number) {
    return new Repository(new Gateway(), new Factory()).getAll(page);
  }
  static deleteDealer(id: number) {
    return new Gateway().deleteDealer(id);
  }
  static addDealer(data: any) {
    return new Gateway().addDealer(data);
  }
}
