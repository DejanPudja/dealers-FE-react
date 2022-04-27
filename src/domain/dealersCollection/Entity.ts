export default class Entity {
  private _id: number;
  private _title: string;
  private _address: string;
  private _latitude: string;
  private _longitude: string;

  get id() {
    return this._id;
  }
  setId(value: number) {
    this._id = value;
    return this;
  }
  get title() {
    return this._title;
  }
  setTitle(value: string) {
    this._title = value;
    return this;
  }
  get address() {
    return this._address;
  }
  setAddress(value: string) {
    this._address = value;
    return this;
  }
  get latitude() {
    return this._latitude;
  }
  setLatitude(value: string) {
    this._latitude = value;
    return this;
  }
  get longitude() {
    return this._longitude;
  }
  setLongitude(value: string) {
    this._longitude = value;
    return this;
  }
}
