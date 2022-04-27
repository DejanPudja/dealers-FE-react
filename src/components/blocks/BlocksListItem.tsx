import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Service from '../../domain/dealersCollection/Service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  dealers: any;
}
export default function BlocksListItems({ dealers }: Props) {
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

  const deleteDealer = async () => {
    await Service.deleteDealer(dealers.id)
      .then((response) => {
        console.log(response.data.message);

        successMessage(`${response.data.message} ` + dealers.title);
      })
      .catch((err) => {
        errorMessage(err.response.data.message);
      });
  };
  const editDealer = () => {};
  return (
    <tr>
      <td>{dealers.id}</td>
      <td>{dealers.title}</td>
      <td>{dealers.address}</td>
      <td>{dealers.latitude}</td>
      <td>{dealers.longitude}</td>
      <td>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon-delete"
          onClick={deleteDealer}
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="icon-edit"
          onClick={editDealer}
        />
      </td>
    </tr>
  );
}
