import React from 'react';
import Search from '../components/Search';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <div>
      <header className="hero">
        <h1>Pictography</h1>
        <p className="hero-description">
          Explore a world of stunning images with Pictography! Simply enter a search term, and browse through a collection of high-quality photos. Start your search now and find inspiration!
        </p>
      </header>
      <Search />
      <ImageGallery />
    </div>
  );
};

export default Home;
