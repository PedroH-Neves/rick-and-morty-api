import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </>
)

export default App;
