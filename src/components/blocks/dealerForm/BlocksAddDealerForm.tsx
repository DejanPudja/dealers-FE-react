import { FormEvent, useState } from 'react';
import Spinner from '../../../class/Spinner';
import ToastNotify from '../../../class/ToastNotify';
import Validation from '../../../class/Validation';
import Service from '../../../domain/dealersCollection/DealersService';
import PartsInputFields from '../../parts/PartsInputFields';

export default function BlocksAddDealerForm() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');
  const [isLoading, setLoading] = useState(false);

  const restartStates = () => {
    setTitle('');
    setAddress('');
    setLatitude('');
    setLongitude('');
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.validateAddDealerFormFields({
      title,
      address,
      lat,
      lng,
    });

    if (typeof validateData !== 'object') {
      ToastNotify.errorMessage(validateData);
    } else {
      try {
        setLoading(true);
        Service.addDealer(validateData).then((response) => {
          ToastNotify.successMessage(response.data.message);
          restartStates();
          setLoading(false);
        });
      } catch (err: any) {
        ToastNotify.errorMessage(err.response.data.message);
      }
    }
  };
  return (
    <div>
      <form>
        {!isLoading ? (
          <ul className="form-style-1">
            <PartsInputFields
              label={'Title'}
              type={'text'}
              value={title}
              className={'field-long'}
              onChange={(titleValue: string) => {
                setTitle(titleValue);
              }}
            />
            <PartsInputFields
              label={'Address'}
              type={'text'}
              value={address}
              className={'field-long'}
              onChange={(addressValue: string) => {
                setAddress(addressValue);
              }}
            />
            <PartsInputFields
              label={'Latitude'}
              type={'text'}
              value={lat}
              className={'field-long'}
              onChange={(latValue: string) => {
                setLatitude(latValue);
              }}
            />
            <PartsInputFields
              label={'Longitude'}
              type={'text'}
              value={lng}
              className={'field-long'}
              onChange={(lngValue: string) => {
                setLongitude(lngValue);
              }}
            />
            <li>
              <input type="submit" value="Submit" onClick={onSubmitHandler} />
            </li>
          </ul>
        ) : (
          Spinner.formSpinner()
        )}
      </form>
    </div>
  );
}
