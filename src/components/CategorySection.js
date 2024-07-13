import React from 'react';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard';

function CategorySection({ title, videos, onEdit, onDelete }) {
  const categoryImages = {
    'Front End': '/frontend.png',
    'Back End': '/backend.png',
    'Innovación y Gestión': '/inov & gestion.png',
  };

  return (
    <div className="category-section">
      <div className="category-image">
        <img src={categoryImages[title]} alt={title} />
      </div>
      <div className="video-list">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onEdit={() => onEdit(video)}
            onDelete={() => onDelete(video.id)}
          />
        ))}
      </div>
    </div>
  );
}

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CategorySection;
