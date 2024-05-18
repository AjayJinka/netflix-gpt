import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          className="h-screen object-cover md:h-auto md:object-contain"
        ></img>
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
