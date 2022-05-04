import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToastNotify from '../../../class/ToastNotify';
import Validation from '../../../class/Validation';
import Service from '../../../domain/dealersCollection/DealersService';
import PartsInputFields from '../../parts/PartsInputFields';

export default function PartsEditDealerForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');

  // if (/^[1-9]*/.test(params)
  const setStates = (response: any) => {
    setId(response.id);
    setTitle(response.title);
    setAddress(response.address);
    setLatitude(response.lat);
    setLongitude(response.lng);
  };
  const getDealer = () => {
    Service.getDealerById(params.id)
      .then((response) => {
        if (response.message) {
          navigate('*');
        } else {
          setStates(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDealer();
  }, []);

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.validateAddDealerFormFields({
      title,
      address,
      lat,
      lng,
    });
    const data = Object.assign({ id: id }, validateData);

    if (typeof validateData !== 'object') {
      ToastNotify.errorMessage(validateData);
    } else {
      await Service.editDealer(data)
        .then((response) => {
          ToastNotify.successMessage(response.data.message);
          navigate(-1);
        })
        .catch((err) => {
          ToastNotify.errorMessage(err.response.data.message);
        });
    }
  };
  return (
    <div>
      <form>
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
            <input type="submit" value="Update" onClick={onSubmitHandler} />
          </li>
        </ul>
      </form>
    </div>
  );
}
