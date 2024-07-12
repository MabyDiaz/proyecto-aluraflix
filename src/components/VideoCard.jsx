import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal.jsx';
import axios from 'axios';
import '../styles/videoCard.css';
import logoBasura from '../assets/img/Vector.png';
import logoEditar from '../assets/img/VectorEditar.png';

// Importa todas las imágenes de la carpeta img
const images = import.meta.glob('../assets/img/*', { eager: true });

const VideoCard = ({ video, sectionColor, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(video);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/videos/${id}`)
      .then((response) => {
        console.log('Video deleted:', response);
        onDelete(); // Llamar a la función onDelete para actualizar la lista de videos
      })
      .catch((error) => console.error('Error deleting video:', error));
  };

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleSave = (editedVideo) => {
    axios
      .put(`http://localhost:3000/videos/${editedVideo.id}`, editedVideo)
      .then((response) => {
        console.log('Video updated:', response);
        // Actualiza el estado del video en la lista principal si es necesario
        setCurrentVideo(editedVideo);
      })
      .catch((error) => console.error('Error updating video:', error));
  };

  // Obtener la ruta de la imagen usando el nombre del archivo
  const imagePath = images[`../assets/img/${video.image}`]?.default;

  return (
    <div
      className='video-card'
      style={{
        boxShadow: `0 4px 8px 0 ${sectionColor}, 0 6px 20px 0 ${sectionColor}`,
      }}>
      <img
        src={imagePath}
        alt={video.title}
      />
      <div className='video-buttons'>
        <div className='video-btn-container'>
          <img
            className='delete-img'
            src={logoBasura}
            alt='icono de basura'
          />
          <button
            onClick={() => handleDelete(video.id)}
            className='delete-button'>
            Borrar
          </button>
        </div>

        <div className='video-btn-container'>
          <img
            className='edit-img'
            src={logoEditar}
            alt='icono de editar'
          />
          <button
            onClick={() => handleEdit(video)}
            className='edit-button'>
            Editar
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        video={currentVideo}
        onSave={handleSave}
      />
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  sectionColor: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired, // Asegurar que onDelete sea una función requerida
};

export default VideoCard;
