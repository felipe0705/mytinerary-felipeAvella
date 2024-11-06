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
    <div className="flex fixed w-full items-center justify-between text-white z-20 bg-black bg-opacity-80 rounded-lg">
      <div className="flex p-3 items-center">
        <div
          className="flex flex-col"
          onClick={() => setVisivel(!visivel)}
          aria-label="Toggle menu"
        >
          <div
            className={`h-1 w-8 mb-1 bg-white transition-transform duration-500 ${
              visivel ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`h-1 w-8 mb-1 bg-white transition-transform duration-600 ${
              visivel ? "-rotate-45" : ""
            }`}
          />
          <div
            className={`h-1 w-8 mb-1 bg-white transition-transform duration-600 ${
              visivel ? "hidden" : "flex"
            }`}
          />
        </div>
        <div>
          <ul
            className={`transition-all duration-500 flex flex-col font-bold h-auto w-40 md:w-64 fixed top-28 gap-5 p-3 bg-black bg-opacity-80 justify-around items-center ${
              visivel ? "left-3" : "-left-full"
            }`}
          >
            {routes.map((r, index) => (
              <button
                key={index}
                className={`${
                  visivel ? "flex" : "hidden"
                } text-white hover:text-blue-400 p-2 border-solid border-2 border-sky-500 rounded-full text-sm md:text-lg lg:text-xl px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4`}
              >
                <NavLink
                  to={r.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {r.text}
                </NavLink>
              </button>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img
          src="./ico.png"
          className="relative z-10 h-16 sm:h-20 transition filter hover:filter-drop-shadow animate-pulse"
          alt="React logo"
        />
      </div>
      <div>
        <button className="text-white font-bold rounded-full">
          <FaUserCircle className="text-4xl sm:text-5xl m-auto" />
          <h2 className="text-2xl sm:text-3xl font-semibold italic font-mono text-white">
            login
          </h2>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
