import { NavLink, useNavigate } from 'react-router-dom';
import UserService from '../../domain/user/UserService';
import Authentication from '../../class/Authentication';

export default function MainHeader() {
  const navigate = useNavigate();
  let auth = Authentication.userAuth();

  const logout = () => {
    UserService.logout().then(() => {
      localStorage.removeItem('token');
      navigate('/login');
    });
  };

  return (
    <nav>
      <ul className="nav-links">
        {auth ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add Dealer</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </ul>
    </nav>
  );
}
