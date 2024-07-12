import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';
import closeButtonImg from '../assets/img/X - cancel.png';

const Modal = ({ isOpen, onClose, video, onSave }) => {
  const [editedVideo, setEditedVideo] = useState({ ...video });

  useEffect(() => {
    setEditedVideo({ ...video });
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedVideo);
    onClose();
  };

  const handleClear = () => {
    setEditedVideo({ ...video });
  };

  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button
          className='modal-close'
          onClick={onClose}>
          <img
            src={closeButtonImg}
            alt='Close'
          />
        </button>
        <h2>Editar Card: </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type='text'
              name='title'
              value={editedVideo.title}
              onChange={handleChange}
              placeholder='¿Qué es Javascript?'
            />
          </label>
          <label>
            Categoría:
            <select
              name='category'
              value={editedVideo.category}
              onChange={handleChange}>
              <option value=''>Selecciona una categoría</option>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='Innovación y Gestión'>Innovación y Gestión</option>
            </select>
          </label>
          <label>
            Imagen:
            <input
              type='text'
              name='image'
              value={editedVideo.image}
              onChange={handleChange}
              placeholder='URL de la imagen'
            />
          </label>
          <label>
            Video:
            <input
              type='text'
              name='video'
              value={editedVideo.video}
              onChange={handleChange}
              placeholder='URL del video'
            />
          </label>
          <label>
            Descripción:
            <textarea
              name='description'
              value={editedVideo.description}
              onChange={handleChange}
              placeholder='Descripción del video'
            />
          </label>
          <div>
            <button type='submit'>Guardar</button>
            <button
              type='reset'
              onClick={handleClear}>
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Modal;
