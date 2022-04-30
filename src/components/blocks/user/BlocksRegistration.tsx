import { FormEvent, useState } from 'react';
import Spinner from '../../../class/Spinner';
import ToastNotify from '../../../class/ToastNotify';
import Validation from '../../../class/Validation';
import UserService from '../../../domain/user/UserService';
import PartsInputFields from '../../parts/PartsInputFields';

export default function BlocksRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.registerValidation({
      name,
      email,
      password,
      password_confirmation,
    });

    if (typeof validateData !== 'object') {
      ToastNotify.errorMessage(validateData);
    } else {
      setLoading(true);
      UserService.register(validateData)
        .then(() => {
          ToastNotify.successMessage('Success registration');
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      {!isLoading ? (
        <form>
          <ul className="form-style-1">
            <PartsInputFields
              label={'Name'}
              type={'text'}
              value={name}
              className={'field-long'}
              onChange={(nameValue: string) => {
                setName(nameValue);
              }}
            />
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
            <PartsInputFields
              label={'Confirm Password'}
              type={'password'}
              value={password_confirmation}
              className={'field-long'}
              onChange={(confirmPasswordValue: string) => {
                setConfirmPassword(confirmPasswordValue);
              }}
            />
            <li>
              <input type="submit" value="Create" onClick={onSubmitHandler} />
            </li>
          </ul>
        </form>
      ) : (
        Spinner.formSpinner()
      )}
    </div>
  );
}
