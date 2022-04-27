import React, { FormEvent, useEffect, useState } from 'react';
import Service from '../../domain/dealersCollection/Service';
import Validation from '../../class/Validation';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default function PartsFrom() {
  // const arrayCaptions = ['Title', 'Address', 'Latitude', 'Longitude'];
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');

  const errorMessage = (message: any) => {
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });
  };
  const successMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let validateData = Validation.validationFields({
      title,
      address,
      lat,
      lng,
    });

    if (typeof validateData !== 'object') {
      errorMessage(validateData);
    } else {
      // try {
      const response = await Service.addDealer(validateData);
      console.log(response);
      // } catch (err) {
      //   console.log(err);
      // }

      // successMessage('Success add dealer');
      // setTitle('');
      // setAddress('');
      // setLatitude('');
      // setLongitude('');
      // navigate('/');

      // .catch((err) => {
      //   console.log(err);

      //   // errorMessage('Error sending request');
      // });
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
