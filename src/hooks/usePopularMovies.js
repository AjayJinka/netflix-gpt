import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } else {
        console.log("API Response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export default usePopularMovies;
