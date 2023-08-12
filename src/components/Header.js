import Logo from '../assets/Logo.png';
import '../styles/components/Header.scss';

const Header = () => (
  <header>
    <nav className="nav">
      <img className="logo" src={Logo} alt="Rick and Morty logo" />
      <div className="links">
        <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noreferrer">
          API
        </a>
        <a href="https://github.com/PedroH-Neves/rick-and-morty-api" target="_blank" rel="noreferrer">
          Development
        </a>
      </div>
    </nav>
  </header>
);

export default Header;