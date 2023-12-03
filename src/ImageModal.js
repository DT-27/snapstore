import React from 'react';
import './index.css'
const ImageModal = ({ isOpen, onClose, imageUrl, altText }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="image-preview-overlay" onClick={onClose}>
      <div className="image-preview-container" onClick={(e) => e.stopPropagation()}>
        <img className='preview-image' src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default ImageModal;
