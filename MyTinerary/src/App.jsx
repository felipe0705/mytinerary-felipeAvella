import Navbar from "./header";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="absolute rounded-lg overflow-hidden w-full h-full">
        <img
          className="animate-zoom h-auto w-auto   "
          src="/travel.jpg"
          alt="travel.png"
        />
      </div>
      <div className="absolute right-24 top-32">
      <h1 className="text-5xl font-bold">My Tineraries</h1>
      </div>
      <section className="absolute left-0 right-0 h-screen  flex flex-col justify-center items-center text-center max-w-md gap-4 m-auto">
        
        <p className="text-2xl font-mono">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <a
          className=" transition duration-700 ease-in-out  bg-blue-500 hover:bg-indigo-500 text-white shadow-lg font-bold rounded-lg p-3 text-center   text-xl px-8 "
          href="/cities"
        >
          EXPLORE NOW
        </a>
      </section>
    </>
  );
}

export default App;
