import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default class ToastNotify {
  static errorMessage = (message: any) => {
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };
  static successMessage = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });
  };
}
