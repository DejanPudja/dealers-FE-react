import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import PartsNoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import AddDealer from './Pages/AddDealer';
import Contact from './Pages/Contact';
import './assets/style.css';
import EditDealer from './Pages/EditDealer';

export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddDealer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<EditDealer />} />
        <Route path="*" element={<PartsNoMatch />} />
      </Routes>
    </div>
  );
}
