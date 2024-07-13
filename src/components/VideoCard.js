import React from 'react';
import PropTypes from 'prop-types';

function VideoCard({ video, onEdit, onDelete }) {
  // Determinar la ruta de la imagen según el ID del video
  let imagePath;

  switch (video.id) {
    case 1:
      imagePath = '/Img1.png';
      break;
    case 2:
      imagePath = '/Img2.png';
      break;
    case 3:
      imagePath = '/Img3.png';
      break;
    case 4:
      imagePath = '/img4.png';
      break;
    case 5:
      imagePath = '/img5.png';
      break;
    case 6:
      imagePath = '/img6.png';
      break;
    case 7:
      imagePath = '/img7.png';
      break;
    case 8:
      imagePath = '/img8.png';
      break;
    case 9:
      imagePath = '/img9.png';
      break;
    default:
      imagePath = '/default.png'; // Ruta de una imagen por defecto si el ID no coincide
  }

  return (
    <div className="video-card">
      <img src={imagePath} alt={`Imagen ${video.id}`} />
      <div className="image-buttons">
        <div className="edit-button" onClick={onEdit}>
          <img src="/edit.png" alt="Editar" />
          <span>Editar</span>
        </div>
        <div className="delete-button" onClick={() => onDelete(video.id)}>
          <img src="/borrar.png" alt="Borrar" />
          <span>Borrar</span>
        </div>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default VideoCard;
