import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);
  const getMovieVideos = async () => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
      const data = await fetch(apiUrl, API_OPTIONS);
      if (data.ok) {
        const json = await data.json();
        console.log(json, "json");
        const videos = json.results;
        const trailer =
          videos?.find((video) => video?.type === "Trailer") || videos[0];
        console.log(trailer, "trailer");
        dispatch(addMovieTrailer(trailer));
      } else {
        console.log("API Response not ok");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export default useMovieTrailer;
