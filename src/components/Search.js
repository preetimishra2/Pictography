import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ImageContext } from '../context/ImageContext';

const Search = () => {
  const [query, setQuery] = useState('');
  const { setImages, setLoading, setError } = useContext(ImageContext);

  const searchImages = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query, per_page: 12 },
        headers: {
          Authorization: `Client-ID 2aEABMuiBhvxTp4nYXhzJNhNBZue3Ided0QZ-mbFsxQ`
        }
      });
      setImages(response.data.results);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={searchImages}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
