import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, BG_IMG } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef?.current?.value || "";
    const email = emailRef?.current?.value || "";
    const password = passwordRef?.current?.value || "";
    const message = checkValidData(signIn, fullName, email, password);
    setErrorMessage(message);
    if (message) return;
    if (!signIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          className="h-screen object-cover md:h-auto md:object-contain"
        ></img>
      </div>
      <div className="absolute left-0 right-0 mx-auto z-10 bg-black w-full md:w-3/12 rounded mt-32 bg-opacity-80">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col justify-center items-center gap-y-4 p-8"
        >
          <h3 className="font-bold text-2xl text-white">
            {signIn ? "Sign In" : "Sign Up"}
          </h3>
          {!signIn && (
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter Full Name"
              className="rounded w-full p-2 bg-gray-300"
              ref={fullNameRef}
            ></input>
          )}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded w-full p-2 bg-gray-300"
            ref={emailRef}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="rounded w-full p-2 bg-gray-300"
            ref={passwordRef}
          />
          <button type="submit" className="bg-red-600 rounded w-full p-2">
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <p className="text-red-600 font-bold">{errorMessage}</p>
          </div>
          <div className="text-white">
            {signIn ? "New to Netflix?  " : "Already Netflix User?  "}
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={toggleSignIn}
            >
              {signIn ? "Sign Up Now" : "Sign In Now"}
            </span>
            .
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
