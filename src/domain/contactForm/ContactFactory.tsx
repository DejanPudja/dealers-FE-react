import Entity from './ContactEntity';

type DealersType = {
  email: number;
  message: string;
};

export default class Factory {
  makeFromForm(data: DealersType) {
    console.log(data);

    return data;
  }
}
