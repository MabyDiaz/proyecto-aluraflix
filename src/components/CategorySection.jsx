import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard.jsx';
import '../styles/categorySection.css';

const CategorySection = ({ title, videos }) => {
  // Estado para almacenar la lista de videos
  const [videoList, setVideoList] = useState(videos);

  // Actualizar videoList cuando cambian los videos prop
  useEffect(() => {
    setVideoList(videos);
  }, [videos]);

  // Función para determinar el color de fondo basado en el título de la categoría
  const getSectionColor = (title) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return '#6bd1ff'; // Color de fondo para Frontend
      case 'backend':
        return '#4caf50'; // Color de fondo para Backend
      case 'innovación y gestión':
        return '#faaf3e'; // Color de fondo para Innovación y Gestión
      default:
        return '#f0f0f0'; // Color de fondo por defecto
    }
  };

  // Convertir el título en una clase válida
  const sectionClass = title
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/ñ/g, 'n');

  const sectionColor = getSectionColor(title);

  // Función para manejar la eliminación de un video
  const handleVideoDelete = (id) => {
    // Filtrar los videos para eliminar el video con el ID dado
    const updatedVideos = videoList.filter((video) => video.id !== id);
    setVideoList(updatedVideos); // Actualizar el estado de la lista de videos
  };

  return (
    <section className='category-section'>
      <h2
        className={`category-title ${sectionClass}`}
        style={{ backgroundColor: sectionColor }}>
        {title}
      </h2>
      <div className='videos'>
        {videoList.slice(0, 3).map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            sectionColor={sectionColor}
            onDelete={() => handleVideoDelete(video.id)} // Pasar la función de eliminación
          />
        ))}
      </div>
    </section>
  );
};

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategorySection;
