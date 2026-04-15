import React from "react";

const Cards = (props) => {
  return props.details.map((elem, idx) => {
    return (
      <div className="h-[60vh] w-85 rounded-xl px-5 py-5 relative flex flex-col justify-between shadow-[#5b5b5b] shadow-2xl">
        <div className="w-full h-[30%] rounded-2xl overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={elem.coverImage}
            alt=""
          />
        </div>
        <div className="h-[22%] w-[28%] rounded-full absolute top-26 left-1/2 -translate-x-1/2 overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={elem.image}
            alt=""
          />
        </div>
        <div className="h-[55%]">
          <div className="h-[80%] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">{elem.fullName}</h2>
              <p className="w-72 text-center text-[#848484]">
                {elem.description}
              </p>
            </div>
            <div className="h-[50%] w-full bg-[#d9d9d9] flex justify-around rounded-2xl ">
              <div className="h-full w-[30%] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold">{elem.likes}K</h1>
                <h4 className="text-sm font-medium text-[#848484]">Likes</h4>
              </div>
              <div className="h-full w-[30%] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold">{elem.posts}</h1>
                <h4 className="text-sm font-medium text-[#848484]">Posts</h4>
              </div>
              <div className="h-full w-[30%] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold">{elem.views}K</h1>
                <h4 className="text-sm font-medium text-[#848484]">Views</h4>
              </div>
            </div>
          </div>
          <div className="h-[20%] flex items-end justify-center gap-5">
            <i className="ri-instagram-line text-xl"></i>
            <i className="ri-twitter-x-fill text-xl"></i>
            <i className="ri-threads-line text-xl"></i>
          </div>
        </div>
      </div>
    );
  });
};

export default Cards;
