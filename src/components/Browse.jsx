import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json, "json");
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
