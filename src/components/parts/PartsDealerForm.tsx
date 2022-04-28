import { FormEvent, useState } from 'react';
import Service from '../../domain/dealersCollection/DealersService';
import Validation from '../../class/Validation';
import { useNavigate } from 'react-router-dom';
import ToastNotify from '../../class/ToastNotify';

export default function PartsDealerForm() {
  // const arrayCaptions = ['Title', 'Address', 'Latitude', 'Longitude'];
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.validationFieldsAddDealer({
      title,
      address,
      lat,
      lng,
    });

    if (typeof validateData !== 'object') {
      ToastNotify.errorMessage(validateData);
    } else {
      await Service.addDealer(validateData)
        .then((response) => {
          ToastNotify.successMessage(response.data.message);
          setTitle('');
          setAddress('');
          setLatitude('');
          setLongitude('');
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          ToastNotify.errorMessage('Error sending request');
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
            <input type="submit" value="Submit" onClick={onSubmitHandler} />
          </li>
          {/* {arrayCaptions.map((Caption, index) => {
            return <PartsInputField captions={Caption} key={index} />;
          })}
          <li>
            <input type="submit" value="Submit" onClick={onSubmitHandler} />
          </li> */}
        </ul>
      </form>
    </div>
  );
}
