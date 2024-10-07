import { PiCityBold } from "react-icons/pi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Home() {
  const routes = [{ to: "/Cities", text: "Cities" }];
  return (
    <>
      <div className=" absolute overflow-hidden w-full h-screen ">
        <img
          className="animate-zoom absolute h-full w-full object-cover object-center brightness-[.65] shadow-lg  false"
          src="viajes.jpeg"
          alt="travel.png"
        />
      </div>
      <section className="h-screen flex flex-col pt-48 items-center text-center justify-center  max-w-md gap-4 m-auto">

        <h1 className="text-5xl relative text-white rounded-full p-2 italic font-mono font-bold ">
          My Tineraries
        </h1>

        <p className="  w-full rounded-full mt-28  p-2 text-xl italic font-mono  backdrop-blur  text-white  hover:text-sky-400 ">
          &quot;Find your perfect trip, designed by insiders who know and love
          their cities!&quot;
        </p>
        
        <div className="relative mt-28 flex">
        <PiCityBold className="text-sky-400  text-6xl "/>
        <PiCityBold className="text-sky-400 text-6xl  "/>
        </div>
        <h2 className="text-2xl text-white  italic font-mono  backdrop-blur">
          !Hey you visit cities
        </h2>

        <div className="flex w-full items-center justify-center ">
        {routes.map((r, index) => (
          <button
            key={index}
            className={
              " bg-blue-600 text-white rounded-full px-4 py-2 text-xl italic font-mono hover:bg-sky-400 transform transition duration-500 hover:scale-10"
            }
          >
            <NavLink to={routes.to}>Explore Now!</NavLink>
          </button>
        ))}
        <BsArrowLeftCircle className="text-sky-400 text-6xl  horizontal-bounce" />
        </div>
      </section>
    </>
  );
}
