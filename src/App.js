import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CharDetails from './components/CharDetails';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/characters' element={<CharDetails />} />
    </Routes>
  </>
)

export default App;
