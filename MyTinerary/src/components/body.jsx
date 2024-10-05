function Body() {
    
    return(
        <>
        <section className="absolute rounded-lg overflow-hidden w-full h-full">
        <img
          className="animate-zoom h-full w-auto   "
          src="/travel.jpg"
          alt="travel.png"
        />
      </section>
      <section className=" content-center  h-full  flex flex-col  items-center text-center ">
        <h1 className="text-5xl font-serif font-bold">My Tineraries</h1>
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
    )

}
export default Body;
