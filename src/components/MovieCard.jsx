import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, originalTitle }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32">
      <img src={IMG_CDN_URL + posterPath} alt={originalTitle} />
    </div>
  );
};

export default MovieCard;
