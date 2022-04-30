interface Type {
  title: string;
  address: string;
  lat: string;
  lng: string;
}
interface Register {
  name: string;
  email: string;
  password: any;
  password_confirmation: any;
}
export default class Validation {
  static latitudeValidation(lat: string) {
    return /^\d+[.]+\d+$/.test(lat);
  }
  static longitudeValidation(lng: string) {
    return /^-\d+[.]+\d+$/.test(lng);
  }
  static validateAddDealerFormFields({ title, address, lat, lng }: Type) {
    if (
      title.length >= 5 &&
      address.length >= 5 &&
      lat.length >= 5 &&
      lng.length >= 5
    ) {
      if (Validation.latitudeValidation(lat)) {
        if (Validation.longitudeValidation(lng)) {
          return { title, address, lat, lng };
        } else {
          return 'Field longidute is not a valid!';
        }
      } else {
        return 'Field latitude is not a valid!';
      }
    } else {
      return 'All fields must be longer than 5 characters!';
    }
  }
  static registerValidation({
    name,
    email,
    password,
    password_confirmation,
  }: Register) {
    if (name.length >= 3) {
      if (password == password_confirmation) {
        return { name, email, password, password_confirmation };
      } else {
        return 'Fields password and confirmPassword is not a same!';
      }
    } else {
      return 'Field name must be longer than 3 characters!';
    }
  }
}
