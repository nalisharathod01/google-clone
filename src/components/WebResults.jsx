import React, {useContext} from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import { ApiResultContext } from '../context/apiResultsContext';

import Images from '../components/Images'

const WebResults = ({chipSelected}) => {
    const { result  } = useContext(ApiResultContext);
    const {data} = result.data;

    console.log(chipSelected);
  return (
    <>
    {chipSelected === "Images" ? (
        <Images />
      ) : (
        <div className="google-search-card-container">
          {data?.map((d) => {
            return (
              <Card
                className="google-search-card"
                sx={{ minWidth: 100, width: 700 }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {d.domain}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 18, textDecoration: "underline" }}
                    color="#1a0dab"
                  >
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
      )}
      </>
  )
}

export default WebResults