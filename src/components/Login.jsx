import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setSignIn(!signIn);
    clearForm();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(signIn, fullName, email, password);
    setErrorMessage(message);
  };
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
      </div>
      <div className="absolute left-0 right-0 mx-auto z-10 bg-black w-3/12 rounded mt-32 bg-opacity-80">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col justify-center items-center gap-y-4 p-8"
        >
          <h3 className="font-bold text-2xl">
            {signIn ? "Sign In" : "Sign Up"}
          </h3>
          {!signIn && (
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter Full Name"
              className="rounded w-full p-2 bg-gray-300"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
            ></input>
          )}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded w-full p-2 bg-gray-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="rounded w-full p-2 bg-gray-300"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
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
