import '../styles/footer.css';
import logo from '../assets/img/logoAluraFlix.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img
        src={logo}
        alt='Aluraflix Logo'
      />
    </div>
  );
};

export default Footer;
