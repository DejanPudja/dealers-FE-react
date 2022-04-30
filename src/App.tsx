import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import PartsNoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import './assets/style.css';
import BlocksLogin from './components/blocks/user/BlocksLogin';
import BlocksRegistration from './components/blocks/user/BlocksRegistration';
import BlocksContactForm from './components/blocks/contactForm/BlocksContactForm';
import BlocksAddDealerForm from './components/blocks/dealerForm/BlocksAddDealerForm';
import BlocksEditDealerForm from './components/blocks/dealerForm/BlocksEditDealerForm';
export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<BlocksAddDealerForm />} />
        <Route path="/contact" element={<BlocksContactForm />} />
        <Route path="/edit/:id" element={<BlocksEditDealerForm />} />
        <Route path="/login" element={<BlocksLogin />} />
        <Route path="/register" element={<BlocksRegistration />} />

        <Route path="*" element={<PartsNoMatch />} />
      </Routes>
    </div>
  );
}
