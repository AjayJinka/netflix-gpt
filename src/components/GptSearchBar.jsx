import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const selectedLangauge = lang[langKey];
  return (
    <div className="bg-black grid grid-cols-12 p-3 gap-3">
      <input
        type="text"
        className="col-span-10 text-center p-2"
        placeholder={selectedLangauge.gptSearchPlaceholder}
      />
      <button className="col-span-2 text-white bg-red-600 p-2 rounded-lg font-bold">
        {selectedLangauge.search}
      </button>
    </div>
  );
};

export default GptSearchBar;
