import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_IMG}></img>
      </div>
      <div className="pt-32 mx-64 px-8">
        <GptSearchBar />
      </div>
    </>
  );
};

export default GptSearchPage;
