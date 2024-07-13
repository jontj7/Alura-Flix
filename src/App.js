import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import EditModal from './components/EditModal';
import NewVideoModal from './components/NewVideoModal';
import MainBanner from './components/MainBanner';
import Footer from './components/Footer';
import './App.css';

const initialVideos = {
  frontEnd: [
    { id: 1, title: 'Cuándo usar LET, VAR y CONST', author: 'Author 1', category: 'front-end', image: 'Img1.png', video: '', description: '' },
    { id: 2, title: 'Qué es JavaScript?', author: 'Author 2', category: 'front-end', image: 'Img2.png', video: '', description: '' },
    { id: 3, title: 'Qué es JavaScript?', author: 'Author 2', category: 'front-end', image: 'Img3.png', video: '', description: '' },
  ],
  backEnd: [
    { id: 4, title: 'Spring Framework', author: 'Author 3', category: 'back-end', image: 'img4.png', video: '', description: '' },
    { id: 5, title: 'Qué es SQL y NoSQL?', author: 'Author 4', category: 'back-end', image: 'img5.png', video: '', description: '' },
    { id: 6, title: 'Qué es JavaScript?', author: 'Author 2', category: 'front-end', image: 'img6.png', video: '', description: '' },
  ],
  innovationManagement: [
    { id: 7, title: 'Qué son las soft skills?', author: 'Author 5', category: 'innovation-management', image: 'img7.png', video: '', description: '' },
    { id: 8, title: 'Las 7 soft skills más deseadas', author: 'Author 6', category: 'innovation-management', image: 'img8.png', video: '', description: '' },
    { id: 9, title: 'Qué es JavaScript?', author: 'Author 2', category: 'front-end', image: 'img9.png', video: '', description: '' },
  ],
};

Modal.setAppElement('#root');

function App() {
  const [videos, setVideos] = useState(initialVideos);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNewVideoModalOpen, setIsNewVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleEdit = (categoryId, videoId, updatedVideo) => {
    setVideos(prevVideos => ({
      ...prevVideos,
      [categoryId]: prevVideos[categoryId].map(video =>
        video.id === videoId ? { ...video, ...updatedVideo } : video
      ),
    }));
  };

  const handleDelete = (categoryId, videoId) => {
    setVideos(prevVideos => ({
      ...prevVideos,
      [categoryId]: prevVideos[categoryId].filter(video => video.id !== videoId),
    }));
  };

  const openEditModal = (video) => {
    setCurrentVideo(video);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentVideo(null);
  };

  const openNewVideoModal = () => {
    setIsNewVideoModalOpen(true);
  };

  const closeNewVideoModal = () => {
    setIsNewVideoModalOpen(false);
  };

  const handleSaveNewVideo = (newVideo) => {
    const newVideoWithId = { ...newVideo, id: Date.now() };
    setVideos(prevVideos => ({
      ...prevVideos,
      [newVideo.category]: [...prevVideos[newVideo.category], newVideoWithId],
    }));
    setIsNewVideoModalOpen(false); // Cerrar el modal después de guardar
  };

  const handleHome = () => {
    // Lógica para manejar el botón Home
    console.log("Home button clicked");
  };

  return (
    <div className="App">
      <Header onNewVideo={openNewVideoModal} onHome={handleHome} />
      <MainBanner />
      <CategorySection
        title="Front End"
        videos={videos.frontEnd}
        onEdit={openEditModal}
        onDelete={videoId => handleDelete('frontEnd', videoId)}
      />
      <CategorySection
        title="Back End"
        videos={videos.backEnd}
        onEdit={openEditModal}
        onDelete={videoId => handleDelete('backEnd', videoId)}
      />
      <CategorySection
        title="Innovación y Gestión"
        videos={videos.innovationManagement}
        onEdit={openEditModal}
        onDelete={videoId => handleDelete('innovationManagement', videoId)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        video={currentVideo}
        onClose={closeEditModal}
        onSave={(updatedVideo) => {
          handleEdit(currentVideo.category, currentVideo.id, updatedVideo);
          closeEditModal();
        }}
      />
      
      <NewVideoModal
        isOpen={isNewVideoModalOpen}
        onClose={closeNewVideoModal}
        onSave={handleSaveNewVideo}
      />
      
      <Footer />
    </div>
  );
}

export default App;
