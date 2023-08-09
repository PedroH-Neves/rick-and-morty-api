import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/episodes' element={<Episodes />} />
    </Routes>
  </>
)

export default App;
