import React, {useState} from "react";
import GoogleSmallLogo from "../small-google-logo-png-transparent-background-210x70.png";
import { Chip, Card, CardContent, Typography, Divider } from "@mui/material";

import Images from './Images'

import "./style.css";

const Results = ({ result, imageResult }) => {
  const [chipSelected, setChipSelected] = useState('Web');

  const { data } = result.data;

  const handleChipClicked = () => {
    setChipSelected('Images');
  }

  const handleChipWebClicked = () => {
    setChipSelected('Web');
  }

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
          <input type="text" className="google-searchbar" onChange={(e) => e.target.value} />
        </div>
      </div>
      <div className="chip-container">
        <Chip className="chip" onClick={handleChipWebClicked}  label="Web" variant="outlined" />
        <Chip label="Images" onClick={handleChipClicked} variant="outlined" />
      </div>
      <br />
      <Divider variant="middle" />
      {chipSelected === "Images" ? <Images imageResult={imageResult}/> : 
      <div className="google-search-card-container">
        {data?.map((d) => {
          return (
            <Card className="google-search-card" sx={{ minWidth: 100, width: 700 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {d.domain}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontSize: 18, textDecoration: 'underline' }} color="#1a0dab" >
                  {d.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {d.snippet}
                </Typography>
                <Typography variant="body2">{d.url}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div> 
      }
    </div>
  );
};

export default Results;
