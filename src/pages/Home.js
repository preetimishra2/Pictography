import React from 'react';
import Search from '../components/Search';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <div>
      <h1>Image Search</h1>
      <Search />
      <ImageGallery />
    </div>
  );
};

export default Home;
