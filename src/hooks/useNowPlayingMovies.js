import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } else {
        console.log("API response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export default useNowPlayingMovies;
