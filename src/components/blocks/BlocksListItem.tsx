import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Service from '../../domain/dealersCollection/DealersService';
import ToastNotify from '../../class/ToastNotify';
import { useNavigate } from 'react-router-dom';

interface Props {
  dealers: any;
  fetchDealers: any;
  currentPage: number;
}
export default function BlocksListItem({
  dealers,
  fetchDealers,
  currentPage,
}: Props) {
  const navigate = useNavigate();

  const deleteDealer = async () => {
    await Service.deleteDealer(dealers.id)
      .then((response) => {
        fetchDealers(currentPage);
        ToastNotify.successMessage(`${response.data.message} ` + dealers.title);
      })
      .catch((err: any) => {
        ToastNotify.errorMessage(err.response.data.message);
      });
  };

  const editDealer = () => {
    navigate(`/edit/${dealers.id}`);
  };
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
