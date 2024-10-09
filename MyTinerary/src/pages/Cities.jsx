import { NavLink } from "react-router-dom";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";


export default function Cities() {
  const routes = [{ to: "/", text: "Home" }];
  return (
    <>
      <div className="flex justify-center pt-28 pb-10 items-center">
        <div className="flex ">
          {routes.map((r, index) => (
            <button
              key={index}
              className={
                " bg-slate-700    text-white rounded-full  px-4 py-2 text-xl italic font-mono hover:bg-sky-400  hover:scale-10  md:py-3 md:text-2xl"
              }
            >
              <NavLink to={r.to}>Come Home!</NavLink>
            </button>
          ))}
          <BsArrowLeftCircle className="text-sky-400 text-6xl  md:text-7xl  animate-horizontal-bounce" />
        </div>
        <div className=" overflow-hidden h-2/4 ">
          <img
            className=" object-cover w-full    brightness-[.65] shadow-lg "
            src="3.jpg"
            alt="3.png"
          />
        </div>
      </div>
    </>
  );
}
