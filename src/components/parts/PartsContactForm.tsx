import { FormEvent, useState } from 'react';
import ContactService from '../../domain/contactForm/ContactService';
import ToastNotify from '../../class/ToastNotify';
import PartsSpinner from '../parts/PartsSpinner';

export default function PartsContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let value = { email, message };

    if (email !== '' && message !== '') {
      try {
        setLoading(true);
        await ContactService.sendEmail(value).then((response) => {
          ToastNotify.successMessage(response.data.message);
          setEmail('');
          setMessage('');
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
        ToastNotify.errorMessage('Error sending request');
      }
    } else {
      ToastNotify.errorMessage('All fields must be fill');
    }
  };

  return (
    <form>
      {!isLoading ? (
        <ul className="form-style-1">
          <li>
            <label>Email</label>
            <input
              type="email"
              name="title"
              className="field-long"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </li>
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
        <PartsSpinner className={'spinner-form'} />
      )}
    </form>
  );
}
