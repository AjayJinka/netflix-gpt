import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
      } else {
        console.log("API Response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export default useUpcomingMovies;
