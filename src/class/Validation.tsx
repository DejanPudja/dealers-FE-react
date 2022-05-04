interface FormDealers {
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
  static emailValidation(email: string) {
    return /^[a-zA-Z0-9._-]+@[a-zA.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }
  static validateAddDealerFormFields({
    title,
    address,
    lat,
    lng,
  }: FormDealers) {
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
    if (name && email && password) {
      if (name.charAt(0) === name.charAt(0).toUpperCase() && name.length >= 3) {
        if (Validation.emailValidation(email)) {
          if (password == password_confirmation) {
            return { name, email, password, password_confirmation };
          } else {
            return 'Fields password and confirmPassword is not a same!';
          }
        } else {
          return 'Email address is not a valid';
        }
      } else {
        return 'Field name must be longer than 3 characters and first letter must be uppercase!';
      }
    } else {
      return 'All fields must be fill!';
    }
  }
}

