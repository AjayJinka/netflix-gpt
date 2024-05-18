import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return;
  const mainMovie = movies[0];
  //console.log(mainMovie, "mainMovie");
  const { original_title = "", overview = "", id = "" } = mainMovie || {};
  return (
    <div className="pt-32 bg-black md:p-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
