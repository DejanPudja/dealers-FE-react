import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../../class/Authentication';
import ToastNotify from '../../../class/ToastNotify';
import UserService from '../../../domain/user/UserService';
import PartsInputFields from '../../parts/PartsInputFields';

export default function BlocksLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginHandler = (event: FormEvent) => {
    event.preventDefault();

    let loginCredentials = { email, password };
    UserService.login(loginCredentials)
      .then((response) => {
        ToastNotify.successMessage('Success login');
        Authentication.setToken(response.data.token);
        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch((err) => {
        ToastNotify.errorMessage(err.response.data.message);
      });
  };
  return (
    <div>
      <form>
        <ul className="form-style-1">
          <PartsInputFields
            label={'Email'}
            type={'email'}
            value={email}
            className={'field-long'}
            onChange={(emailValue: string) => {
              setEmail(emailValue);
            }}
          />
          <PartsInputFields
            label={'Password'}
            type={'password'}
            value={password}
            className={'field-long'}
            onChange={(passwordValue: string) => {
              setPassword(passwordValue);
            }}
          />
          <li>
            <input type="submit" value="Login" onClick={onLoginHandler} />
          </li>
        </ul>
      </form>
    </div>
  );
}
