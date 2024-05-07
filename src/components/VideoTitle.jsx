import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black px-8 py-2 text-xl text-center bg-opacity-100 rounded hover:bg-opacity-80 font-bold">
          ▶️ Play
        </button>
        <button className="text-black px-8 py-2 text-xl bg-gray-500 text-center bg-opacity-100 rounded hover:bg-opacity-80 font-bold">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
