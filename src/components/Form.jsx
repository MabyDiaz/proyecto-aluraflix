// import PropTypes from 'prop-types';

// const Form = ({ video }) => {
//   return (
//     <form>
//       <input
//         type='text'
//         defaultValue={video?.title || ''}
//         name='title'
//       />
//       <select
//         name='category'
//         defaultValue={video?.category || ''}>
//         <option value='Frontend'>Frontend</option>
//         <option value='Backend'>Backend</option>
//         <option value='Innovación'>Innovación</option>
//         <option value='Gestión'>Gestión</option>
//       </select>
//       <input
//         type='text'
//         defaultValue={video?.image || ''}
//         name='image'
//       />
//       <input
//         type='text'
//         defaultValue={video?.video || ''}
//         name='video'
//       />
//       <textarea
//         defaultValue={video?.description || ''}
//         name='description'
//       />
//       <button type='submit'>Guardar</button>
//       <button type='reset'>Limpiar</button>
//     </form>
//   );
// };

// Form.propTypes = {
//   video: PropTypes.shape({
//     title: PropTypes.string,
//     category: PropTypes.string,
//     image: PropTypes.string,
//     video: PropTypes.string,
//     description: PropTypes.string,
//   }),
// };

// export default Form;
