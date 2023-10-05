import React, { useState } from 'react';

import GoogleLogo from '../google-logo-9834.png';
import { getResults } from '../api/resultsApi';
import { getImageResults } from '../api/imageApi'

import Results from './Results';
import './style.css';

const HomePage = () => {
  const [result, setResult] = useState('');
  const [imageResult, setImageResult] = useState('');
  const [search, setSearch] = useState('');
  const [isResultVisible, setIsResultVisible] = useState(false);

  const callApi = async () => {
    await getResults(search)
      .then((data) => {
        setResult(data);
        setIsResultVisible(true);
    });
    await getImageResults(search)
    .then((data) => {
      setImageResult(data);
  });
  };

  const handleClick = () => {
    callApi();
  };

  return (
    <>
      {isResultVisible ? <Results result={result} imageResult={imageResult} /> : (
        <div className="homepage">
        <img src={GoogleLogo} alt="logo" width="400" height="500" />
        <div className="search-container">
          <input
            type="text"
            className="google-searchbar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <button onClick={handleClick} className="search-button">
          Google Search
        </button>
      </div>
      )}
    </>
  );
};

export default HomePage;
