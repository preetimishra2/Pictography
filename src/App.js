import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import Home from './pages/Home';
import './App.css';
const App = () => {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route path="/Image-Search-App" element={<Home />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
};

export default App;
