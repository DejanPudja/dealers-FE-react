import Gateway from './ContactGateway';

export default class Service {
  static sendEmail(data: any) {
    return new Gateway().sendEmail(data);
  }
}
