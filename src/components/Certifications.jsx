import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';
import ImageModal from './ImageModal';
import nvidiacert from '../assets/images/NVIDIA-certificate.png';
import dlCert from '../assets/images/DL-certificate.png';
import rnCert from '../assets/images/react-native-certificate.png';
import rlCert from '../assets/images/RL-certificate.png';
import './Certifications.css';

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'Building RAG Agents with LLMs',
      issuer: 'NVIDIA',
      description: 'Advanced techniques for building Retrieval-Augmented Generation systems',
      image: nvidiacert
    },
    {
      title: 'Deep Learning Certification',
      issuer: 'NPTEL',
      description: 'Comprehensive deep learning course covering neural networks and applications',
      image: dlCert
    },
    {
      title: 'React Native Complete Guide',
      issuer: 'Udemy',
      description: 'Complete guide to mobile app development with React Native',
      image: rnCert
    },
    {
      title: 'Reinforcement Learning',
      issuer: 'NPTEL',
      description: 'In-depth course on reinforcement learning algorithms and applications',
      image: rlCert
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card"
              onClick={() => openModal(cert)}
            >
              <div className="cert-icon">
                <FaAward />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <span className="view-cert-hint">Click to view certificate</span>
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        isOpen={modalOpen} 
        imageUrl={selectedCert?.image} 
        title={selectedCert?.title}
        onClose={closeModal}
      />
    </section>
  );
};

export default Certifications;
