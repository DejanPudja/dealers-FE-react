import Gateway from './Gateway';
import Factory from './Factory';

export default class Repository {
  _gateway: Gateway;
  _factory: Factory;

  constructor(gateway: Gateway, factory: Factory) {
    this._gateway = gateway;
    this._factory = factory;
  }
  async getAll(page: number) {
    return this._factory.reconstitute(await this._gateway.getAll(page));
  }
  async addDealer(data: any) {
    return this._factory.makeFromForm(await this._gateway.addDealer(data));
  }
}
