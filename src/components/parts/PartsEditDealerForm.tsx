import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToastNotify from '../../class/ToastNotify';
import Validation from '../../class/Validation';
import Service from '../../domain/dealersCollection/DealersService';

export default function PartsEditDealerForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');

  const getDealer = async () => {
    let dealer = await Service.getDealerById(params.id);
    setId(dealer.id);
    setTitle(dealer.title);
    setAddress(dealer.address);
    setLatitude(dealer.lat);
    setLongitude(dealer.lng);
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
          <li>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              className="field-long"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Adress</label>
            <input
              type="text"
              name="address"
              value={address}
              className="field-long"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Latitude</label>
            <input
              type="text"
              name="latitude"
              value={lat}
              className="field-long"
              onChange={(event) => {
                setLatitude(event.target.value);
              }}
            />
          </li>
          <li>
            <label>Longitude</label>
            <input
              type="text"
              name="longitude"
              value={lng}
              className="field-long"
              onChange={(event) => {
                setLongitude(event.target.value);
              }}
            />
          </li>
          <li>
            <input type="submit" value="Update" onClick={onSubmitHandler} />
          </li>
        </ul>
      </form>
    </div>
  );
}
