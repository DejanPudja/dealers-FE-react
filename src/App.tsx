import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/main/MainHeader';
import PartsNoMatch from './components/parts/PartsNoMatch';
import Home from './Pages/Home';
import './assets/style.css';
import AddDealer from './Pages/AddDealer';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddDealer />} />
        <Route path="*" element={<PartsNoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
