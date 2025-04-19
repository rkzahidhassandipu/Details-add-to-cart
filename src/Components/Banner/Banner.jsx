import React from "react";
import BannerImg from "../../assets/pngwing 1.png"

const Banner = () => {
  return (
    <div>
      <div className="w-4/5 my-16 mx-auto rounded-xl hero bg-gray-200 min-h-screen px-20">
        <div className="w-full flex lg:flex-row-reverse justify-between items-center">
          <img
            src={BannerImg}
            className="max-w-sm"
          />
          <div>
            <h1 className="text-5xl font-bold leading-16">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-primary text-2xl bg-green-500 border-none rounded-md text-white mt-7"> View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
