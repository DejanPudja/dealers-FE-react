import axios from 'axios';
import Authentication from '../../class/Authentication';

export default axios.create({
  baseURL: process.env.REACT_APP_MY_API_CLIENT,
  headers: {
    Authorization: 'Bearer ' + Authentication.getToken(),
    Accept: 'application/json',
  },
});
