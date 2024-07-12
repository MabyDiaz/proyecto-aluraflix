import { useState } from 'react';
import axios from 'axios';
import '../styles/newVideo.css';

const NewVideo = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/videos', form)
      .then((response) => console.log('Video added:', response))
      .catch((error) => console.error('Error adding video:', error));
  };

  return (
    <>
      <main className='main-newVideo'>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>

        <form onSubmit={handleSubmit}>
          <h3>Crear tarjeta</h3>

          <div className='form-contenido'>
            <label htmlFor=''>
              Título
              <input
                type='text'
                name='title'
                value={form.title}
                onChange={handleChange}
                placeholder='Título'
              />
            </label>

            <label htmlFor=''>
              Categoría
              <select
                name='category'
                value={form.category}
                onChange={handleChange}>
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='Innovación'>Innovación y Gestión</option>
              </select>
            </label>
          </div>

          <div className='form-contenido'>
            <label htmlFor=''>
              Imágen
              <input
                type='text'
                name='image'
                value={form.image}
                onChange={handleChange}
                placeholder='URL de la imagen'
              />
            </label>
            <label htmlFor=''>
              Video
              <input
                type='text'
                name='video'
                value={form.video}
                onChange={handleChange}
                placeholder='URL del video'
              />
            </label>
          </div>

          <div className='form-contenido'>
            <label htmlFor=''>
              Descripción
              <textarea
                name='description'
                value={form.description}
                onChange={handleChange}
                placeholder='Descripción'></textarea>
            </label>
          </div>

          <div className='form-contenido'>
            <button type='submit'>Guardar</button>
            <button
              type='reset'
              onClick={() =>
                setForm({
                  title: '',
                  category: '',
                  image: '',
                  video: '',
                  description: '',
                })
              }>
              Limpiar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default NewVideo;
