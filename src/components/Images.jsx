import React, {useContext} from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ApiResultContext } from '../context/apiResultsContext';

import "./style.css";

const Images = () => {
  const {imageResult  } = useContext(ApiResultContext);
  const { items } = imageResult?.data;

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div className="image-list">
      <ImageList
        sx={{ width: 600, height: 700 }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {items.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.originalImageUrl, 200, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Images;
