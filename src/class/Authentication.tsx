export default class Authentication {
  static userAuth() {
    const user = localStorage.getItem('token');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}
