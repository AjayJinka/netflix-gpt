import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      } else {
        console.log("API Response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export default useTopRatedMovies;
