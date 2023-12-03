
import axios from 'axios'
import Top from '../top';
import React,{ useEffect, useState } from 'react';

const API_URL = 'https://api.unsplash.com/search/photos';
  const IMAGES_PER_PAGE =50;

const Flowers = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}?query=${'flowers'}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_API_KEY}`
        );

        console.log("result", data);
        setImages(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    getImages();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="images">
      <div className='images'>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className='image'
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImage !== null && (
        <div className="image-preview-overlay" onClick={handleClosePreview}>
          <div className="image-preview-container">
            <img
              src={images[selectedImage].urls.small}
              alt={`Preview of Image ${selectedImage}`}
              className="preview-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default Flowers;
