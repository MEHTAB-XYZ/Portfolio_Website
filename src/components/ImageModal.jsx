import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageModal.css';

const ImageModal = ({ isOpen, imageUrl, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!isOpen) return null;

  const images = Array.isArray(imageUrl) ? imageUrl.filter(img => img) : imageUrl ? [imageUrl] : [];
  
  if (images.length === 0) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="no-image">
            <p>No images available</p>
          </div>
        </div>
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-image-container">
          <div className="scrollable-image-wrapper">
            <img src={currentImage} alt={title} className="modal-image" />
          </div>
          
          {hasMultiple && (
            <>
              <button className="modal-nav-btn prev-btn" onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className="modal-nav-btn next-btn" onClick={handleNext}>
                <FaChevronRight />
              </button>
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {title && <p className="modal-title">{title}</p>}
        
        {hasMultiple && (
          <div className="image-indicators">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
