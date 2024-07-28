import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import Home from './pages/Home';

const App = () => {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
};

export default App;
