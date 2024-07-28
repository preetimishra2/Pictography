import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const ImageGallery = () => {
  const { images, loading, error } = useContext(ImageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (images.length === 0) return <p>No images found</p>;

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <a key={image.id} href={image.urls.full} target="_blank" rel="noopener noreferrer">
          <img src={image.urls.small} alt={image.alt_description} />
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;
