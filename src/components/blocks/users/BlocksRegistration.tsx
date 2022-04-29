import React, { FormEvent, useState } from 'react';
import ToastNotify from '../../../class/ToastNotify';
import Validation from '../../../class/Validation';
import UserService from '../../../domain/user/UserService';

export default function BlocksRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.userValidation({
      name,
      email,
      password,
      password_confirmation,
    });

    if (typeof validateData !== 'object') {
      ToastNotify.errorMessage(validateData);
    } else {
      UserService.register(validateData)
        .then(() => {
          ToastNotify.successMessage('Success registration');
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form>
        <ul className="form-style-1">
          <li>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="field-long"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="field-long"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="field-long"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              className="field-long"
              value={password_confirmation}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </li>
          <li>
            <input type="submit" value="Create" onClick={onSubmitHandler} />
          </li>
        </ul>
      </form>
    </div>
  );
}
