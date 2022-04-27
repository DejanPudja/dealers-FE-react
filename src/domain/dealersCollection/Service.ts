import Factory from './Factory';
import Gateway from './Gateway';
import Repository from './Repository';

export default class Service {
  static getAll(page: number) {
    return new Repository(new Gateway(), new Factory()).getAll(page);
  }
  static deleteDealer(id: number) {
    return new Gateway().deleteDealer(id);
  }
  static addDealer(data: any) {
    return new Repository(new Gateway(), new Factory()).addDealer(data);
  }
}
