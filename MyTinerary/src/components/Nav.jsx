// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [visivel, setVisivel] = useState(false);
  const routes = [
    { to: "/", text: "Home" },
    { to: "/cities", text: "Cities" },
  ];

  return (
    <div className=" flex fixed w-full  items-center text-white z-10 bg-half-transparent justify-between rounded-lg  ">
      <div>
        <div className=" flex p-3 items-center ">
          <div className="flex flex-col " onClick={() => setVisivel(!visivel)}>
            <div
              className={`${
                visivel && "rotate-45 translate-y-2"
              } h-1 w-8 mb-1 bg-white transition duration-500`}
            />
            <div
              className={`${
                visivel && "rotate-negative-45"
              } h-1 w-8 mb-1 bg-white transition duration-600`}
            />
            <div
              className={`${
                visivel ? "hidden" : "flex"
              } h-1 w-8 mb-1 bg-white transition duration-600`}
            />
          </div>
          <div>
            <ul
              className={`${
                visivel ? "w-full sm:w-48" : "w-0"
              } transition-width duration-500 flex flex-col font-bold h-2/4 fixed  top-28 left-3 bg-half-transparent justify-around items-center`}
            >
              {routes.map((r, index) => (
                <button
                  key={index}
                  className={`${
                    visivel ? "flex" : "hidden"
                  } text-white hover:text-blue-400 p-3 border-solid border-2 border-sky-500 rounded-full`}
                >
                  <NavLink to={r.to}>{r.text}</NavLink>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img
          src="./ico.png"
          className="logo animate-pulse "
          alt="React logo"
        />
      </div>
      <div>
        <button className="text-white font-bold p-3 rounded-full">
          <FaUserCircle className="text-4xl m-auto "></FaUserCircle>
          <h2 className=" text-2xl font-semibold italic font-mono text-white">login</h2>          
        </button>
      </div>
    </div>
  );
}

export default Navbar;
