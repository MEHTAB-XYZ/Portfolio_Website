import React, { useState } from 'react';
import ImageModal from './ImageModal';
import infosysImg1 from '../assets/images/infosys-image1.png';
import infosysImg2 from '../assets/images/infosys-image2.png';
import infosysImg3 from '../assets/images/infosys-image3.png';
import speridianImg from '../assets/images/speridian-image.png';
import dukImg from '../assets/images/DUK-image.png';
import './Experience.css';

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      icon: '🏆',
      title: 'Top 30 Finalist – Infosys Global Hackathon (2025)',
      description: 'Qualified for national-level onsite finals in Hyderabad with EV Charging Dashboard.',
      images: [infosysImg1, infosysImg2, infosysImg3]
    },
    {
      icon: '🥈',
      title: '2nd Prize – Speridian OneAI Hackathon (2025)',
      description: 'Built AI-powered appeal letter generator for healthcare claims.',
      images: [speridianImg]
    },
    {
      icon: '🥉',
      title: '3rd Prize – Prudentia 2025 (SCTCE)',
      description: 'Poster presentation and mini-project demo.',
      images: []
    },
    {
      icon: '🥉',
      title: '3rd Place – InnovateX Hackathon (DUK)',
      description: 'Built semantic legal search engine indexing 1,000+ court judgments.',
      images: [dukImg]
    }
  ];

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="experience-grid">
          <div className="column">
            <h3 className="column-title">Work & Research</h3>
            <div className="timeline-item">
              <span className="date">Software Engineering Intern · Dec 2025 – Present · Trivandrum</span>
              <h4 className="title">Speridian Technologies</h4>
              <p className="subtitle">Project: CareConnect — Healthcare System</p>
              <p className="description">
                Built a healthcare scheduling backend with FastAPI and PostgreSQL, handling
                multi-department appointments and complex time-slot logic. Integrated Twilio
                for automated notifications and centralized API logging.
              </p>
            </div>
            <div className="timeline-item">
              <span className="date">Research Intern · May 2025 – Jun 2025 · Remote</span>
              <h4 className="title">DiceMed</h4>
              <p className="subtitle">Project: Explainable ML Analysis of Medicine Pricing</p>
              <p className="description">
                Applied SHAP-based explainable ML on cross-country healthcare data to uncover
                drivers of medicine pricing. Co-authored a research paper on pharmaceutical
                cost trends across 40+ countries.
              </p>
            </div>
          </div>

          <div className="column">
            <h3 className="column-title">Education</h3>
            <div className="timeline-item">
              <span className="date">2022 – 2026</span>
              <h4 className="title">B.Tech. in Computer Science</h4>
              <p className="institution">Sree Chitra Thirunal College of Engineering</p>
              <p className="description">GPA: 8.76</p>
            </div>
            <div className="timeline-item">
              <span className="date">2022</span>
              <h4 className="title">Class 12</h4>
              <p className="institution">VSSC Central School</p>
              <p className="description">89.6%</p>
            </div>
          </div>
        </div>

        <div className="achievements-container">
          <h3 className="column-title">Achievements & Hackathons</h3>
          <ul className="achievements-list">
            {achievements.map((achievement, index) => (
              <li key={index} className="achievement-item-clickable" onClick={() => openModal(achievement)}>
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="achievement-content">
                  <strong>{achievement.title}</strong>
                  <p>{achievement.description}</p>
                  {achievement.images && achievement.images.length > 0 && (
                    <span className="view-image-hint">Click to view image{achievement.images.length > 1 ? 's' : ''}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        imageUrl={selectedAchievement?.images}
        title={selectedAchievement?.title}
        onClose={closeModal}
      />
    </section>
  );
};

export default Experience;
