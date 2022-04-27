import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Service from '../../domain/dealersCollection/DealersService';
import ToastNotify from '../../class/ToastNotify';

interface Props {
  dealers: any;
}
export default function BlocksListItems({ dealers }: Props) {
  const deleteDealer = async () => {
    try {
      await Service.deleteDealer(dealers.id).then((response) => {
        console.log(response.data.message);
        ToastNotify.successMessage(`${response.data.message} ` + dealers.title);
      });
    } catch (err) {
      ToastNotify.errorMessage(err);
    }
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
