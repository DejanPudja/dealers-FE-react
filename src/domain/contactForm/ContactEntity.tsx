export default class Entity {
  private _email: string;
  private _message: string;

  get email() {
    return this._email;
  }
  setEmail(value: string) {
    this._email = value;
    return this;
  }
  get message() {
    return this._message;
  }
  setMessage(value: string) {
    this._message = value;
    return this;
  }
}
