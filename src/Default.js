import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSearchContext } from './SearchContext';
import ImageModal from './ImageModal';

const IMAGES_PER_PAGE =50;

const Default = () => {
  const { searchQuery } = useSearchContext();
  const [images, setImages] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?query=${searchQuery}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();

        // Check if the data structure matches the expected format
        const fetchedImages = data.results || [];

        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    if (searchQuery) {
      // Only fetch images if there is a search query
      fetchImages();
    } else {
      // If there's no search query, you may want to handle this case (e.g., show default images)
      setImages([]);
    }
  }, [searchQuery]);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="images">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="image"
            onClick={() => openImageModal(image.urls.small)}
          />
        ))}
      </div>

      {/* Image modal */}
      <ImageModal isOpen={selectedImage !== null} onClose={closeImageModal} imageUrl={selectedImage} altText="Image Preview" />
    </div>
  );
};

export default Default;
