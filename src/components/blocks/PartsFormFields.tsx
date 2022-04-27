import React, { FormEvent, useEffect, useState } from 'react';
import Service from '../../domain/dealersCollection/Service';
import PartsInputField from '../parts/PartsInputField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export default function PartsFromFields() {
  // const arrayCaptions = ['Title', 'Address', 'Latitude', 'Longitude'];
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitude] = useState('');

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    await Service.addDealer({ title, address, lat, lng })
      .then(() => {
        toast.success('Success add dealer', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      })
      .catch((err) => {
        toast.error('Error', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      });
    setTitle('');
    setAddress('');
    setLatitude('');
    setLongitude('');
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
