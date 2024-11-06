
import { NavLink } from "react-router-dom";
import { PiCityBold } from "react-icons/pi";
import { BsArrowLeftCircle } from "react-icons/bs";


export  function Home() {
  const routes = [{ to: "./cities", text: "Cities" }];
  return (
    <>
      <div className=" absolute -z-10 overflow-hidden w-full h-full ">
        <img
          className=" absolute animate-zoom object-cover w-full h-full  brightness-[.65] shadow-lg "
          src="viajes.jpeg"
          alt="travel.png"
        />
      </div>

      <section className="flex flex-col pt-40 p-2 h-screen justify-center items-center text-center  w-full max-w-sm gap-y-10 m-auto md:max-w-lg lg:max-w-2xl ">
        <div>
          <h1 className="text-4xl relative text-white rounded-full  italic font-mono  font-bold md:text-6xl ">
            My Tineraries
          </h1>

          <p className="rounded-full max-w-sm mt-10 p-1 text-xl italic font-mono  backdrop-blur text-sky-400 md:text-2xl ">
            &quot;Find your perfect trip, designed by insiders who know and love
            their cities!&quot;
          </p>
        </div>
        <div className="pt-8">
          <div className="relative justify-center flex">
            <PiCityBold className="text-sky-400 text-6xl md:text-7xl"/>
          </div>
          <h2 className="text-2xl text-white rounded-full italic font-mono  backdrop-blur md:text-3xl">
            !Hey you visit cities
          </h2>

          <div className="flex w-full items-center justify-center  ">
            {routes.map((r, index) => (
              <button
                key={index}
                className={
                  " bg-blue-600 text-white rounded-full px-4 py-2 text-xl italic font-mono hover:bg-sky-400 transform transition duration-500 hover:scale-10  md:py-3 md:text-2xl"
                }
              >
                <NavLink to={r.to} activeClassName="active">Explore Now!</NavLink>
              </button>
            ))}
            <BsArrowLeftCircle className="text-sky-400 text-6xl  md:text-7xl  animate-horizontal-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}

