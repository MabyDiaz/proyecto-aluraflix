import '../styles/home.css';
import CategorySection from '../components/CategorySection.jsx';
import Banner from '../components/Banner.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/videos')
      .then((response) => {
        // Antes de almacenar los videos en el estado, convierte los ids a números si son cadenas
        const videosWithNumberIds = response.data.map((video) => ({
          ...video,
          id: Number(video.id), // Convierte a número
        }));
        setVideos(videosWithNumberIds);
      })
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  const getCategoryVideos = (category) => {
    return videos.filter((video) => video.category === category);
  };

  return (
    <>
      <Banner />
      <main className='main-container'>
        <CategorySection
          title='Frontend'
          videos={getCategoryVideos('Frontend')}
        />
        <CategorySection
          title='Backend'
          videos={getCategoryVideos('Backend')}
        />
        <CategorySection
          title='Innovación y Gestión'
          videos={getCategoryVideos('Innovación y Gestión')}
        />
      </main>
    </>
  );
};

export default Home;
