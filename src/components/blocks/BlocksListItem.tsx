import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Service from '../../domain/dealersCollection/Service';

interface Props {
  dealers: any;
}
export default function BlocksListItems({ dealers }: Props) {
  const deleteDealer = () => {
    Service.deleteDealer(dealers.id);
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
