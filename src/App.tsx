import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import BlocksLogin from './components/blocks/user/BlocksLogin';
import BlocksRegistration from './components/blocks/user/BlocksRegistration';
import BlocksContactForm from './components/blocks/contactForm/BlocksContactForm';
import BlocksAddDealerForm from './components/blocks/dealerForm/BlocksAddDealerForm';
import BlocksEditDealerForm from './components/blocks/dealerForm/BlocksEditDealerForm';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './assets/style.css';

export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<BlocksAddDealerForm />} />
          <Route path="/contact" element={<BlocksContactForm />} />
          <Route path="/edit/:id" element={<BlocksEditDealerForm />} />
        </Route>
        <Route path="/login" element={<BlocksLogin />} />
        <Route path="/register" element={<BlocksRegistration />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
