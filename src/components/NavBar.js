import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <div>
        <h1 className="nav-title">Rick And Morty Test</h1>
        <ul>
          <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;