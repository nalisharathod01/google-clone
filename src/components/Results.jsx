import React, { useState, useContext } from "react";
import GoogleSmallLogo from "../small-google-logo-png-transparent-background-210x70.png";
import { ApiResultContext } from "../context/apiResultsContext";
import { Chip, Divider } from "@mui/material";
import WebResults from "./WebResults";

import "./style.css";

const Results = () => {

  const [chipSelected, setChipSelected] = useState('Web');

  const {
    setSearch,
    callApi,
    search,
  } = useContext(ApiResultContext);

  const handleChipClicked = () => {
    setChipSelected((prevState) => "Images");
  };

  const handleChipWebClicked = () => {
    setChipSelected((prevState) => "Web");
  };

  return (
    <div>
      <div className="results-google-search">
        <img
          className="google-img"
          src={GoogleSmallLogo}
          alt="logo"
          width="130"
          height="50"
        />
        <div className="search-container">
          <input
            type="text"
            className="google-searchbar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                callApi();
              }
            }}
          />
        </div>
      </div>
      <div className="chip-container">
        <Chip
          className="chip"
          onClick={handleChipWebClicked}
          label="Web"
          variant="outlined"
        />
       <Chip
          className="chip"
          onClick={handleChipClicked}
          label="Images"
          variant="outlined"
        />
      </div>
      <br />
      <Divider variant="middle" />
      <WebResults chipSelected={chipSelected} />
    </div>
  );
};

export default Results;
