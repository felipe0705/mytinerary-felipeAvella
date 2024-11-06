import { PiCityBold } from "react-icons/pi";

export function Cities() {
    return (
      <>
        <section
          className="flex flex-col pt-32 p-2 h-full w-full justify-center items-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url('/big-city.jpg')` }}
        >
          <div>
            <h1 className="text-4xl relative text-sky-400 rounded-full  italic font-mono  font-bold md:text-6xl ">
              My Tineraries
            </h1>
  
            <p className="rounded-full max-w-sm mt-16 p-1 text-xl italic font-mono  backdrop-blur text-white md:text-2xl ">
              &quot;Find your perfect trip, designed by insiders who know and love
              their cities!&quot;
            </p>
          </div>
          <div className="pt-12">
            <div className="relative justify-center flex">
              <PiCityBold className="text-sky-400 text-6xl md:text-7xl" />
            </div>
            <h2 className="text-2xl text-sky-400 rounded-full italic font-mono  backdrop-blur md:text-3xl">
              !Hey you visit cities
            </h2>
          </div>
        </section>
      </>
    );
  }
  
