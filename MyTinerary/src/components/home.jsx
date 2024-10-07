import { PiCityBold } from "react-icons/pi";

export default function Home() {
  const CallToAction = () => {
    return (
      <div className=" flex  items-center justify-center ">
        <div className="  p-2 rounded-lg  ">
          <PiCityBold className="text-slate-400 hover:text-sky-400 border-b-4 border-gray-600 text-6xl backdrop-blur ml-20 animate-bounce" />
          <h2 className="text-2xl font-bold mb-4 backdrop-blur">!Hey you visit cities</h2>
          <a
            href="/cities"
            className="inline-block bg-sky-400 text-white rounded-full px-4 py-2 text-xl  hover:bg-blue-600  transform transition duration-500 hover:scale-105"
          >
            Explore Now!
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className=" absolute bg-fixed rounded-lg overflow-hidden w-screen h-screen object-cover object-center brightness-[.65] shadow-lg false">
        <img
          className="animate-zoom h-full w-full   "
          src="travel.jpg"
          alt="travel.png"
        />
      </div>

      <section className="h-screen flex flex-col justify-center items-center text-center   max-w-md m-auto ">
        
        <h1 className="text-5xl text-white font-bold backdrop-blur ">My Tineraries
        </h1>
        
        <CallToAction></CallToAction>
        
          <p className=" w-full rounded-lg shadow-lg  p-1 text-xl italic font-mono  backdrop-blur  text-white  hover:text-sky-400 ">
            &quot;Find your perfect trip, designed by insiders who know and love
            their cities!&quot;
          </p>

          
        
      </section>

      
    </>
  );
}