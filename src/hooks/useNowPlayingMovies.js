import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        console.log(json, "json");
        dispatch(addNowPlayingMovies(json.results));
      } else {
        console.log("API response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
