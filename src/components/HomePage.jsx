import React, { useContext } from 'react';
import { ApiResultContext } from '../context/apiResultsContext';
import GoogleLogo from '../google-logo-9834.png';

import './style.css';

const HomePage = () => {

  const {setSearch, callApi, search} = useContext(ApiResultContext);

  const handleClick = () => {
    callApi();
  };

  return (
    <>
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
    </>
  );
};

export default HomePage;
