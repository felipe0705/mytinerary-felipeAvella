import React from "react";
import { useState } from "react";
import "./App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-blue-700 text-white p-1 z-50">
      <div className=" bg-black  flex justify-between px-6 w-full md:w-auto items-center">
        <div className="flex flex-none items-center  ">
          <img src="./ico.png" className="logo  " alt="React logo" />
          <h1 className="text-white before:block before:absolute text-2xl font-bold sm:text-3xl pl-4">
            Mi Tenerary
          </h1>
        </div>

        <div className="flex px-6 py-2 ">
          <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-1 px-1 rounded-full">
            <img src="/piña.png" className="logo " alt="logo" />
          </button>
        </div>
        <div className=" px-6 py-2">
          <Menu></Menu>
        </div>
      </div>
    </nav>
  );
};
function Menu() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div >
      <div
        className="flex flex-col  top-0 right-0  p-5"
        onClick={() => setVisivel(!visivel)}
      >
        <div
          className={`${
            visivel && "rotate-45 translate-y-2"
          } h-1 w-8 mb-1 bg-white transition duration-500`}
        />
        <div
          className={`${
            visivel && "rotate-_45"
          } h-1 w-8 mb-1 bg-white transition duration-500`}
        />
        <div
          className={`${
            visivel ? "hidden" : "flex"
          } h-1 w-8 mb-1 bg-white transition duration-500`}
        />
      </div>
      <div>
        <ul
          className={`${
            visivel ? "w-full sm:w-48" : "w-0"
          } transition-width duration-500 flex flex-col font-bold h-screen fixed pt-20 right-0 bg-half-transparent justify-center items-center`}
        >
          
          <button className={`${
              visivel ? "flex" : "hidden"
            } text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          
            HOME
            </button>
          <button
            className={`${
              visivel ? "flex" : "hidden"
            } text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}>
          
            CITIES
            </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
