import { Navigate, Outlet } from 'react-router-dom';
import Authentication from '../class/Authentication';

export default function ProtectedRoutes() {
  let auth = Authentication.userAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
