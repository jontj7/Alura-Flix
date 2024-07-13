import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './NewVideoModal.css';

const NewVideoModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleClear = () => {
    setFormData({
      id: null,
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Nuevo Video"
      className="new-video-modal"
      overlayClassName="new-video-modal-overlay"
    >
      <button className="new-video-modal-close" onClick={onClose}>×</button>
      <h2>AGREGAR NUEVO VIDEO:</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ingrese el título"
        />
        <label>Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="front-end">Frontend</option>
          <option value="back-end">Backend</option>
          <option value="innovation-management">Innovación y Gestión</option>
        </select>
        <label>Imagen</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL de la imagen"
        />
        <label>Video</label>
        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleChange}
          placeholder="URL del video"
        />
        <label>Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción del video"
        />
        <div className="modal-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>Limpiar</button>
        </div>
      </form>
    </Modal>
  );
};

export default NewVideoModal;
