import openai from "../utils/openai";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const selectedLangauge = lang[langKey];
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies comma separated like the example result given ahead. Example result: Aditya369, Chantabbay, Raja, pokiri, avunu";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults, "gptResults");
    if (!gptResults.choices) {
      console.log("GPT API failed");
    }
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    console.log(tmdbResults, "tmdbResults");
  };
  return (
    <div className="pt-40 md:pt-20 flex justify-center">
      <form
        className="bg-black grid grid-cols-12 gap-3 p-3 w-auto md:w-1/2"
        onSubmit={handleGptSearchClick}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 text-center p-2"
          placeholder={selectedLangauge.gptSearchPlaceholder}
        />
        <button className="col-span-3 text-white bg-red-600 p-2 rounded-lg font-bold">
          {selectedLangauge.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
