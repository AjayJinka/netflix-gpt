import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptView } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { selectLanguage } from "../utils/configSlice";

const Header = () => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptView = useSelector((store) => store.gpt.showGptView);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const { photoURL = "" } = user || {};
  const toggleDropdownMenu = () => {
    setHide(!hide);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const handleLanguageSelect = (e) => {
    dispatch(selectLanguage(e.target.value));
  };
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img src={LOGO} className="w-44"></img>
        {user && (
          <div className="flex gap-8">
            {showGptView && (
              <select
                name="languages"
                id="language-choice"
                className="px-2 my-1 py-1 rounded-lg bg-orange-500 text-white font-bold cursor-pointer"
                onChange={handleLanguageSelect}
              >
                {SUPPORTED_LANGUAGES.map((language) => {
                  return (
                    <option
                      key={language.identifier}
                      value={language.identifier}
                    >
                      {language.name}{" "}
                    </option>
                  );
                })}
              </select>
            )}
            <button
              className="bg-purple-900 rounded px-2 my-1 py-1 text-white font-bold"
              onClick={() => {
                dispatch(toggleGptView());
              }}
            >
              GPT Search
            </button>
            <div onClick={toggleDropdownMenu} className="mr-4">
              <img
                src={photoURL}
                alt="photo"
                className="w-8 rounded-lg mr-4 cursor-pointer"
              />
            </div>
          </div>
        )}
        <div
          className={`absolute top-20 right-0 mr-4 border-2 text-white font-bold cursor-pointer px-4 py-2 ${
            hide ? "hidden" : ""
          }`}
          onClick={logOut}
        >
          Sign out
        </div>
      </div>
    </>
  );
};

export default Header;
