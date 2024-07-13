import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './EditModal.css';

const EditModal = ({ isOpen, video, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  useEffect(() => {
    if (video) {
      setFormData(video);
    }
  }, [video]);

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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Editar Video"
      className="edit-modal"
      overlayClassName="edit-modal-overlay"
    >
      <div className="modal-content">
        <h2>EDITAR CARD:</h2>
        <button className="edit-modal-close" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit}>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingrese el título"
            required
          />
          
          <label>Categoría</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
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
            placeholder="Ingrese el enlace de la imagen"
            required
          />
          
          <label>Video</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Ingrese el enlace del video"
            required
          />
          
          <label>Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ingrese la descripción"
            required
          />
          
          <div className="modal-buttons">
            <button type="submit">Guardar</button>
            <button type="button" onClick={() => setFormData(video)}>Limpiar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
