 
import { useState } from "react";


function Navbar() {
  const [visivel, setVisivel] = useState(false);

  return (
    <nav className="fixed p-3 w-full text-white z-10">
      |
      <div className=" bg-half-transparent flex justify-between px-6 w-full md:w-auto items-center">
        <div className="">
        <div className=" flex p-3 items-center ">
      <div className="flex flex-col " onClick={() => setVisivel(!visivel)}>
        <div
          className={`${
            visivel && "rotate-45 translate-y-2"
          } h-1 w-8 mb-1 bg-white transition duration-500`}
        />
        <div
          className={`${
            visivel && "rotate-_45"
          } h-1 w-8 mb-1 bg-white transition duration-600`}
        />
        <div
          className={`${
            visivel ? "hidden" : "flex"
          } h-1 w-8 mb-1 bg-white transition duration-600`}
        />
      </div>
      <div className="">
        <ul
          className={`${
            visivel ? "w-full sm:w-48" : "w-0"
          } transition-width duration-500 flex flex-col font-bold h-2/4 fixed  top-28 left-3 bg-half-transparent justify-around items-center`}
        >
          <button
            className={`${
              visivel ? "flex" : "hidden"
            } text-white hover:text-blue-400 p-3 border-solid border-2 border-sky-500 rounded-full`}
          >
            HOME
          </button>
          <button
            className={`${
              visivel ? "flex" : "hidden"
            } text-white hover:text-blue-400 p-3 border-solid border-2 border-sky-500  rounded-full`}
          >
            CITIES
          </button>
        </ul>
      </div>
    </div>
        </div>
        <div className="flex flex-none items-center  ">
          <img src="./ico.png" className="logo animate-pulse " alt="React logo" />
          
        </div>

        <div className="flex px-6 py-2 ">
          <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-1 px-1 rounded-full">
            <img src="/piña.png" className="logo " alt="logo" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
