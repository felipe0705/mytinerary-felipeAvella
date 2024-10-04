import Navbar from "./header";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="absolute overflow-hidden w-full h-screen">
        <img
          className="animate-zoom absolute w-full h-full object-cover object-center  shadow-lg false"
          src="/travel.jpg"
          alt="travel.png"
        />
      </div>
      <section className="absolute left-0 right-0 h-screen  flex flex-col justify-center items-center text-center max-w-md gap-4 m-auto">
        <h1 className="text-5xl font-bold">My Tineraries</h1>
        <p className="text-2xl font-mono">
          "Find your perfect trip, designed by insiders who know and love their
          cities!"
        </p>
        <a
          className="disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 active:scale-95 disabled:active:scale-100  transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center   text-xl px-8 bg-white/30 animate-pulse hover:animate-none"
          href="/cities"
        >
          EXPLORE NOW
        </a>
      </section>
    </>
  );
}

export default App;
