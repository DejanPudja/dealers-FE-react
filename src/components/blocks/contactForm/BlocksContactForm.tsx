import { FormEvent, useState } from 'react';
import ToastNotify from '../../../class/ToastNotify';
import Spinner from '../../../class/Spinner';
import ContactService from '../../../domain/contactForm/ContactService';
import PartsInputFields from '../../parts/PartsInputFields';

export default function BlocksContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    let value = { email, message };

    if (email !== '' && message !== '') {
      setLoading(true);
      ContactService.sendEmail(value)
        .then((response) => {
          ToastNotify.successMessage(response.data.message);
          setEmail('');
          setMessage('');
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          ToastNotify.errorMessage('Error sending request');
        });
    } else {
      ToastNotify.errorMessage('All fields must be fill');
    }
  };

  return (
    <form>
      {!isLoading ? (
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
          <li>
            <label>Message</label>
            <textarea
              name="message"
              className="field-long"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </li>
          <li>
            <input type="submit" value="Submit" onClick={onSubmitHandler} />
          </li>
        </ul>
      ) : (
        Spinner.formSpinner()
      )}
    </form>
  );
}
