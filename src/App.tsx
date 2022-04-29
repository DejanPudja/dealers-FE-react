import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import PartsNoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import PartsEditDealerForm from './components/parts/PartsEditDealerForm';
import PartsContactForm from './components/parts/PartsContactForm';
import PartsDealerForm from './components/parts/PartsDealerForm';
import './assets/style.css';

export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PartsDealerForm />} />
        <Route path="/contact" element={<PartsContactForm />} />
        <Route path="/edit/:id" element={<PartsEditDealerForm />} />
        <Route path="*" element={<PartsNoMatch />} />
      </Routes>
    </div>
  );
}
