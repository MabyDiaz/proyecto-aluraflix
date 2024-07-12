import '../styles/banner.css';
import playerImg from '../assets/img/player.png';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-card'>
        <div className='banner-info'>
          <h2>Frontend</h2>
          <h3>Challenge React</h3>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>

        <div className='banner-img'>
          <img
            src={playerImg}
            alt='Imágen Player'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
