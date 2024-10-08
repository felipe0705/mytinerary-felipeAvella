import { PiCityBold } from "react-icons/pi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Home() {
  const routes = [{ to: "./cities", text: "Cities" }];
  return (
    <>
      <div className=" absolute overflow-hidden w-full h-full ">
        <img
          className=" absolute animate-zoom bg-local  h-full w-full  object-center brightness-[.65] shadow-lg  false"
          src="viajes.jpeg"
          alt="travel.png"
        />
      </div>
      <section className="flex flex-col  justify-around items-center text-center  w-full max-w-md  m-auto">
        <div className="">
          <h1 className="text-5xl relative text-white rounded-full  italic font-mono font-bold ">
            My Tineraries
          </h1>

          <p className="  w-full rounded-full   p-2 text-xl italic font-mono  backdrop-blur  text-white  hover:text-sky-400 ">
            &quot;Find your perfect trip, designed by insiders who know and love
            their cities!&quot;
          </p>
        </div>
        <div className="pt-8">
          <div className="relative justify-center flex">
            <PiCityBold className="text-sky-400 text-6xl  " />
          </div>
          <h2 className="text-2xl text-white rounded-full italic font-mono  backdrop-blur">
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
                <NavLink to={r.to}>Explore Now!</NavLink>
              </button>
            ))}
            <BsArrowLeftCircle className="text-sky-400 text-6xl  horizontal-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}
