import '../styles/header.css';
import logo from '../assets/img/logoAluraFlix.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <img
        src={logo}
        alt='Aluraflix Logo'
      />
      <nav>
        <Link
          to='/'
          className='link-home'>
          Home
        </Link>
        <Link
          to='/new-video'
          className='link-nuevoVideo'>
          Nuevo Video
        </Link>
      </nav>
    </header>
  );
};

export default Header;
