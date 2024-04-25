import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const { photoURL = "" } = user || {};
  const toggleDropdownMenu = () => {
    setHide(!hide);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-44"
        ></img>
        {user && (
          <div onClick={toggleDropdownMenu}>
            <img
              src={photoURL}
              alt="photo"
              className="w-8 rounded-lg mr-4 cursor-pointer"
            />
          </div>
        )}
        <div
          className={`absolute top-20 right-0 mr-4 border-4 font-bold cursor-pointer px-4 py-2 ${
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
